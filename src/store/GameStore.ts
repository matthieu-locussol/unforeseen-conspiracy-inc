import type { ClickData } from '../types/clicker';
import type { SerializedGameData } from '../types/game';
import type { GeneratorId, GeneratorProduction } from '../types/generators';
import type { Conditions, UpgradeId } from '../types/upgrades';

import Decimal from 'decimal.js';
import { makeAutoObservable } from 'mobx';

import { GENERATORS } from '../data/generators';
import { UPGRADES } from '../data/upgrades';
import { _assertTrue } from '../utils/_assertMgt';

import { ClickerStore } from './ClickerStore';
import { GeneratorStore } from './GeneratorStore';
import { ResourceStore } from './ResourceStore';
import { StatisticsStore } from './StatisticsStore';
import { UpgradeStore } from './UpgradeStore';

export class GameStore {
   // Main game resources
   public proofs: ResourceStore;
   public followers: ResourceStore;
   public paranoia: ResourceStore;

   // Game systems
   public generators: GeneratorStore[];
   public clicker: ClickerStore;
   public statistics: StatisticsStore;
   public upgrades: UpgradeStore[];

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
      this.clicker = new ClickerStore('default', this);
      this.statistics = new StatisticsStore();
      this.upgrades = [];

      // Load initial game data
      this.initializeGenerators();
      this.initializeUpgrades();

      this.lastUpdateTime = Date.now();
   }

   private initializeGenerators(): void {
      GENERATORS.forEach((generator) => {
         this.generators.push(new GeneratorStore(generator.id, this));
      });
   }

   private initializeUpgrades(): void {
      UPGRADES.forEach((upgrade) => {
         this.upgrades.push(new UpgradeStore(upgrade.id, this));
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

      // Use the effective production from each generator (which includes all bonuses)
      this.generators.forEach((generator) => {
         const production = generator.effectiveProduction;

         this.proofs.add(production.proofs);
         this.followers.add(production.followers);
         this.paranoia.add(production.paranoia);
      });

      this.proofs.tick();
      this.followers.tick();
      this.paranoia.tick();

      this.statistics.trackResourceGeneration(
         this.proofs.value.sub(previousProofs),
         this.followers.value.sub(previousFollowers),
         this.paranoia.value.sub(previousParanoia),
      );
   }

   /**
    * Get all multipliers that apply to a generator (global, category, and individual)
    */
   public getGeneratorMultipliers(generator: GeneratorStore): GeneratorProduction {
      let proofsMultiplier = new Decimal(1);
      let followersMultiplier = new Decimal(1);
      let paranoiaMultiplier = new Decimal(1);

      const unlockedUpgrades = this.upgrades.filter((upgrade) => upgrade.unlocked);

      for (const upgrade of unlockedUpgrades) {
         for (const boost of upgrade.boosts) {
            if (boost.type === 'production_multiplier') {
               // Check if this boost applies to the generator
               const appliesToGenerator =
                  // Global multipliers
                  boost.target.type === 'all_generators' ||
                  boost.target.type === 'global' ||
                  // Generator-specific multipliers
                  (boost.target.type === 'generator' && boost.target.id === generator.id) ||
                  // Category-specific multipliers
                  (boost.target.type === 'category' &&
                     generator.categories.includes(boost.target.id));

               if (appliesToGenerator) {
                  if (boost.resource === 'proofs') {
                     proofsMultiplier = proofsMultiplier.add(boost.value);
                  } else if (boost.resource === 'followers') {
                     followersMultiplier = followersMultiplier.add(boost.value);
                  } else if (boost.resource === 'paranoia') {
                     paranoiaMultiplier = paranoiaMultiplier.add(boost.value);
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
    * Get the total click critical chance from base + upgrades
    */
   public getClickCriticalChance(): Decimal {
      let totalCriticalChance = this.clicker.criticalChance;

      const unlockedUpgrades = this.upgrades.filter((upgrade) => upgrade.unlocked);

      for (const upgrade of unlockedUpgrades) {
         for (const boost of upgrade.boosts) {
            if (boost.type === 'click_critical_chance') {
               totalCriticalChance = totalCriticalChance.add(boost.value);
            }
         }
      }

      // Ensure critical chance never exceeds 100%
      return Decimal.min(totalCriticalChance, new Decimal('1.00'));
   }

   /**
    * Get the total click critical multiplier from base + upgrades
    */
   public getClickCriticalMultiplier(): Decimal {
      let totalCriticalMultiplier = this.clicker.criticalMultiplier;

      const unlockedUpgrades = this.upgrades.filter((upgrade) => upgrade.unlocked);

      for (const upgrade of unlockedUpgrades) {
         for (const boost of upgrade.boosts) {
            if (boost.type === 'click_critical_magnitude') {
               totalCriticalMultiplier = totalCriticalMultiplier.add(boost.value);
            }
         }
      }

      return totalCriticalMultiplier;
   }

   /**
    * Get flat bonuses that apply to a generator (exposed for GeneratorStore)
    */
   public getFlatBonusesForGenerator(generator: GeneratorStore): GeneratorProduction {
      let proofsBonus = new Decimal(0);
      let followersBonus = new Decimal(0);
      let paranoiaBonus = new Decimal(0);

      const unlockedUpgrades = this.upgrades.filter((upgrade) => upgrade.unlocked);

      for (const upgrade of unlockedUpgrades) {
         for (const boost of upgrade.boosts) {
            if (boost.type === 'production_flat') {
               // Check if this boost applies to the generator
               const appliesToGenerator =
                  // Global flat bonuses
                  boost.target.type === 'all_generators' ||
                  boost.target.type === 'global' ||
                  // Generator-specific flat bonuses
                  (boost.target.type === 'generator' && boost.target.id === generator.id) ||
                  // Category-specific flat bonuses
                  (boost.target.type === 'category' &&
                     generator.categories.includes(boost.target.id));

               if (appliesToGenerator) {
                  if (boost.resource === 'proofs') {
                     proofsBonus = proofsBonus.add(boost.value);
                  } else if (boost.resource === 'followers') {
                     followersBonus = followersBonus.add(boost.value);
                  } else if (boost.resource === 'paranoia') {
                     paranoiaBonus = paranoiaBonus.add(boost.value);
                  }
               }
            }
         }
      }

      return {
         proofs: proofsBonus,
         followers: followersBonus,
         paranoia: paranoiaBonus,
      };
   }

   public checkConditions(conditions: Conditions): boolean {
      const hasMissingGenerator = conditions.generators.some(
         (generatorId) => !this.generators.some((generator) => generator.id === generatorId),
      );

      if (hasMissingGenerator) {
         return false;
      }

      return (
         this.proofs.value.greaterThanOrEqualTo(conditions.proofs) &&
         this.followers.value.greaterThanOrEqualTo(conditions.followers) &&
         this.paranoia.value.greaterThanOrEqualTo(conditions.paranoia)
      );
   }

   public canBuyGenerator(id: GeneratorId, amount: Decimal): boolean {
      const generatorStore = this.generators.find((generator) => generator.id === id);

      if (generatorStore === undefined) {
         return false;
      }

      const cost = generatorStore.getCost(amount, this.getGeneratorCostReduction(id));

      return (
         this.proofs.value.greaterThanOrEqualTo(cost.proofs) &&
         this.followers.value.greaterThanOrEqualTo(cost.followers)
      );
   }

   public buyGenerator(id: GeneratorId, amount: Decimal): boolean {
      const generatorStore = this.generators.find((generator) => generator.id === id);

      if (generatorStore === undefined) {
         return false;
      }

      const cost = generatorStore.getCost(amount, this.getGeneratorCostReduction(id));

      const successProofs = this.proofs.remove(cost.proofs);
      const successFollowers = this.followers.remove(cost.followers);

      if (!successProofs || !successFollowers) {
         return false;
      }

      generatorStore.buy(Decimal(amount));

      return true;
   }

   public hasPurchasedUpgrade(upgradeId: UpgradeId): boolean {
      const upgradeStore = this.upgrades.find(({ id, unlocked }) => id === upgradeId && unlocked);

      return upgradeStore !== undefined;
   }

   /**
    * @description Check if the player can buy an upgrade.
    * @param upgradeId - The ID of the upgrade.
    * @returns true if the upgrade can be purchased, false otherwise.
    */
   public canBuyUpgrade(upgradeId: UpgradeId): boolean {
      const upgradeStore = this.upgrades.find(({ id }) => id === upgradeId);

      if (upgradeStore === undefined) {
         return false;
      }

      return upgradeStore.canBuy(this.proofs.value, this.followers.value);
   }

   /**
    * @description Buy an upgrade.
    * @param upgradeId - The ID of the upgrade.
    * @returns true if the upgrade was successfully purchased, false otherwise.
    */
   public buyUpgrade(upgradeId: UpgradeId): boolean {
      const upgradeStore = this.upgrades.find(({ id }) => id === upgradeId);

      if (upgradeStore === undefined) {
         return false;
      }

      if (!upgradeStore.canBuy(this.proofs.value, this.followers.value)) {
         return false;
      }

      const successProofs = this.proofs.remove(upgradeStore.cost.proofs);
      const successFollowers = this.followers.remove(upgradeStore.cost.followers);

      if (!successProofs || !successFollowers) {
         return false;
      }

      upgradeStore.buy();

      return true;
   }

   public getGeneratorCostReduction(generatorId: GeneratorId): Decimal {
      let reduction = new Decimal(0);

      const unlockedCostReductionUpgrades = this.upgrades
         .filter((upgrade) => upgrade.unlocked)
         .filter(({ boosts }) => boosts.some(({ type }) => type === 'cost_reduction'));

      for (const { boosts } of unlockedCostReductionUpgrades) {
         for (const boost of boosts) {
            if (boost.target.type === 'all_generators' || boost.target.type === 'global') {
               reduction = reduction.add(boost.value);
            } else if (boost.target.type === 'generator' && boost.target.id === generatorId) {
               reduction = reduction.add(boost.value);
            } else if (
               boost.target.type === 'category' &&
               this.generators.some((generator) => {
                  _assertTrue(
                     boost.target.type === 'category',
                     'boost.target.type should be category',
                  );

                  return generator.categories.includes(boost.target.id);
               })
            ) {
               reduction = reduction.add(boost.value);
            }
         }
      }

      return Decimal.min(reduction, 0.9);
   }

   public get totalProduction(): GeneratorProduction {
      return this.generators.reduce(
         (acc, generator) => {
            return {
               proofs: acc.proofs.add(generator.effectiveProduction.proofs),
               followers: acc.followers.add(generator.effectiveProduction.followers),
               paranoia: acc.paranoia.add(generator.effectiveProduction.paranoia),
            };
         },
         { proofs: new Decimal(0), followers: new Decimal(0), paranoia: new Decimal(0) },
      );
   }

   public clickProofs(): ClickData {
      const clickData = this.clicker.click();

      this.proofs.add(clickData.value);
      this.statistics.trackClicks(new Decimal(1));

      return clickData;
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
         upgrades: this.upgrades.map((upgrade) => upgrade.serialize()),
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
         const generator = new GeneratorStore(generatorData.id, this);

         generator.deserialize(generatorData);

         return generator;
      });

      // Deserialize upgrades if they exist in the save data
      if (data.upgrades) {
         this.upgrades.forEach((upgrade) => {
            const savedUpgrade = data.upgrades.find((saved) => saved.id === upgrade.id);

            if (savedUpgrade) {
               upgrade.deserialize(savedUpgrade);
            }
         });
      }

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

   public get visibleUpgrades(): UpgradeStore[] {
      const unlockedUpgrades = this.upgrades.filter((upgrade) => upgrade.unlocked);
      const nextAvailableUpgrades = this.upgrades.filter(
         (upgrade) => !upgrade.unlocked && this.checkConditions(upgrade.conditions),
      );

      return [...unlockedUpgrades, ...nextAvailableUpgrades];
   }
}
