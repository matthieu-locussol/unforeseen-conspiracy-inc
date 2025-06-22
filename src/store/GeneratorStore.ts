import type {
   GeneratorId,
   GeneratorProduction,
   SerializedGeneratorData,
} from '../types/generators';
import type { CategoryId, Conditions, Cost, UpgradeId } from '../types/upgrades';
import type { GameStore } from './GameStore';
import type { UpgradeStore } from './UpgradeStore';

import { Decimal } from 'decimal.js';
import { makeAutoObservable } from 'mobx';

import { GENERATORS } from '../data/generators';

Decimal.set({ rounding: 1 });

export class GeneratorStore {
   private _store: GameStore;

   public id!: GeneratorId;

   public categories!: CategoryId[];

   public baseCost!: Cost;

   public costMultiplier!: Cost;

   public baseProduction!: GeneratorProduction;

   public productionMultiplier!: GeneratorProduction;

   public levelScaling!: Decimal;

   public conditions!: Conditions;

   public unlocked!: boolean;

   public level!: Decimal;

   public upgradesIds!: UpgradeId[];

   constructor(id: GeneratorId, store: GameStore) {
      makeAutoObservable(this);

      this._store = store;

      this._initialize(id);
   }

   public get upgrades(): UpgradeStore[] {
      const upgradesStores = this.upgradesIds.map((upgradeId) => {
         return this._store.upgrades.find((upgrade) => upgrade.id === upgradeId);
      });

      return upgradesStores.filter((upgrade): upgrade is UpgradeStore => upgrade !== undefined);
   }

   /**
    * @description Buy **amount** levels of this generator.
    * @param amount - The amount of new levels to buy.
    */
   public buy(amount: Decimal): void {
      this.level = this.level.add(amount);
      this.unlocked = true;
   }

   /**
    * @description Get the cost to buy **amount** of this generator.
    * @param amount - The amount of new levels you want to buy.
    * @returns The cost to buy *amount* of this generator.
    */
   public getCost(amount: Decimal, costReduction: Decimal): Cost {
      let totalProofsCost = new Decimal(0);
      let totalFollowersCost = new Decimal(0);

      for (let i = new Decimal(1); i.lessThanOrEqualTo(amount); i = i.add(1)) {
         const levelToBuy = this.level.add(i);

         let proofsCost = this.baseCost.proofs.mul(this.costMultiplier.proofs.pow(levelToBuy));
         let followersCost = this.baseCost.followers.mul(
            this.costMultiplier.followers.pow(levelToBuy),
         );

         proofsCost = proofsCost.mul(new Decimal(1).sub(costReduction));
         followersCost = followersCost.mul(new Decimal(1).sub(costReduction));

         totalProofsCost = totalProofsCost.add(proofsCost);
         totalFollowersCost = totalFollowersCost.add(followersCost);
      }

      return {
         proofs: totalProofsCost.toDecimalPlaces(1),
         followers: totalFollowersCost.toDecimalPlaces(1),
      };
   }

   /**
    * @description Get the base production for a given level (without any bonuses/multipliers from upgrades)
    * @param level - The level to calculate production for
    * @returns The base production for the specified level
    */
   public getBaseProduction(level: Decimal): GeneratorProduction {
      if (!this.unlocked || level.eq(0)) {
         return {
            proofs: new Decimal(0),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         };
      }

      // Apply exponential scaling: baseProduction * (1 + productionMultiplier * (level - 1)) * level^(levelScaling - 1)
      const levelFactor = level.pow(this.levelScaling.sub(1));
      const linearComponent = new Decimal(1).add(
         this.productionMultiplier.proofs.mul(level.sub(1)),
      );

      const proofsProduction = this.baseProduction.proofs.mul(levelFactor).mul(linearComponent);

      const followersLinearComponent = new Decimal(1).add(
         this.productionMultiplier.followers.mul(level.sub(1)),
      );
      const followersProduction = this.baseProduction.followers
         .mul(levelFactor)
         .mul(followersLinearComponent);

      const paranoiaLinearComponent = new Decimal(1).add(
         this.productionMultiplier.paranoia.mul(level.sub(1)),
      );
      const paranoiaProduction = this.baseProduction.paranoia
         .mul(levelFactor)
         .mul(paranoiaLinearComponent);

      return {
         proofs: proofsProduction.toDecimalPlaces(1),
         followers: followersProduction.toDecimalPlaces(1),
         paranoia: paranoiaProduction.toDecimalPlaces(1),
      };
   }

   /**
    * @description Get the effective production including all bonuses and multipliers
    * @param level - The level to calculate production for (defaults to current level)
    * @returns The effective production including all bonuses and multipliers
    */
   public getEffectiveProduction(level: Decimal = this.level): GeneratorProduction {
      const baseProduction = this.getBaseProduction(level);

      if (!this.unlocked || level.eq(0)) {
         return baseProduction;
      }

      // Get bonuses and multipliers from the game store
      if (
         typeof this._store.getGeneratorMultipliers !== 'function' ||
         typeof this._store.getFlatBonusesForGenerator !== 'function'
      ) {
         throw new Error('GameStore is missing required methods for production calculation');
      }
      const multipliers = this._store.getGeneratorMultipliers(this);
      const flatBonuses = this._store.getFlatBonusesForGenerator(this);

      // Apply flat bonuses first, then multipliers
      const finalProduction = {
         proofs: baseProduction.proofs.add(flatBonuses.proofs).mul(multipliers.proofs),
         followers: baseProduction.followers.add(flatBonuses.followers).mul(multipliers.followers),
         paranoia: baseProduction.paranoia.add(flatBonuses.paranoia).mul(multipliers.paranoia),
      };

      console.log({
         baseProduction: {
            proofs: baseProduction.proofs.toString(),
            followers: baseProduction.followers.toString(),
            paranoia: baseProduction.paranoia.toString(),
         },
         multipliers: {
            proofs: multipliers.proofs.toString(),
            followers: multipliers.followers.toString(),
            paranoia: multipliers.paranoia.toString(),
         },
         flatBonuses: {
            proofs: flatBonuses.proofs.toString(),
            followers: flatBonuses.followers.toString(),
            paranoia: flatBonuses.paranoia.toString(),
         },
         finalProduction: {
            proofs: finalProduction.proofs.toString(),
            followers: finalProduction.followers.toString(),
            paranoia: finalProduction.paranoia.toString(),
         },
      });

      return {
         proofs: finalProduction.proofs.toDecimalPlaces(1),
         followers: finalProduction.followers.toDecimalPlaces(1),
         paranoia: finalProduction.paranoia.toDecimalPlaces(1),
      };
   }

   /**
    * @description Get the production increase from buying additional levels
    * @param amount - The amount of levels to add
    * @returns The production increase
    */
   public getProductionIncrease(amount: Decimal): GeneratorProduction {
      const currentProduction = this.effectiveProduction;
      const newProduction = this.getEffectiveProduction(this.level.add(amount));

      return {
         proofs: newProduction.proofs.sub(currentProduction.proofs).toDecimalPlaces(1),
         followers: newProduction.followers.sub(currentProduction.followers).toDecimalPlaces(1),
         paranoia: newProduction.paranoia.sub(currentProduction.paranoia).toDecimalPlaces(1),
      };
   }

   /**
    * @description Get the current effective production (including all bonuses and multipliers)
    */
   public get effectiveProduction(): GeneratorProduction {
      return this.getEffectiveProduction(this.level);
   }

   /**
    * @description Get the current base production (without bonuses and multipliers)
    */
   public get baseProductionAtCurrentLevel(): GeneratorProduction {
      return this.getBaseProduction(this.level);
   }

   public reset(): void {
      this._initialize(this.id);
   }

   public serialize(): SerializedGeneratorData {
      return {
         id: this.id,
         level: this.level.toString(),
         unlocked: this.unlocked,
         levelScaling: this.levelScaling.toString(),
      };
   }

   public deserialize(data: SerializedGeneratorData): void {
      this.level = new Decimal(data.level);
      this.unlocked = data.unlocked;
      this.levelScaling = new Decimal(data.levelScaling);
   }

   private _initialize(id: GeneratorId): void {
      const data = GENERATORS.find((generator) => generator.id === id);

      if (data === undefined) {
         throw new Error(`No generator found with id: '${id}'`);
      }

      this.id = id;

      this.categories = [...data.categories];
      this.baseCost = { ...data.baseCost };
      this.costMultiplier = { ...data.costMultiplier };
      this.baseProduction = { ...data.baseProduction };
      this.productionMultiplier = { ...data.productionMultiplier };
      this.levelScaling = data.levelScaling;
      this.conditions = { ...data.conditions };
      this.unlocked = data.unlocked;
      this.level = new Decimal(0);
      this.upgradesIds = [...data.upgradesIds];
   }
}
