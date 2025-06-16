import type {
   GeneratorCategory,
   GeneratorConditions,
   GeneratorCost,
   GeneratorId,
   GeneratorProduction,
   SerializedGeneratorData,
} from '../types/generators';

import { makeAutoObservable } from 'mobx';

import { GENERATORS } from '../data/generators';

export class GeneratorStore {
   public id!: GeneratorId;

   public categories!: GeneratorCategory[];

   public baseCost!: GeneratorCost;

   public costMultiplier!: GeneratorCost;

   public baseProduction!: GeneratorProduction;

   public productionMultiplier!: GeneratorProduction;

   public conditions!: GeneratorConditions;

   public unlocked!: boolean;

   public level!: number;

   constructor(id: GeneratorId) {
      makeAutoObservable(this);

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
   public getCost(amount: number): GeneratorCost {
      let totalProofsCost = 0;
      let totalFollowersCost = 0;

      for (let i = 1; i <= amount; i++) {
         const levelToBuy = this.level + i;

         totalProofsCost += this.baseCost.proofs * Math.pow(this.costMultiplier.proofs, levelToBuy);
         totalFollowersCost +=
            this.baseCost.followers * Math.pow(this.costMultiplier.followers, levelToBuy);
      }

      return {
         proofs: Math.floor(totalProofsCost),
         followers: Math.floor(totalFollowersCost),
      };
   }

   public getProduction(amount: number): GeneratorProduction {
      if (!this.unlocked || this.level === 0) {
         return {
            proofs: 0,
            followers: 0,
            paranoia: 0,
         };
      }

      const proofsProduction =
         this.baseProduction.proofs + (amount - 1) * this.productionMultiplier.proofs;
      const followersProduction =
         this.baseProduction.followers + (amount - 1) * this.productionMultiplier.followers;
      const paranoiaProduction =
         this.baseProduction.paranoia + (amount - 1) * this.productionMultiplier.paranoia;

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
