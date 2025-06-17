import type {
   GeneratorId,
   GeneratorProduction,
   SerializedGeneratorData,
} from '../types/generators';
import type { Boost, CategoryId, Conditions, Cost, Upgrade, UpgradeId } from '../types/upgrades';

import { makeAutoObservable } from 'mobx';

import { GENERATORS } from '../data/generators';
import { UPGRADES } from '../data/upgrades';

export class GeneratorStore {
   public id!: GeneratorId;

   public categories!: CategoryId[];

   public baseCost!: Cost;

   public costMultiplier!: Cost;

   public baseProduction!: GeneratorProduction;

   public productionMultiplier!: GeneratorProduction;

   public conditions!: Conditions;

   public unlocked!: boolean;

   public level!: number;

   public upgradesIds!: UpgradeId[];

   public purchasedUpgrades: Set<UpgradeId> = new Set();

   constructor(id: GeneratorId) {
      makeAutoObservable(this);

      this._initialize(id);
   }

   public get upgrades(): Upgrade[] {
      return this.upgradesIds
         .map((upgradeId) => UPGRADES.find(({ id }) => id === upgradeId))
         .filter((upgrade) => upgrade !== undefined) as Upgrade[];
   }

   public hasPurchasedUpgrade(upgradeId: UpgradeId): boolean {
      const upgrade = this.upgrades.find(({ id }) => id === upgradeId);

      if (upgrade === undefined) {
         return false;
      }

      return upgrade.purchased;
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
    * @description Buy an upgrade for this generator.
    * @param upgradeId - The ID of the upgrade to buy.
    * @returns true if the upgrade was successfully purchased, false otherwise.
    */
   public buyUpgrade(upgradeId: UpgradeId): boolean {
      const upgrade = this.upgrades.find(({ id }) => id === upgradeId);

      if (upgrade === undefined || upgrade.purchased) {
         return false;
      }

      upgrade.purchased = true;
      this.purchasedUpgrades.add(upgradeId);

      return true;
   }

   /**
    * @description Check if the player can buy an upgrade.
    * @param upgradeId - The ID of the upgrade to check.
    * @param gameStore - The game store to check resources.
    * @returns true if the upgrade can be purchased, false otherwise.
    */
   public canBuyUpgrade(upgradeId: UpgradeId, proofs: number, followers: number): boolean {
      const upgrade = this.upgrades.find((u) => u.id === upgradeId);

      if (!upgrade || upgrade.purchased) {
         return false;
      }

      if (proofs < upgrade.cost.proofs || followers < upgrade.cost.followers) {
         return false;
      }

      if (proofs < upgrade.conditions.proofs || followers < upgrade.conditions.followers) {
         return false;
      }

      return true;
   }

   /**
    * @description Get the cost to buy **amount** of this generator.
    * @param amount - The amount of new levels you want to buy.
    * @returns The cost to buy *amount* of this generator.
    */
   public getCost(amount: number): Cost {
      let totalProofsCost = 0;
      let totalFollowersCost = 0;

      const costReduction = this.getCostReduction();

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
    * @description Get the cost reduction from upgrades.
    * @returns The cost reduction percentage.
    */
   private getCostReduction(): number {
      let reduction = 0;

      for (const upgradeId of this.purchasedUpgrades) {
         const upgrade = this.upgrades.find(({ id }) => id === upgradeId);

         if (upgrade === undefined) {
            continue;
         }

         for (const boost of upgrade.boosts) {
            if (
               boost.type === 'cost_reduction' &&
               boost.target.type === 'generator' &&
               boost.target.id === this.id
            ) {
               reduction += boost.value;
            }
         }
      }

      return Math.min(reduction, 0.9);
   }

   public getProduction(amount: number): GeneratorProduction {
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

      const flatBoosts = this.getFlatProductionBoosts();

      proofsProduction += flatBoosts.proofs;
      followersProduction += flatBoosts.followers;
      paranoiaProduction += flatBoosts.paranoia;

      const multiplierBoosts = this.getProductionMultipliers();

      proofsProduction *= multiplierBoosts.proofs;
      followersProduction *= multiplierBoosts.followers;
      paranoiaProduction *= multiplierBoosts.paranoia;

      return {
         proofs: +proofsProduction.toFixed(1),
         followers: +followersProduction.toFixed(1),
         paranoia: +paranoiaProduction.toFixed(1),
      };
   }

   /**
    * @description Get flat production boosts from this generator's upgrades.
    * @returns The flat production boosts.
    */
   private getFlatProductionBoosts(): GeneratorProduction {
      let proofs = 0;
      let followers = 0;
      let paranoia = 0;

      for (const upgradeId of this.purchasedUpgrades) {
         const upgrade = this.upgrades.find(({ id }) => id === upgradeId);

         if (upgrade === undefined) {
            continue;
         }

         for (const boost of upgrade.boosts) {
            if (
               boost.type === 'production_flat' &&
               boost.target.type === 'generator' &&
               boost.target.id === this.id
            ) {
               if (boost.resource === 'proofs') {
                  proofs += boost.value;
               } else if (boost.resource === 'followers') {
                  followers += boost.value;
               } else if (boost.resource === 'paranoia') {
                  paranoia += boost.value;
               }
            }
         }
      }

      return { proofs, followers, paranoia };
   }

   /**
    * @description Get production multipliers from this generator's upgrades that target this generator only.
    * @returns The production multipliers.
    */
   private getProductionMultipliers(): GeneratorProduction {
      let proofs = 1;
      let followers = 1;
      let paranoia = 1;

      for (const upgradeId of this.purchasedUpgrades) {
         const upgrade = this.upgrades.find(({ id }) => id === upgradeId);

         if (upgrade === undefined) {
            continue;
         }

         for (const boost of upgrade.boosts) {
            if (
               boost.type === 'production_multiplier' &&
               boost.target.type === 'generator' &&
               boost.target.id === this.id
            ) {
               if (boost.resource === 'proofs') {
                  proofs += boost.value;
               } else if (boost.resource === 'followers') {
                  followers += boost.value;
               } else if (boost.resource === 'paranoia') {
                  paranoia += boost.value;
               }
            }
         }
      }

      return { proofs, followers, paranoia };
   }

   /**
    * @description Get stats boosts that apply to this generator from its own upgrades.
    * @returns Array of stats boosts.
    */
   public getAppliedStatsBoosts(): Boost[] {
      const boosts: Boost[] = [];

      for (const upgradeId of this.purchasedUpgrades) {
         const upgrade = this.upgrades.find(({ id }) => id === upgradeId);

         if (upgrade === undefined) {
            continue;
         }

         for (const boost of upgrade.boosts) {
            if (boost.target.type === 'generator' && boost.target.id === this.id) {
               boosts.push(boost);
            }
         }
      }

      return boosts;
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
      const upgradesRecord: Record<UpgradeId, boolean> = UPGRADES.reduce(
         (acc, upgrade) => ({ ...acc, [upgrade.id]: false }),
         {} as Record<UpgradeId, boolean>,
      );

      for (const upgrade of this.upgrades) {
         upgradesRecord[upgrade.id] = upgrade.purchased;
      }

      return {
         id: this.id,
         level: this.level,
         unlocked: this.unlocked,
         upgrades: upgradesRecord,
      };
   }

   public deserialize(data: SerializedGeneratorData): void {
      this.level = data.level;
      this.unlocked = data.unlocked;

      if (data.upgrades) {
         this.purchasedUpgrades.clear();
         for (const [upgradeId, purchased] of Object.entries(data.upgrades)) {
            if (purchased) {
               this.purchasedUpgrades.add(upgradeId as UpgradeId);
               const upgrade = this.upgrades.find((u) => u.id === upgradeId);

               if (upgrade) {
                  upgrade.purchased = true;
               }
            }
         }
      }
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
      this.upgradesIds = [...data.upgradesIds];
      this.level = 0;
      this.purchasedUpgrades.clear();
   }
}
