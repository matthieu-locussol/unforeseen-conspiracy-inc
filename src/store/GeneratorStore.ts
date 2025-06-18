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

   public getProduction(
      amount: number,
      flatBonus: GeneratorProduction = { proofs: 0, followers: 0, paranoia: 0 },
      multiplyBonus: GeneratorProduction = { proofs: 1, followers: 1, paranoia: 1 },
   ): GeneratorProduction {
      if (!this.unlocked || this.level === 0) {
         return {
            proofs: 0,
            followers: 0,
            paranoia: 0,
         };
      }

      let proofsProduction =
         this.baseProduction.proofs + (amount - 1) * this.productionMultiplier.proofs;
      let followersProduction =
         this.baseProduction.followers + (amount - 1) * this.productionMultiplier.followers;
      let paranoiaProduction =
         this.baseProduction.paranoia + (amount - 1) * this.productionMultiplier.paranoia;

      proofsProduction += flatBonus.proofs;
      followersProduction += flatBonus.followers;
      paranoiaProduction += flatBonus.paranoia;

      proofsProduction *= multiplyBonus.proofs;
      followersProduction *= multiplyBonus.followers;
      paranoiaProduction *= multiplyBonus.paranoia;

      return {
         proofs: +proofsProduction.toFixed(1),
         followers: +followersProduction.toFixed(1),
         paranoia: +paranoiaProduction.toFixed(1),
      };
   }

   public getProductionIncrease(amount: number): GeneratorProduction {
      const newProduction = this.getProduction(this.level + amount);

      return {
         proofs: +(newProduction.proofs - this.effectiveProduction.proofs).toFixed(1),
         followers: +(newProduction.followers - this.effectiveProduction.followers).toFixed(1),
         paranoia: +(newProduction.paranoia - this.effectiveProduction.paranoia).toFixed(1),
      };
   }

   public get effectiveProduction(): GeneratorProduction {
      return this.getProduction(this.level);
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
