import type { SerializedGameData } from '../types/game';
import type { GeneratorId, UpgradeId } from '../types/generators';

import { makeAutoObservable } from 'mobx';

import { GENERATORS } from '../data/generators';

import { ClickerStore } from './ClickerStore';
import { GeneratorStore } from './GeneratorStore';
import { ResourceStore } from './ResourceStore';
import { StatisticsStore } from './StatisticsStore';

export class GameStore {
   // Main game resources
   public proofs: ResourceStore;
   public followers: ResourceStore;
   public paranoia: ResourceStore;

   // Game systems
   public generators: GeneratorStore[];
   public clicker: ClickerStore;
   public statistics: StatisticsStore;

   // Game state
   public lastUpdateTime: number;
   public isRunning: boolean = true;

   constructor() {
      makeAutoObservable(this);

      // Initialize resources - only proofs are clickable
      this.proofs = new ResourceStore('proofs');
      this.followers = new ResourceStore('followers');
      this.paranoia = new ResourceStore('paranoia');

      // Initialize game systems
      this.generators = [];
      this.clicker = new ClickerStore('default');
      this.statistics = new StatisticsStore();

      // Load initial game data
      this.initializeGenerators();

      this.lastUpdateTime = Date.now();
   }

   private initializeGenerators(): void {
      GENERATORS.forEach((generator) => {
         this.generators.push(new GeneratorStore(generator.id));
      });
   }

   public tick(): void {
      if (!this.isRunning) {
         return;
      }

      this.lastUpdateTime = Date.now();

      const previousProofs = this.proofs.value;
      const previousFollowers = this.followers.value;
      const previousParanoia = this.paranoia.value;

      // Get global multipliers that apply to all generators
      const globalMultipliers = this.getGlobalMultipliers();

      this.generators.forEach((generator) => {
         const production = generator.effectiveProduction;

         // Get category-specific multipliers for this generator
         const categoryMultipliers = this.getCategoryMultipliers(generator);

         // Apply both global and category multipliers
         const finalProofsProduction =
            production.proofs * globalMultipliers.proofs * categoryMultipliers.proofs;
         const finalFollowersProduction =
            production.followers * globalMultipliers.followers * categoryMultipliers.followers;
         const finalParanoiaProduction =
            production.paranoia * globalMultipliers.paranoia * categoryMultipliers.paranoia;

         this.proofs.add(finalProofsProduction);
         this.followers.add(finalFollowersProduction);
         this.paranoia.add(finalParanoiaProduction);
      });

      this.proofs.tick();
      this.followers.tick();
      this.paranoia.tick();

      this.statistics.trackResourceGeneration(
         this.proofs.value - previousProofs,
         this.followers.value - previousFollowers,
         this.paranoia.value - previousParanoia,
      );
   }

   /**
    * @description Get global multipliers from all purchased upgrades.
    */
   private getGlobalMultipliers(): { proofs: number; followers: number; paranoia: number } {
      let proofsMultiplier = 1;
      let followersMultiplier = 1;
      let paranoiaMultiplier = 1;

      for (const generator of this.generators) {
         for (const upgradeId of generator.purchasedUpgrades) {
            const upgrade = generator.upgrades.find(({ id }) => id === upgradeId);

            if (upgrade === undefined) {
               continue;
            }

            for (const boost of upgrade.statsBoosts) {
               if (boost.type === 'production_multiplier') {
                  if (
                     boost.target === 'all_generators' ||
                     (boost.target === 'category' && generator.categories.includes(boost.category!))
                  ) {
                     if (boost.resource === 'proofs') {
                        proofsMultiplier += boost.value;
                     } else if (boost.resource === 'followers') {
                        followersMultiplier += boost.value;
                     } else if (boost.resource === 'paranoia') {
                        paranoiaMultiplier += boost.value;
                     }
                  }
               }
            }
         }
      }

      return {
         proofs: proofsMultiplier,
         followers: followersMultiplier,
         paranoia: paranoiaMultiplier,
      };
   }

   /**
    * @description Get category-specific multipliers for a given generator.
    */
   public getCategoryMultipliers(targetGenerator: GeneratorStore): {
      proofs: number;
      followers: number;
      paranoia: number;
   } {
      let proofsMultiplier = 1;
      let followersMultiplier = 1;
      let paranoiaMultiplier = 1;

      for (const generator of this.generators) {
         for (const upgradeId of generator.purchasedUpgrades) {
            const upgrade = generator.upgrades.find(({ id }) => id === upgradeId);

            if (upgrade === undefined) {
               continue;
            }

            for (const boost of upgrade.statsBoosts) {
               if (boost.type === 'production_multiplier' && boost.target === 'category') {
                  if (targetGenerator.categories.includes(boost.category!)) {
                     if (boost.resource === 'proofs') {
                        proofsMultiplier += boost.value;
                     } else if (boost.resource === 'followers') {
                        followersMultiplier += boost.value;
                     } else if (boost.resource === 'paranoia') {
                        paranoiaMultiplier += boost.value;
                     }
                  }
               }
            }
         }
      }

      return {
         proofs: proofsMultiplier,
         followers: followersMultiplier,
         paranoia: paranoiaMultiplier,
      };
   }

   public canBuyGenerator(id: GeneratorId, amount: number): boolean {
      const generatorStore = this.generators.find((generator) => generator.id === id);

      if (generatorStore === undefined) {
         return false;
      }

      const cost = generatorStore.getCost(amount);

      return this.proofs.value >= cost.proofs && this.followers.value >= cost.followers;
   }

   public buyGenerator(id: GeneratorId, amount: number): boolean {
      const generatorStore = this.generators.find((generator) => generator.id === id);

      if (generatorStore === undefined) {
         return false;
      }

      const cost = generatorStore.getCost(amount);

      const successProofs = this.proofs.remove(cost.proofs);
      const successFollowers = this.followers.remove(cost.followers);

      if (!successProofs || !successFollowers) {
         return false;
      }

      generatorStore.buy(amount);

      return true;
   }

   /**
    * @description Check if the player can buy an upgrade.
    * @param generatorId - The ID of the generator.
    * @param upgradeId - The ID of the upgrade.
    * @returns true if the upgrade can be purchased, false otherwise.
    */
   public canBuyUpgrade(generatorId: GeneratorId, upgradeId: UpgradeId): boolean {
      const generatorStore = this.generators.find(({ id }) => id === generatorId);

      if (generatorStore === undefined) {
         return false;
      }

      return generatorStore.canBuyUpgrade(upgradeId, this.proofs.value, this.followers.value);
   }

   /**
    * @description Buy an upgrade for a generator.
    * @param generatorId - The ID of the generator.
    * @param upgradeId - The ID of the upgrade.
    * @returns true if the upgrade was successfully purchased, false otherwise.
    */
   public buyUpgrade(generatorId: GeneratorId, upgradeId: UpgradeId): boolean {
      const generatorStore = this.generators.find((generator) => generator.id === generatorId);

      if (generatorStore === undefined) {
         return false;
      }

      const upgrade = generatorStore.upgrades.find(({ id }) => id === upgradeId);

      if (!upgrade || upgrade.purchased) {
         return false;
      }

      if (!this.canBuyUpgrade(generatorId, upgradeId)) {
         return false;
      }

      const successProofs = this.proofs.remove(upgrade.cost.proofs);
      const successFollowers = this.followers.remove(upgrade.cost.followers);

      if (!successProofs || !successFollowers) {
         return false;
      }

      return generatorStore.buyUpgrade(upgradeId);
   }

   public clickProofs(): number {
      const value = this.clicker.click();

      this.proofs.add(value);
      this.statistics.trackClicks(1);

      return value;
   }

   public start(): void {
      if (this.isRunning) {
         return;
      }

      this.isRunning = true;
      this.lastUpdateTime = Date.now(); // TODO: Might not be needed?
   }

   public stop(): void {
      if (!this.isRunning) {
         return;
      }

      this.isRunning = false;
   }

   public togglePlay(): void {
      if (this.isRunning) {
         this.stop();
      } else {
         this.start();
      }
   }

   public serialize(): SerializedGameData {
      return {
         proofs: this.proofs.serialize(),
         followers: this.followers.serialize(),
         paranoia: this.paranoia.serialize(),
         generators: this.generators.map((generator) => generator.serialize()),
         clicker: this.clicker.serialize(),
         statistics: this.statistics.serialize(),
         lastUpdateTime: this.lastUpdateTime,
         isRunning: this.isRunning,
      };
   }

   public deserialize(data: SerializedGameData): void {
      this.proofs.deserialize(data.proofs);
      this.followers.deserialize(data.followers);
      this.paranoia.deserialize(data.paranoia);

      this.generators = data.generators.map((generatorData) => {
         const generator = new GeneratorStore(generatorData.id);

         generator.deserialize(generatorData);

         return generator;
      });

      this.clicker.deserialize(data.clicker);
      this.statistics.deserialize(data.statistics);

      this.lastUpdateTime = data.lastUpdateTime;
      this.isRunning = data.isRunning;
   }

   public get visibleGenerators(): GeneratorStore[] {
      const unlockedGenerators = this.generators.filter((generator) => generator.unlocked);
      const nextLockedGenerator = this.generators.find((generator) => !generator.unlocked);

      if (nextLockedGenerator === undefined) {
         return unlockedGenerators;
      }

      return [...unlockedGenerators, nextLockedGenerator];
   }
}
