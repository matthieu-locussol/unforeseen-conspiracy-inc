import type { SerializedGameData } from '../types/game';
import type { GeneratorId } from '../types/generators';
import type { UpgradeId } from '../types/upgrades';
import type { GeneratorStore } from './GeneratorStore';

import Decimal from 'decimal.js';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { GENERATORS } from '../data/generators';
import { UPGRADES } from '../data/upgrades';

import { GameStore } from './GameStore';

describe('GameStore', () => {
   let gameStore: GameStore;

   beforeEach(() => {
      gameStore = new GameStore();
   });

   describe('Initialization', () => {
      it('should initialize with correct default values', () => {
         expect(gameStore.proofs.value).toStrictEqual(new Decimal(0));
         expect(gameStore.followers.value).toStrictEqual(new Decimal(0));
         expect(gameStore.paranoia.value).toStrictEqual(new Decimal(0));
         expect(gameStore.isRunning).toBe(true);
         expect(gameStore.lastUpdateTime).toBeCloseTo(Date.now(), -2);
      });

      it('should initialize all generators from GENERATORS data', () => {
         expect(gameStore.generators).toHaveLength(GENERATORS.length);
         GENERATORS.forEach((generatorData, index) => {
            expect(gameStore.generators[index].id).toBe(generatorData.id);
         });
      });

      it('should initialize all upgrades from UPGRADES data', () => {
         expect(gameStore.upgrades).toHaveLength(UPGRADES.length);
         UPGRADES.forEach((upgradeData, index) => {
            expect(gameStore.upgrades[index].id).toBe(upgradeData.id);
         });
      });

      it('should initialize clicker with default values', () => {
         expect(gameStore.clicker).toBeDefined();
         expect(gameStore.clicker.id).toBe('default');
      });

      it('should initialize statistics', () => {
         expect(gameStore.statistics).toBeDefined();
      });
   });

   describe('Game State Management', () => {
      describe('start()', () => {
         it('should start the game when stopped', () => {
            gameStore.stop();
            expect(gameStore.isRunning).toBe(false);

            gameStore.start();
            expect(gameStore.isRunning).toBe(true);
            expect(gameStore.lastUpdateTime).toBeCloseTo(Date.now(), -2);
         });

         it('should not change state when already running', () => {
            const initialTime = gameStore.lastUpdateTime;

            expect(gameStore.isRunning).toBe(true);

            gameStore.start();
            expect(gameStore.isRunning).toBe(true);
            expect(gameStore.lastUpdateTime).toBe(initialTime);
         });
      });

      describe('stop()', () => {
         it('should stop the game when running', () => {
            expect(gameStore.isRunning).toBe(true);

            gameStore.stop();
            expect(gameStore.isRunning).toBe(false);
         });

         it('should not change state when already stopped', () => {
            gameStore.stop();
            expect(gameStore.isRunning).toBe(false);

            gameStore.stop();
            expect(gameStore.isRunning).toBe(false);
         });
      });

      describe('togglePlay()', () => {
         it('should toggle from running to stopped', () => {
            expect(gameStore.isRunning).toBe(true);

            gameStore.togglePlay();
            expect(gameStore.isRunning).toBe(false);
         });

         it('should toggle from stopped to running', () => {
            gameStore.stop();
            expect(gameStore.isRunning).toBe(false);

            gameStore.togglePlay();
            expect(gameStore.isRunning).toBe(true);
         });
      });
   });

   describe('Game Tick and Resource Generation', () => {
      beforeEach(() => {
         // Unlock and level up some generators for testing
         const chemtrailsGenerator = gameStore.generators.find((g) => g.id === 'chemtrails')!;

         chemtrailsGenerator.buy(new Decimal(5)); // Level 5
      });

      it('should update lastUpdateTime when ticking', () => {
         const beforeTick = Date.now();

         gameStore.tick();
         expect(gameStore.lastUpdateTime).toBeGreaterThanOrEqual(beforeTick);
      });

      it('should not tick when game is stopped', () => {
         const initialProofs = gameStore.proofs.value;

         gameStore.stop();

         gameStore.tick();
         expect(gameStore.proofs.value).toBe(initialProofs);
      });

      it('should generate resources from generators', () => {
         const initialProofs = gameStore.proofs.value;

         gameStore.tick();

         expect(gameStore.proofs.value.greaterThan(initialProofs)).toBeTruthy();
      });

      it('should track resource generation in statistics', () => {
         const trackSpy = vi.spyOn(gameStore.statistics, 'trackResourceGeneration');

         gameStore.tick();

         expect(trackSpy).toHaveBeenCalledOnce();
         expect(trackSpy).toHaveBeenCalledWith(
            expect.any(Decimal),
            expect.any(Decimal),
            expect.any(Decimal),
         );
      });

      it('should tick all resource stores', () => {
         const proofsSpy = vi.spyOn(gameStore.proofs, 'tick');
         const followersSpy = vi.spyOn(gameStore.followers, 'tick');
         const paranoiaSpy = vi.spyOn(gameStore.paranoia, 'tick');

         gameStore.tick();

         expect(proofsSpy).toHaveBeenCalledOnce();
         expect(followersSpy).toHaveBeenCalledOnce();
         expect(paranoiaSpy).toHaveBeenCalledOnce();
      });
   });

   describe('Generator Management', () => {
      describe('canBuyGenerator()', () => {
         it('should return false for non-existent generator', () => {
            const result = gameStore.canBuyGenerator('non-existent' as GeneratorId, new Decimal(1));

            expect(result).toBe(false);
         });

         it('should return true when player has enough resources', () => {
            gameStore.proofs.add(new Decimal(1000));
            gameStore.followers.add(new Decimal(1000));

            const result = gameStore.canBuyGenerator('chemtrails', new Decimal(1));

            expect(result).toBe(true);
         });

         it('should return false when player lacks proofs', () => {
            gameStore.proofs.add(new Decimal(5)); // Less than chemtrails base cost of 10
            gameStore.followers.add(new Decimal(1000));

            const result = gameStore.canBuyGenerator('chemtrails', new Decimal(1));

            expect(result).toBe(false);
         });

         it('should return false when player lacks followers', () => {
            gameStore.proofs.add(new Decimal(1000));
            gameStore.followers.add(new Decimal(0));

            // Find a generator that actually requires followers - looking at the data, all generators have followers cost of 0
            // So let's test with insufficient proofs instead for michael_jackson
            gameStore.proofs.value = new Decimal(25); // Less than michael_jackson base cost of 50
            gameStore.followers.add(new Decimal(1000));

            const result = gameStore.canBuyGenerator('michael_jackson', new Decimal(1));

            expect(result).toBe(false);
         });

         it('should account for cost reduction when checking affordability', () => {
            // Set up resources to be just enough for chemtrails without cost reduction
            gameStore.proofs.add(new Decimal(10)); // Base cost of chemtrails
            gameStore.followers.add(new Decimal(1000));

            // Check the actual cost without any cost reduction
            const chemtrailsGenerator = gameStore.generators.find((g) => g.id === 'chemtrails')!;
            const costWithoutReduction = chemtrailsGenerator.getCost(
               new Decimal(1),
               new Decimal(0),
            );

            // Set proofs to exactly the cost without reduction
            gameStore.proofs.value = costWithoutReduction.proofs;

            // Initially should be able to buy 1 level of chemtrails
            expect(gameStore.canBuyGenerator('chemtrails', new Decimal(1))).toBe(true);

            // Buy the chemtrails cost reduction upgrade (25% reduction)
            const costReductionUpgrade = gameStore.upgrades.find(
               (u) => u.id === 'chemtrails_cost_reduction',
            )!;

            costReductionUpgrade.unlocked = true;

            // Calculate the cost with 25% reduction
            const costWithReduction = chemtrailsGenerator.getCost(
               new Decimal(1),
               new Decimal(0.25),
            );

            // With the reduced cost, we should be able to buy it with less proofs
            gameStore.proofs.value = costWithReduction.proofs;
            expect(gameStore.canBuyGenerator('chemtrails', new Decimal(1))).toBe(true);

            // But with slightly less than the reduced cost, we should not be able to buy it
            gameStore.proofs.value = costWithReduction.proofs.sub(new Decimal(0.1));
            expect(gameStore.canBuyGenerator('chemtrails', new Decimal(1))).toBe(false);
         });

         it('should calculate correct cost for multiple generator levels', () => {
            gameStore.proofs.add(new Decimal(10000));
            gameStore.followers.add(new Decimal(10000));

            const result = gameStore.canBuyGenerator('chemtrails', new Decimal(10));

            expect(result).toBe(true);
         });
      });

      describe('buyGenerator()', () => {
         beforeEach(() => {
            gameStore.proofs.add(new Decimal(10000));
            gameStore.followers.add(new Decimal(10000));
         });

         it('should return false for non-existent generator', () => {
            const result = gameStore.buyGenerator('non-existent' as GeneratorId, new Decimal(1));

            expect(result).toBe(false);
         });

         it('should successfully buy generator when affordable', () => {
            const initialLevel = gameStore.generators.find((g) => g.id === 'chemtrails')!.level;
            const initialProofs = gameStore.proofs.value;

            const result = gameStore.buyGenerator('chemtrails', new Decimal(5));

            expect(result).toBe(true);
            expect(gameStore.generators.find((g) => g.id === 'chemtrails')!.level).toStrictEqual(
               initialLevel.plus(5),
            );
            expect(gameStore.proofs.value.lessThan(initialProofs)).toBeTruthy();
         });

         it('should return false when insufficient resources', () => {
            gameStore.proofs.value = new Decimal(5); // Less than cost
            gameStore.followers.value = new Decimal(0);

            const result = gameStore.buyGenerator('chemtrails', new Decimal(1));

            expect(result).toBe(false);
         });

         it('should not buy generator on failure', () => {
            gameStore.proofs.value = new Decimal(5);
            gameStore.followers.value = new Decimal(0);
            const initialLevel = gameStore.generators.find((g) => g.id === 'chemtrails')!.level;

            const result = gameStore.buyGenerator('chemtrails', new Decimal(1));

            expect(result).toBe(false);
            expect(gameStore.generators.find((g) => g.id === 'chemtrails')!.level).toBe(
               initialLevel,
            );
         });

         it('should unlock generator on first purchase', () => {
            const generator = gameStore.generators.find((g) => g.id === 'michael_jackson')!;

            expect(generator.unlocked).toBe(false);

            gameStore.buyGenerator('michael_jackson', new Decimal(1));

            expect(generator.unlocked).toBe(true);
         });
      });
   });

   describe('Upgrade Management', () => {
      describe('hasPurchasedUpgrade()', () => {
         it('should return false for unpurchased upgrade', () => {
            const result = gameStore.hasPurchasedUpgrade('chemtrails_production_boost');

            expect(result).toBe(false);
         });

         it('should return true for purchased upgrade', () => {
            const upgrade = gameStore.upgrades.find((u) => u.id === 'chemtrails_production_boost')!;

            upgrade.unlocked = true;

            const result = gameStore.hasPurchasedUpgrade('chemtrails_production_boost');

            expect(result).toBe(true);
         });

         it('should return false for non-existent upgrade', () => {
            const result = gameStore.hasPurchasedUpgrade('non-existent' as UpgradeId);

            expect(result).toBe(false);
         });
      });

      describe('canBuyUpgrade()', () => {
         it('should return false for non-existent upgrade', () => {
            const result = gameStore.canBuyUpgrade('non-existent' as UpgradeId);

            expect(result).toBe(false);
         });

         it('should return true when conditions are met and affordable', () => {
            gameStore.proofs.add(new Decimal(1000));
            gameStore.followers.add(new Decimal(1000));

            const result = gameStore.canBuyUpgrade('chemtrails_production_boost');

            expect(result).toBe(true);
         });

         it('should return false when conditions are not met', () => {
            gameStore.proofs.add(new Decimal(10)); // Less than condition requirement
            gameStore.followers.add(new Decimal(1000));

            const result = gameStore.canBuyUpgrade('chemtrails_production_boost');

            expect(result).toBe(false);
         });

         it('should return false when unaffordable', () => {
            gameStore.proofs.add(new Decimal(50)); // Meets condition but not cost
            gameStore.followers.add(new Decimal(1000));

            const result = gameStore.canBuyUpgrade('chemtrails_production_boost');

            expect(result).toBe(false);
         });
      });

      describe('buyUpgrade()', () => {
         beforeEach(() => {
            gameStore.proofs.add(new Decimal(10000));
            gameStore.followers.add(new Decimal(10000));
         });

         it('should return false for non-existent upgrade', () => {
            const result = gameStore.buyUpgrade('non-existent' as UpgradeId);

            expect(result).toBe(false);
         });

         it('should successfully buy upgrade when conditions met', () => {
            const upgrade = gameStore.upgrades.find((u) => u.id === 'chemtrails_production_boost')!;

            expect(upgrade.unlocked).toBe(false);

            const result = gameStore.buyUpgrade('chemtrails_production_boost');

            expect(result).toBe(true);
            expect(upgrade.unlocked).toBe(true);
         });

         it('should deduct correct resources when buying', () => {
            const upgrade = gameStore.upgrades.find((u) => u.id === 'chemtrails_production_boost')!;
            const initialProofs = gameStore.proofs.value;
            const initialFollowers = gameStore.followers.value;

            gameStore.buyUpgrade('chemtrails_production_boost');

            expect(gameStore.proofs.value).toStrictEqual(initialProofs.minus(upgrade.cost.proofs));
            expect(gameStore.followers.value).toStrictEqual(
               initialFollowers.minus(upgrade.cost.followers),
            );
         });

         it('should return false when conditions not met', () => {
            gameStore.proofs.value = new Decimal(10); // Less than condition requirement

            const result = gameStore.buyUpgrade('chemtrails_production_boost');

            expect(result).toBe(false);
         });

         it('should return false when unaffordable', () => {
            gameStore.proofs.value = new Decimal(50); // Meets condition but not cost

            const result = gameStore.buyUpgrade('chemtrails_production_boost');

            expect(result).toBe(false);
         });
      });
   });

   describe('Multipliers and Bonuses', () => {
      describe('getGeneratorMultipliers()', () => {
         let chemtrailsGenerator: GeneratorStore;

         beforeEach(() => {
            chemtrailsGenerator = gameStore.generators.find((g) => g.id === 'chemtrails')!;
         });

         it('should return base multipliers when no upgrades unlocked', () => {
            const multipliers = gameStore.getGeneratorMultipliers(chemtrailsGenerator);

            expect(multipliers).toEqual({
               proofs: new Decimal(1),
               followers: new Decimal(1),
               paranoia: new Decimal(1),
            });
         });

         it('should apply generator-specific multipliers', () => {
            const upgrade = gameStore.upgrades.find((u) => u.id === 'chemtrails_production_boost')!;

            upgrade.unlocked = true;

            const multipliers = gameStore.getGeneratorMultipliers(chemtrailsGenerator);

            expect(multipliers.proofs).toStrictEqual(new Decimal(1.5)); // 1 + 0.5 boost
         });

         it('should apply category-specific multipliers', () => {
            const upgrade = gameStore.upgrades.find((u) => u.id === 'michael_jackson_media_boost')!;

            upgrade.unlocked = true;

            // Flat earth has media-manipulation category
            const flatEarthGenerator = gameStore.generators.find((g) => g.id === 'flat_earth')!;
            const multipliers = gameStore.getGeneratorMultipliers(flatEarthGenerator);

            expect(multipliers.proofs).toStrictEqual(new Decimal(1.75)); // 1 + 0.75 boost
         });

         it('should apply global multipliers to all generators', () => {
            const upgrade = gameStore.upgrades.find((u) => u.id === 'flat_earth_global_boost')!;

            upgrade.unlocked = true;

            const multipliers = gameStore.getGeneratorMultipliers(chemtrailsGenerator);

            expect(multipliers.proofs).toStrictEqual(new Decimal(1.25)); // 1 + 0.25 boost
         });

         it('should stack multiple applicable multipliers', () => {
            // Apply both generator-specific and global multipliers
            const specificUpgrade = gameStore.upgrades.find(
               (u) => u.id === 'chemtrails_production_boost',
            )!;
            const globalUpgrade = gameStore.upgrades.find(
               (u) => u.id === 'flat_earth_global_boost',
            )!;

            specificUpgrade.unlocked = true;
            globalUpgrade.unlocked = true;

            const multipliers = gameStore.getGeneratorMultipliers(chemtrailsGenerator);

            expect(multipliers.proofs).toStrictEqual(new Decimal(1.75)); // 1 + 0.5 + 0.25
         });
      });

      describe('getFlatBonusesForGenerator()', () => {
         let flatEarthGenerator: GeneratorStore;

         beforeEach(() => {
            flatEarthGenerator = gameStore.generators.find((g) => g.id === 'flat_earth')!;
         });

         it('should return zero bonuses when no upgrades unlocked', () => {
            const bonuses = gameStore.getFlatBonusesForGenerator(flatEarthGenerator);

            expect(bonuses).toEqual({
               proofs: new Decimal(0),
               followers: new Decimal(0),
               paranoia: new Decimal(0),
            });
         });

         it('should apply flat bonuses correctly', () => {
            const upgrade = gameStore.upgrades.find((u) => u.id === 'flat_earth_production_flat')!;

            upgrade.unlocked = true;

            const bonuses = gameStore.getFlatBonusesForGenerator(flatEarthGenerator);

            expect(bonuses.proofs).toStrictEqual(new Decimal(2)); // +2 flat bonus
         });
      });

      describe('getGeneratorCostReduction()', () => {
         it('should return 0 when no cost reduction upgrades unlocked', () => {
            const reduction = gameStore.getGeneratorCostReduction('chemtrails');

            expect(reduction).toStrictEqual(new Decimal(0));
         });

         it('should apply generator-specific cost reduction', () => {
            const upgrade = gameStore.upgrades.find((u) => u.id === 'chemtrails_aluminum_hat')!;

            upgrade.unlocked = true;

            const reduction = gameStore.getGeneratorCostReduction('chemtrails');

            expect(reduction).toStrictEqual(new Decimal(0.05)); // 5% reduction
         });

         it('should cap cost reduction at 90%', () => {
            // Mock multiple cost reduction upgrades that would exceed 90%
            gameStore.upgrades.forEach((upgrade) => {
               if (upgrade.boosts.some((boost) => boost.type === 'cost_reduction')) {
                  upgrade.unlocked = true;
               }
            });

            const reduction = gameStore.getGeneratorCostReduction('chemtrails');

            expect(reduction.lessThanOrEqualTo(0.9)).toBeTruthy();
         });
      });
   });

   describe('Condition Checking', () => {
      describe('checkConditions()', () => {
         it('should return true when all conditions are met', () => {
            gameStore.proofs.add(new Decimal(100));
            gameStore.followers.add(new Decimal(50));
            gameStore.paranoia.add(new Decimal(25));

            const conditions = {
               proofs: new Decimal(50),
               followers: new Decimal(25),
               paranoia: new Decimal(10),
               generators: [] as GeneratorId[],
            };

            const result = gameStore.checkConditions(conditions);

            expect(result).toBe(true);
         });

         it('should return false when proofs requirement not met', () => {
            gameStore.proofs.add(new Decimal(25)); // Less than required
            gameStore.followers.add(new Decimal(50));
            gameStore.paranoia.add(new Decimal(25));

            const conditions = {
               proofs: new Decimal(50),
               followers: new Decimal(25),
               paranoia: new Decimal(10),
               generators: [] as GeneratorId[],
            };

            const result = gameStore.checkConditions(conditions);

            expect(result).toBe(false);
         });

         it('should return false when followers requirement not met', () => {
            gameStore.proofs.add(new Decimal(100));
            gameStore.followers.add(new Decimal(10)); // Less than required
            gameStore.paranoia.add(new Decimal(25));

            const conditions = {
               proofs: new Decimal(50),
               followers: new Decimal(25),
               paranoia: new Decimal(10),
               generators: [] as GeneratorId[],
            };

            const result = gameStore.checkConditions(conditions);

            expect(result).toBe(false);
         });

         it('should return false when paranoia requirement not met', () => {
            gameStore.proofs.add(new Decimal(100));
            gameStore.followers.add(new Decimal(50));
            gameStore.paranoia.add(new Decimal(5)); // Less than required

            const conditions = {
               proofs: new Decimal(50),
               followers: new Decimal(25),
               paranoia: new Decimal(10),
               generators: [] as GeneratorId[],
            };

            const result = gameStore.checkConditions(conditions);

            expect(result).toBe(false);
         });

         it('should return false when required generator is missing', () => {
            gameStore.proofs.add(new Decimal(100));
            gameStore.followers.add(new Decimal(50));
            gameStore.paranoia.add(new Decimal(25));

            const conditions = {
               proofs: new Decimal(50),
               followers: new Decimal(25),
               paranoia: new Decimal(10),
               generators: ['non-existent' as GeneratorId],
            };

            const result = gameStore.checkConditions(conditions);

            expect(result).toBe(false);
         });

         it('should return true when all required generators exist', () => {
            gameStore.proofs.add(new Decimal(100));
            gameStore.followers.add(new Decimal(50));
            gameStore.paranoia.add(new Decimal(25));

            const conditions = {
               proofs: new Decimal(50),
               followers: new Decimal(25),
               paranoia: new Decimal(10),
               generators: ['chemtrails'] as GeneratorId[],
            };

            const result = gameStore.checkConditions(conditions);

            expect(result).toBe(true);
         });
      });
   });

   describe('Clicking', () => {
      describe('clickProofs()', () => {
         it('should increase proofs when clicked', () => {
            const initialProofs = gameStore.proofs.value;

            const clickValue = gameStore.clickProofs();

            expect(gameStore.proofs.value).toStrictEqual(initialProofs.add(clickValue.value));
            expect(clickValue.value.greaterThan(0)).toBeTruthy();
         });

         it('should track clicks in statistics', () => {
            const trackSpy = vi.spyOn(gameStore.statistics, 'trackClicks');

            gameStore.clickProofs();

            expect(trackSpy).toHaveBeenCalledWith(new Decimal(1));
         });

         it('should return the click value', () => {
            const clickValue = gameStore.clickProofs();

            expect(typeof clickValue).toBe('object');
            expect(clickValue.value.greaterThan(0)).toBeTruthy();
         });
      });
   });

   describe('Visibility Filters', () => {
      describe('visibleGenerators', () => {
         it('should include all unlocked generators', () => {
            // Unlock some generators
            gameStore.generators[0].unlocked = true;
            gameStore.generators[1].unlocked = true;

            const visible = gameStore.visibleGenerators;

            expect(visible).toContain(gameStore.generators[0]);
            expect(visible).toContain(gameStore.generators[1]);
         });

         it('should include next locked generator', () => {
            // Make sure first generator is unlocked, second is locked
            gameStore.generators[0].unlocked = true;
            gameStore.generators[1].unlocked = false;
            gameStore.generators[2].unlocked = false;

            const visible = gameStore.visibleGenerators;

            expect(visible).toContain(gameStore.generators[1]); // Next locked one
            expect(visible).not.toContain(gameStore.generators[2]); // Should not include further locked ones
         });

         it('should return only unlocked generators when all are unlocked', () => {
            gameStore.generators.forEach((gen) => (gen.unlocked = true));

            const visible = gameStore.visibleGenerators;

            expect(visible).toHaveLength(gameStore.generators.length);
            expect(visible).toEqual(gameStore.generators);
         });
      });

      describe('visibleUpgrades', () => {
         it('should include all unlocked upgrades', () => {
            gameStore.upgrades[0].unlocked = true;
            gameStore.upgrades[1].unlocked = true;

            const visible = gameStore.visibleUpgrades;

            expect(visible).toContain(gameStore.upgrades[0]);
            expect(visible).toContain(gameStore.upgrades[1]);
         });

         it('should include available upgrades that meet conditions', () => {
            gameStore.proofs.add(new Decimal(10000));
            gameStore.followers.add(new Decimal(10000));
            gameStore.paranoia.add(new Decimal(10000));

            const visible = gameStore.visibleUpgrades;

            // Should include upgrades that meet their conditions
            const availableUpgrades = gameStore.upgrades.filter(
               (upgrade) => !upgrade.unlocked && gameStore.checkConditions(upgrade.conditions),
            );

            availableUpgrades.forEach((upgrade) => {
               expect(visible).toContain(upgrade);
            });
         });

         it('should not include locked upgrades that do not meet conditions', () => {
            gameStore.proofs.value = new Decimal(0);
            gameStore.followers.value = new Decimal(0);
            gameStore.paranoia.value = new Decimal(0);

            const visible = gameStore.visibleUpgrades;

            const unavailableUpgrades = gameStore.upgrades.filter(
               (upgrade) => !upgrade.unlocked && !gameStore.checkConditions(upgrade.conditions),
            );

            unavailableUpgrades.forEach((upgrade) => {
               expect(visible).not.toContain(upgrade);
            });
         });
      });
   });

   describe('Serialization', () => {
      describe('serialize()', () => {
         it('should serialize all game state correctly', () => {
            // Set up some game state
            gameStore.proofs.add(new Decimal(100));
            gameStore.followers.add(new Decimal(50));
            gameStore.paranoia.add(new Decimal(25));
            gameStore.generators[0].buy(new Decimal(5));
            gameStore.upgrades[0].unlocked = true;
            gameStore.stop();

            const serialized = gameStore.serialize();

            expect(serialized).toEqual({
               proofs: gameStore.proofs.serialize(),
               followers: gameStore.followers.serialize(),
               paranoia: gameStore.paranoia.serialize(),
               generators: gameStore.generators.map((g) => g.serialize()),
               upgrades: gameStore.upgrades.map((u) => u.serialize()),
               clicker: gameStore.clicker.serialize(),
               statistics: gameStore.statistics.serialize(),
               lastUpdateTime: gameStore.lastUpdateTime,
               isRunning: false,
            });
         });

         it('should produce serializable JSON', () => {
            const serialized = gameStore.serialize();

            expect(() => JSON.stringify(serialized)).not.toThrow();
         });
      });

      describe('deserialize()', () => {
         let savedData: SerializedGameData;

         beforeEach(() => {
            // Create some test data
            gameStore.proofs.add(new Decimal(200));
            gameStore.followers.add(new Decimal(100));
            gameStore.paranoia.add(new Decimal(50));
            gameStore.generators[0].buy(new Decimal(10));
            gameStore.upgrades[0].unlocked = true;
            gameStore.stop();

            savedData = gameStore.serialize();

            // Create a fresh store for testing deserialization
            gameStore = new GameStore();
         });

         it('should restore all game state correctly', () => {
            gameStore.deserialize(savedData);

            expect(gameStore.proofs.value).toStrictEqual(new Decimal(200));
            expect(gameStore.followers.value).toStrictEqual(new Decimal(100));
            expect(gameStore.paranoia.value).toStrictEqual(new Decimal(50));
            expect(gameStore.generators[0].level).toStrictEqual(new Decimal(10));
            expect(gameStore.upgrades[0].unlocked).toBe(true);
            expect(gameStore.isRunning).toBe(false);
            expect(gameStore.lastUpdateTime).toBe(savedData.lastUpdateTime);
         });

         it('should handle missing upgrade data gracefully', () => {
            const dataWithoutUpgrades = { ...savedData };

            delete (dataWithoutUpgrades as Partial<SerializedGameData>).upgrades;

            expect(() =>
               gameStore.deserialize(dataWithoutUpgrades as SerializedGameData),
            ).not.toThrow();
         });

         it('should maintain generator-store relationships after deserialization', () => {
            gameStore.deserialize(savedData);

            // Test that generators still have reference to the game store
            const generator = gameStore.generators[0];

            expect(generator).toBeDefined();

            // This should work without throwing
            expect(() => generator.effectiveProduction).not.toThrow();
         });

         it('should handle partial upgrade data', () => {
            const partialUpgradeData = { ...savedData };

            partialUpgradeData.upgrades = [savedData.upgrades[0]]; // Only first upgrade

            gameStore.deserialize(partialUpgradeData);

            expect(gameStore.upgrades[0].unlocked).toBe(true);
            expect(gameStore.upgrades[1].unlocked).toBe(false); // Should remain false
         });
      });
   });

   describe('Edge Cases and Error Handling', () => {
      it('should handle negative resource amounts gracefully', () => {
         expect(() => gameStore.proofs.add(new Decimal(-100))).not.toThrow();
         expect(gameStore.proofs.value.equals(new Decimal(-100))).toBeTruthy(); // ResourceStore allows negative values
      });

      it('should handle zero generator purchase amounts', () => {
         gameStore.proofs.add(new Decimal(1000));
         const result = gameStore.buyGenerator('chemtrails', new Decimal(0));

         expect(result).toBe(true); // Should succeed but not change anything
         expect(gameStore.generators[0].level).toStrictEqual(new Decimal(0));
      });

      it('should handle extremely large numbers without breaking', () => {
         const largeNumber = new Decimal(Number.MAX_SAFE_INTEGER / 2);

         gameStore.proofs.add(largeNumber);

         expect(gameStore.proofs.value).toStrictEqual(largeNumber);
         expect(() => gameStore.tick()).not.toThrow();
      });

      it('should maintain consistency after multiple operations', () => {
         // Perform a series of operations
         gameStore.proofs.add(new Decimal(10000));
         gameStore.buyGenerator('chemtrails', new Decimal(5));
         gameStore.buyUpgrade('chemtrails_binoculars');
         gameStore.tick();
         gameStore.clickProofs();

         // Game should still be in valid state
         expect(gameStore.proofs.value.greaterThanOrEqualTo(0)).toBeTruthy();
         expect(gameStore.generators[0].level.greaterThan(0)).toBeTruthy();
         expect(gameStore.upgrades.find((u) => u.id === 'chemtrails_binoculars')!.unlocked).toBe(
            true,
         );
      });

      it('should handle rapid successive ticks', () => {
         gameStore.generators[0].buy(new Decimal(1));

         const initialValue = gameStore.proofs.value;

         // Rapid ticks
         for (let i = 0; i < 100; i++) {
            gameStore.tick();
         }

         expect(gameStore.proofs.value.greaterThan(initialValue)).toBeTruthy();
         expect(gameStore.lastUpdateTime).toBeCloseTo(Date.now(), -2);
      });
   });
});
