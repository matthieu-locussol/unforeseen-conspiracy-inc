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

   public productionIncrease!: GeneratorProduction;

   public conditions!: GeneratorConditions;

   public unlocked!: boolean;

   public level!: number;

   constructor(id: GeneratorId) {
      makeAutoObservable(this);

      this._initialize(id);
   }

   public buy(amount: number): void {
      this.level += amount;
      this.unlocked = true;
   }

   public getCost(amount: number): GeneratorCost {
      const newLevel = this.level + amount;

      const proofsCost = Math.floor(
         this.baseCost.proofs * Math.pow(this.costMultiplier.proofs, newLevel),
      );
      const followersCost = Math.floor(
         this.baseCost.followers * Math.pow(this.costMultiplier.followers, newLevel),
      );

      return {
         proofs: proofsCost,
         followers: followersCost,
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
         this.baseProduction.proofs + (amount - 1) * this.productionIncrease.proofs;
      const followersProduction =
         this.baseProduction.followers + (amount - 1) * this.productionIncrease.followers;
      const paranoiaProduction =
         this.baseProduction.paranoia + (amount - 1) * this.productionIncrease.paranoia;

      return {
         proofs: +proofsProduction.toFixed(1),
         followers: +followersProduction.toFixed(1),
         paranoia: +paranoiaProduction.toFixed(1),
      };
   }

   public getProductionIncrease(amount: number): GeneratorProduction {
      return {
         proofs: +(
            this.getProduction(this.level + amount).proofs - this.getProduction(this.level).proofs
         ).toFixed(1),
         followers: +(
            this.getProduction(this.level + amount).followers -
            this.getProduction(this.level).followers
         ).toFixed(1),
         paranoia: +(
            this.getProduction(this.level + amount).paranoia -
            this.getProduction(this.level).paranoia
         ).toFixed(1),
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
      this.productionIncrease = { ...data.productionMultiplier };
      this.conditions = { ...data.conditions };
      this.unlocked = data.unlocked;

      this.level = 0;
   }
}
