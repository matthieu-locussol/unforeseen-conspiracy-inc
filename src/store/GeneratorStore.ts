import type {
   GeneratorId,
   GeneratorProduction,
   SerializedGeneratorData,
} from '../types/generators';
import type { CategoryId, Conditions, Cost } from '../types/upgrades';
import type { GameStore } from './GameStore';

import { makeAutoObservable } from 'mobx';

import { GENERATORS } from '../data/generators';

export class GeneratorStore {
   private _store: GameStore;

   public id!: GeneratorId;

   public categories!: CategoryId[];

   public baseCost!: Cost;

   public costMultiplier!: Cost;

   public baseProduction!: GeneratorProduction;

   public productionMultiplier!: GeneratorProduction;

   public conditions!: Conditions;

   public unlocked!: boolean;

   public level!: number;

   constructor(id: GeneratorId, store: GameStore) {
      makeAutoObservable(this);

      this._store = store;

      this._initialize(id);
   }

   /**
    * @description Buy **amount** levels of this generator.
    * @param amount - The amount of new levels to buy.
    */
   public buy(amount: number): void {
      this.level += amount;
      this.unlocked = true;
   }

   /**
    * @description Get the cost to buy **amount** of this generator.
    * @param amount - The amount of new levels you want to buy.
    * @returns The cost to buy *amount* of this generator.
    */
   public getCost(amount: number, costReduction: number): Cost {
      let totalProofsCost = 0;
      let totalFollowersCost = 0;

      for (let i = 1; i <= amount; i++) {
         const levelToBuy = this.level + i;

         let proofsCost = this.baseCost.proofs * Math.pow(this.costMultiplier.proofs, levelToBuy);
         let followersCost =
            this.baseCost.followers * Math.pow(this.costMultiplier.followers, levelToBuy);

         proofsCost *= 1 - costReduction;
         followersCost *= 1 - costReduction;

         totalProofsCost += proofsCost;
         totalFollowersCost += followersCost;
      }

      return {
         proofs: Math.floor(totalProofsCost),
         followers: Math.floor(totalFollowersCost),
      };
   }

   /**
    * @description Get the base production for a given level (without any bonuses/multipliers from upgrades)
    * @param level - The level to calculate production for
    * @returns The base production for the specified level
    */
   public getBaseProduction(level: number): GeneratorProduction {
      if (!this.unlocked || level === 0) {
         return {
            proofs: 0,
            followers: 0,
            paranoia: 0,
         };
      }

      const proofsProduction =
         this.baseProduction.proofs + (level - 1) * this.productionMultiplier.proofs;
      const followersProduction =
         this.baseProduction.followers + (level - 1) * this.productionMultiplier.followers;
      const paranoiaProduction =
         this.baseProduction.paranoia + (level - 1) * this.productionMultiplier.paranoia;

      return {
         proofs: +proofsProduction.toFixed(1),
         followers: +followersProduction.toFixed(1),
         paranoia: +paranoiaProduction.toFixed(1),
      };
   }

   /**
    * @description Get the effective production including all bonuses and multipliers
    * @param level - The level to calculate production for (defaults to current level)
    * @returns The effective production including all bonuses and multipliers
    */
   public getEffectiveProduction(level: number = this.level): GeneratorProduction {
      const baseProduction = this.getBaseProduction(level);

      if (!this.unlocked || level === 0) {
         return baseProduction;
      }

      // Get bonuses and multipliers from the game store
      const multipliers = this._store.getGeneratorMultipliers(this);
      const flatBonuses = this._store.getFlatBonusesForGenerator(this);

      // Apply flat bonuses first, then multipliers
      const finalProduction = {
         proofs: (baseProduction.proofs + flatBonuses.proofs) * multipliers.proofs,
         followers: (baseProduction.followers + flatBonuses.followers) * multipliers.followers,
         paranoia: (baseProduction.paranoia + flatBonuses.paranoia) * multipliers.paranoia,
      };

      return {
         proofs: +finalProduction.proofs.toFixed(1),
         followers: +finalProduction.followers.toFixed(1),
         paranoia: +finalProduction.paranoia.toFixed(1),
      };
   }

   /**
    * @description Get the production increase from buying additional levels
    * @param amount - The amount of levels to add
    * @returns The production increase
    */
   public getProductionIncrease(amount: number): GeneratorProduction {
      const currentProduction = this.effectiveProduction;
      const newProduction = this.getEffectiveProduction(this.level + amount);

      return {
         proofs: +(newProduction.proofs - currentProduction.proofs).toFixed(1),
         followers: +(newProduction.followers - currentProduction.followers).toFixed(1),
         paranoia: +(newProduction.paranoia - currentProduction.paranoia).toFixed(1),
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
         level: this.level,
         unlocked: this.unlocked,
      };
   }

   public deserialize(data: SerializedGeneratorData): void {
      this.level = data.level;
      this.unlocked = data.unlocked;
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
      this.conditions = { ...data.conditions };
      this.unlocked = data.unlocked;
      this.level = 0;
   }
}
