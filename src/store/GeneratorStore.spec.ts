import type { GeneratorId, SerializedGeneratorData } from '../types/generators';
import type { CategoryId, UpgradeId } from '../types/upgrades';
import type { GameStore } from './GameStore';

import Decimal from 'decimal.js';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { GENERATORS } from '../data/generators';

import { GeneratorStore } from './GeneratorStore';
import { ResourceStore } from './ResourceStore';
import { UpgradeStore } from './UpgradeStore';

// Mock GameStore to isolate GeneratorStore testing
const createMockGameStore = (): Partial<GameStore> => ({
   proofs: new ResourceStore('proofs'),
   followers: new ResourceStore('followers'),
   paranoia: new ResourceStore('paranoia'),
   getGeneratorCostReduction: vi.fn().mockReturnValue(new Decimal(0)),
   getGeneratorMultipliers: vi.fn().mockReturnValue({
      proofs: 1,
      followers: 1,
      paranoia: 1,
   }),
   getFlatBonusesForGenerator: vi.fn().mockReturnValue({
      proofs: 0,
      followers: 0,
      paranoia: 0,
   }),
   upgrades: [],
});

describe('GeneratorStore', () => {
   let mockGameStore: Partial<GameStore>;
   let generatorStore: GeneratorStore;

   beforeEach(() => {
      mockGameStore = createMockGameStore();
   });

   describe('Initialization', () => {
      it('should initialize with correct data from GENERATORS config for chemtrails', () => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);

         expect(generatorStore.id).toBe('chemtrails');
         expect(generatorStore.categories).toStrictEqual(['government', 'technology']);
         expect(generatorStore.baseCost).toStrictEqual({
            proofs: new Decimal(15),
            followers: new Decimal(0),
         });
         expect(generatorStore.costMultiplier).toStrictEqual({
            proofs: new Decimal(1.15),
            followers: new Decimal(0),
         });
         expect(generatorStore.baseProduction).toStrictEqual({
            proofs: new Decimal(0.1),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         });
         expect(generatorStore.productionMultiplier).toStrictEqual({
            proofs: new Decimal(0.1),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         });
         expect(generatorStore.conditions).toStrictEqual({
            proofs: new Decimal(0),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
            generators: [],
         });
         expect(generatorStore.unlocked).toBe(true);
         expect(generatorStore.level).toStrictEqual(new Decimal(0));
         expect(generatorStore.upgradesIds).toStrictEqual([
            'chemtrails_binoculars',
            'chemtrails_weather_app',
            'chemtrails_aluminum_hat',
            'chemtrails_air_quality_monitor',
            'chemtrails_government_contacts',
            'chemtrails_whistleblower_network',
            'chemtrails_chemical_analysis_kit',
            'chemtrails_satellite_tracking',
            'chemtrails_underground_bunker',
            'chemtrails_mind_control_resistance',
            'chemtrails_global_chemtrail_map',
            'chemtrails_anti_chemtrail_device',
         ]);
      });

      it('should initialize with correct data from GENERATORS config for michael_jackson', () => {
         generatorStore = new GeneratorStore('michael_jackson', mockGameStore as GameStore);

         expect(generatorStore.id).toBe('michael_jackson');
         expect(generatorStore.categories).toStrictEqual(['media-manipulation', 'government']);
         expect(generatorStore.baseCost).toStrictEqual({
            proofs: new Decimal(1000),
            followers: new Decimal(0),
         });
         expect(generatorStore.costMultiplier).toStrictEqual({
            proofs: new Decimal(1.14),
            followers: new Decimal(0),
         });
         expect(generatorStore.unlocked).toBe(false);
         expect(generatorStore.level).toStrictEqual(new Decimal(0));
      });

      it('should initialize with correct data from GENERATORS config for flat_earth', () => {
         generatorStore = new GeneratorStore('flat_earth', mockGameStore as GameStore);

         expect(generatorStore.id).toBe('flat_earth');
         expect(generatorStore.categories).toStrictEqual([
            'organization',
            'media-manipulation',
            'government',
         ]);
         expect(generatorStore.baseCost).toStrictEqual({
            proofs: new Decimal(2500),
            followers: new Decimal(0),
         });
         expect(generatorStore.costMultiplier).toStrictEqual({
            proofs: new Decimal(1.13),
            followers: new Decimal(0),
         });
         expect(generatorStore.unlocked).toBe(false);
         expect(generatorStore.level).toStrictEqual(new Decimal(0));
      });

      it('should throw error for non-existent generator id', () => {
         expect(() => {
            new GeneratorStore('non-existent' as GeneratorId, mockGameStore as GameStore);
         }).toThrow("No generator found with id: 'non-existent'");
      });

      it('should make deep copies of data arrays and objects', () => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         const originalData = GENERATORS.find((g) => g.id === 'chemtrails')!;

         // Mutate the arrays/objects instead of reassigning
         generatorStore.categories.push('test-category' as CategoryId);
         generatorStore.baseCost.proofs = new Decimal(999);
         generatorStore.upgradesIds.push('new-upgrade-id' as UpgradeId);

         expect(originalData.categories).not.toContain('test-category');
         expect(originalData.baseCost.proofs).toStrictEqual(new Decimal(15));
         expect(originalData.upgradesIds).not.toContain('new-upgrade-id');
      });
   });

   describe('Upgrades Property', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
      });

      it('should return empty array when no upgrades are available in game store', () => {
         const upgrades = generatorStore.upgrades;

         expect(upgrades).toStrictEqual([]);
      });

      it('should return only matching upgrades from game store', () => {
         // Set up the mock upgrades array before constructing the generatorStore
         const upgradesIds = GENERATORS.find((g) => g.id === 'chemtrails')!.upgradesIds;

         // Set up mock resource stores with highestValue properties to make upgrades visible
         mockGameStore.proofs = {
            ...mockGameStore.proofs,
            highestValue: new Decimal(Number.MAX_SAFE_INTEGER),
         } as ResourceStore;
         mockGameStore.followers = {
            ...mockGameStore.followers,
            highestValue: new Decimal(Number.MAX_SAFE_INTEGER),
         } as ResourceStore;

         mockGameStore.upgrades = upgradesIds.map(
            (id) => new UpgradeStore(id, mockGameStore as GameStore),
         );
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);

         const upgrades = generatorStore.upgrades;
         const upgradeIds = upgrades.map((u) => u.id);

         for (const id of upgradesIds) {
            expect(upgradeIds).toContain(id);
         }
      });
   });

   describe('buy()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('michael_jackson', mockGameStore as GameStore);
      });

      it('should increase level by specified amount', () => {
         expect(generatorStore.level).toStrictEqual(new Decimal(0));

         generatorStore.buy(new Decimal(5));

         expect(generatorStore.level).toStrictEqual(new Decimal(5));
      });

      it('should set unlocked to true', () => {
         expect(generatorStore.unlocked).toBe(false);

         generatorStore.buy(new Decimal(1));

         expect(generatorStore.unlocked).toBe(true);
      });

      it('should handle buying multiple times', () => {
         generatorStore.buy(new Decimal(3));
         generatorStore.buy(new Decimal(2));

         expect(generatorStore.level).toStrictEqual(new Decimal(5));
         expect(generatorStore.unlocked).toBe(true);
      });

      it('should handle buying zero amount', () => {
         generatorStore.buy(new Decimal(0));

         expect(generatorStore.level).toStrictEqual(new Decimal(0));
         expect(generatorStore.unlocked).toBe(true);
      });

      it('should handle negative amounts', () => {
         generatorStore.level = new Decimal(5);

         generatorStore.buy(new Decimal(-2));

         expect(generatorStore.level).toStrictEqual(new Decimal(3));
      });
   });

   describe('getCost()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
      });

      it('should calculate correct cost for single level purchase', () => {
         const cost = generatorStore.getCost(new Decimal(1), new Decimal(0));

         expect(cost.proofs).toStrictEqual(new Decimal(17.2));
         expect(cost.followers).toStrictEqual(new Decimal(0).toDecimalPlaces(1));
      });

      it('should calculate correct cost for multiple levels', () => {
         const cost = generatorStore.getCost(new Decimal(3), new Decimal(0));

         const expectedProofsCost = new Decimal(59.9);

         expect(cost.proofs).toStrictEqual(new Decimal(expectedProofsCost).toDecimalPlaces(1));
         expect(cost.followers).toStrictEqual(new Decimal(0).toDecimalPlaces(1));
      });

      it('should account for current level in cost calculation', () => {
         generatorStore.level = new Decimal(5);

         const cost = generatorStore.getCost(new Decimal(2), new Decimal(0));

         const expectedProofsCost = new Decimal(74.5);

         expect(cost.proofs).toStrictEqual(new Decimal(expectedProofsCost).toDecimalPlaces(1));
      });

      it('should apply cost reduction correctly', () => {
         const costReduction = 0.25; // 25% reduction
         const cost = generatorStore.getCost(new Decimal(1), new Decimal(costReduction));
         const expectedCost = new Decimal(12.9);

         expect(cost.proofs).toStrictEqual(new Decimal(expectedCost).toDecimalPlaces(1));
      });

      it('should handle zero amount purchase', () => {
         const cost = generatorStore.getCost(new Decimal(0), new Decimal(0));

         expect(cost.proofs).toStrictEqual(new Decimal(0).toDecimalPlaces(1));
         expect(cost.followers).toStrictEqual(new Decimal(0).toDecimalPlaces(1));
      });

      it('should handle cost reduction greater than 1 (100%)', () => {
         const cost = generatorStore.getCost(new Decimal(1), new Decimal(1.5)); // 150% reduction

         expect(cost.proofs).toStrictEqual(new Decimal(-8.6));
      });

      it('should calculate cost for generator with follower costs', () => {
         // Create a custom generator with follower costs for testing
         const customGameStore = createMockGameStore();
         const customGenerator = new GeneratorStore('chemtrails', customGameStore as GameStore);

         // Override the base cost to include followers
         customGenerator.baseCost = { proofs: new Decimal(10), followers: new Decimal(5) };
         customGenerator.costMultiplier = {
            proofs: new Decimal(1.15),
            followers: new Decimal(1.1),
         };

         const cost = customGenerator.getCost(new Decimal(2), new Decimal(0));

         let expectedProofsCost = 0;
         let expectedFollowersCost = 0;

         for (let i = 1; i <= 2; i++) {
            expectedProofsCost += 10 * Math.pow(1.15, i);
            expectedFollowersCost += 5 * Math.pow(1.1, i);
         }

         expect(cost.proofs).toStrictEqual(new Decimal(expectedProofsCost).toDecimalPlaces(1));
         expect(cost.followers).toStrictEqual(
            new Decimal(expectedFollowersCost).toDecimalPlaces(1),
         );
      });
   });

   describe('getBaseProduction()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('flat_earth', mockGameStore as GameStore);
      });

      it('should return zero production when unlocked is false', () => {
         expect(generatorStore.unlocked).toBe(false);

         const production = generatorStore.getBaseProduction(new Decimal(5));

         expect(production).toStrictEqual({
            proofs: new Decimal(0),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         });
      });

      it('should return zero production when level is 0', () => {
         generatorStore.unlocked = true;

         const production = generatorStore.getBaseProduction(new Decimal(0));

         expect(production).toStrictEqual({
            proofs: new Decimal(0),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         });
      });

      it('should calculate base production for level 1', () => {
         generatorStore.unlocked = true;

         const production = generatorStore.getBaseProduction(new Decimal(1));

         expect(production.proofs).toStrictEqual(new Decimal(3.5));
         expect(production.followers).toStrictEqual(new Decimal(0));
         expect(production.paranoia).toStrictEqual(new Decimal(0));
      });

      it('should calculate base production for higher levels', () => {
         generatorStore.unlocked = true;

         const production = generatorStore.getBaseProduction(new Decimal(5));

         expect(production.proofs).toStrictEqual(new Decimal(21.7));
         expect(production.followers).toStrictEqual(new Decimal(0));
         expect(production.paranoia).toStrictEqual(new Decimal(0));
      });

      it('should round production values to 1 decimal place', () => {
         generatorStore.unlocked = true;

         // Set up production that will create decimal values
         generatorStore.baseProduction = {
            proofs: new Decimal(0.333),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         };
         generatorStore.productionMultiplier = {
            proofs: new Decimal(0.111),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         };

         const production = generatorStore.getBaseProduction(new Decimal(3));

         expect(production.proofs).toStrictEqual(new Decimal(1.2));
      });

      it('should handle production with all resource types', () => {
         generatorStore.unlocked = true;
         generatorStore.baseProduction = {
            proofs: new Decimal(1.1),
            followers: new Decimal(2.2),
            paranoia: new Decimal(3.3),
         };
         generatorStore.productionMultiplier = {
            proofs: new Decimal(0.1),
            followers: new Decimal(0.2),
            paranoia: new Decimal(0.3),
         };

         const production = generatorStore.getBaseProduction(new Decimal(4));

         expect(production.proofs).toStrictEqual(new Decimal(5.7));
         expect(production.followers).toStrictEqual(new Decimal(14));
         expect(production.paranoia).toStrictEqual(new Decimal(25));
      });
   });

   describe('getEffectiveProduction()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         generatorStore.unlocked = true;
      });

      it('should return base production when no bonuses or multipliers', () => {
         const baseProduction = generatorStore.getBaseProduction(new Decimal(5));
         const effectiveProduction = generatorStore.getEffectiveProduction(new Decimal(5));

         expect(effectiveProduction).toStrictEqual(baseProduction);
      });

      it('should apply multipliers from game store', () => {
         const mockMultipliers = {
            proofs: new Decimal(2),
            followers: new Decimal(1.5),
            paranoia: new Decimal(3),
         };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getGeneratorMultipliers as any).mockReturnValue(mockMultipliers);

         const effectiveProduction = generatorStore.getEffectiveProduction(new Decimal(1));

         expect(mockGameStore.getGeneratorMultipliers).toHaveBeenCalledWith(generatorStore);

         // Base production for level 1: proofs = 0.1
         // With multiplier: 0.1 * 2 = 0.2
         expect(effectiveProduction.proofs).toStrictEqual(new Decimal(0.2));
      });

      it('should apply flat bonuses from game store', () => {
         const mockFlatBonuses = { proofs: 5, followers: 2, paranoia: 1 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getFlatBonusesForGenerator as any).mockReturnValue(mockFlatBonuses);

         const effectiveProduction = generatorStore.getEffectiveProduction(new Decimal(1));

         expect(mockGameStore.getFlatBonusesForGenerator).toHaveBeenCalledWith(generatorStore);

         // Base production: 0.1, flat bonus: 5, no multiplier: (0.1 + 5) * 1 = 5.1
         expect(effectiveProduction.proofs).toStrictEqual(new Decimal(5.1));
      });

      it('should apply both flat bonuses and multipliers correctly', () => {
         const mockFlatBonuses = { proofs: 2, followers: 0, paranoia: 0 };
         const mockMultipliers = { proofs: 3, followers: 1, paranoia: 1 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getFlatBonusesForGenerator as any).mockReturnValue(mockFlatBonuses);
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getGeneratorMultipliers as any).mockReturnValue(mockMultipliers);

         const effectiveProduction = generatorStore.getEffectiveProduction(new Decimal(1));

         // (baseProduction + flatBonus) * multiplier = (0.1 + 2) * 3 = 6.3
         expect(effectiveProduction.proofs).toStrictEqual(new Decimal(6.3));
      });

      it('should use current level when no level specified', () => {
         generatorStore.level = new Decimal(3);

         const effectiveProduction = generatorStore.getEffectiveProduction();
         const explicitProduction = generatorStore.getEffectiveProduction(new Decimal(3));

         expect(effectiveProduction).toStrictEqual(explicitProduction);
      });

      it('should return zero when generator is not unlocked', () => {
         generatorStore.unlocked = false;

         const effectiveProduction = generatorStore.getEffectiveProduction(new Decimal(5));

         expect(effectiveProduction).toStrictEqual({
            proofs: new Decimal(0),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         });
      });

      it('should return zero when level is 0', () => {
         const effectiveProduction = generatorStore.getEffectiveProduction(new Decimal(0));

         expect(effectiveProduction).toStrictEqual({
            proofs: new Decimal(0),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         });
      });

      it('should round final production values to 1 decimal place', () => {
         const mockFlatBonuses = { proofs: 0.333, followers: 0, paranoia: 0 };
         const mockMultipliers = { proofs: 1.111, followers: 1, paranoia: 1 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getFlatBonusesForGenerator as any).mockReturnValue(mockFlatBonuses);
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getGeneratorMultipliers as any).mockReturnValue(mockMultipliers);

         const effectiveProduction = generatorStore.getEffectiveProduction(new Decimal(1));

         // (0.1 + 0.333) * 1.111 = 0.433 * 1.111 = 0.481063
         expect(effectiveProduction.proofs).toStrictEqual(new Decimal(0.4)); // Rounded to 1 decimal
      });
   });

   describe('getProductionIncrease()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         generatorStore.unlocked = true;
         generatorStore.level = new Decimal(5);
      });

      it('should calculate production increase for single level', () => {
         const increase = generatorStore.getProductionIncrease(new Decimal(1));

         const currentProduction = generatorStore.getEffectiveProduction(new Decimal(5));
         const newProduction = generatorStore.getEffectiveProduction(new Decimal(6));

         expect(increase.proofs).toStrictEqual(
            newProduction.proofs.minus(currentProduction.proofs).toDecimalPlaces(1),
         );
         expect(increase.followers).toStrictEqual(
            newProduction.followers.minus(currentProduction.followers).toDecimalPlaces(1),
         );
         expect(increase.paranoia).toStrictEqual(
            newProduction.paranoia.minus(currentProduction.paranoia).toDecimalPlaces(1),
         );
      });

      it('should calculate production increase for multiple levels', () => {
         const increase = generatorStore.getProductionIncrease(new Decimal(3));

         const currentProduction = generatorStore.getEffectiveProduction(new Decimal(5));
         const newProduction = generatorStore.getEffectiveProduction(new Decimal(8));

         expect(increase.proofs).toStrictEqual(
            newProduction.proofs.minus(currentProduction.proofs).toDecimalPlaces(1),
         );
      });

      it('should handle zero level increase', () => {
         const increase = generatorStore.getProductionIncrease(new Decimal(0));

         expect(increase).toStrictEqual({
            proofs: new Decimal(0),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         });
      });

      it('should handle negative level increase', () => {
         const increase = generatorStore.getProductionIncrease(new Decimal(-2));

         const currentProduction = generatorStore.getEffectiveProduction(new Decimal(5));
         const newProduction = generatorStore.getEffectiveProduction(new Decimal(3));

         expect(increase.proofs).toStrictEqual(
            newProduction.proofs.minus(currentProduction.proofs).toDecimalPlaces(1),
         );
         expect(increase.proofs.lessThan(0)).toBeTruthy();
      });

      it('should account for bonuses and multipliers in increase calculation', () => {
         const mockMultipliers = { proofs: 2, followers: 1, paranoia: 1 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getGeneratorMultipliers as any).mockReturnValue(mockMultipliers);

         const increase = generatorStore.getProductionIncrease(new Decimal(1));

         // Should include the effect of multipliers in the calculation
         expect(increase.proofs.greaterThan(0.1)).toBeTruthy(); // Base production multiplier would be 0.1, but with 2x multiplier should be higher
      });
   });

   describe('effectiveProduction getter', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         generatorStore.unlocked = true;
         generatorStore.level = new Decimal(3);
      });

      it('should return effective production at current level', () => {
         const effectiveProduction = generatorStore.effectiveProduction;
         const manualCalculation = generatorStore.getEffectiveProduction(new Decimal(3));

         expect(effectiveProduction).toStrictEqual(manualCalculation);
      });

      it('should update when level changes', () => {
         const initialProduction = generatorStore.effectiveProduction;

         generatorStore.level = new Decimal(5);
         const newProduction = generatorStore.effectiveProduction;

         expect(newProduction.proofs.greaterThan(initialProduction.proofs)).toBeTruthy();
      });
   });

   describe('baseProductionAtCurrentLevel getter', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         generatorStore.unlocked = true;
         generatorStore.level = new Decimal(4);
      });

      it('should return base production at current level', () => {
         const baseProduction = generatorStore.baseProductionAtCurrentLevel;
         const manualCalculation = generatorStore.getBaseProduction(new Decimal(4));

         expect(baseProduction).toStrictEqual(manualCalculation);
      });

      it('should not include bonuses or multipliers', () => {
         const mockMultipliers = { proofs: 10, followers: 10, paranoia: 10 };
         const mockFlatBonuses = { proofs: 100, followers: 100, paranoia: 100 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getGeneratorMultipliers as any).mockReturnValue(mockMultipliers);
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getFlatBonusesForGenerator as any).mockReturnValue(mockFlatBonuses);

         const baseProduction = generatorStore.baseProductionAtCurrentLevel;

         // Should be unaffected by bonuses and multipliers
         expect(baseProduction.proofs).toStrictEqual(new Decimal(1));
      });
   });

   describe('reset()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
      });

      it('should reset generator to initial state', () => {
         // Modify generator state
         generatorStore.level = new Decimal(10);
         generatorStore.unlocked = false; // Chemtrails starts unlocked
         generatorStore.baseCost.proofs = new Decimal(999);

         generatorStore.reset();

         expect(generatorStore.level).toStrictEqual(new Decimal(0));
         expect(generatorStore.unlocked).toBe(true); // Back to original state
         expect(generatorStore.baseCost.proofs).toStrictEqual(new Decimal(15)); // Back to original
      });

      it('should maintain generator id after reset', () => {
         generatorStore.reset();

         expect(generatorStore.id).toBe('chemtrails');
      });

      it('should reload all data from GENERATORS config', () => {
         // Modify all properties
         generatorStore.categories = ['government', 'technology'];
         generatorStore.baseCost = { proofs: new Decimal(999), followers: new Decimal(999) };
         generatorStore.upgradesIds = [];

         generatorStore.reset();

         // Should match original GENERATORS data
         const originalData = GENERATORS.find((g) => g.id === 'chemtrails')!;

         expect(generatorStore.categories).toStrictEqual(originalData.categories);
         expect(generatorStore.baseCost).toStrictEqual(originalData.baseCost);
         expect(generatorStore.upgradesIds).toStrictEqual(originalData.upgradesIds);
      });
   });

   describe('serialize()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
      });

      it('should serialize essential generator state', () => {
         generatorStore.level = new Decimal(15);
         generatorStore.unlocked = true;

         const serialized = generatorStore.serialize();

         expect(serialized).toStrictEqual({
            id: 'chemtrails',
            level: '15',
            unlocked: true,
            levelScaling: '2.5',
         });
      });

      it('should exclude static data from serialization', () => {
         const serialized = generatorStore.serialize();

         expect(serialized).not.toHaveProperty('baseCost');
         expect(serialized).not.toHaveProperty('categories');
         expect(serialized).not.toHaveProperty('upgradesIds');
      });

      it('should produce JSON-serializable output', () => {
         generatorStore.level = new Decimal(5);
         const serialized = generatorStore.serialize();

         expect(() => JSON.stringify(serialized)).not.toThrow();

         const jsonString = JSON.stringify(serialized);
         const parsed = JSON.parse(jsonString);

         expect(parsed).toStrictEqual(serialized);
      });
   });

   describe('deserialize()', () => {
      let serializedData: SerializedGeneratorData;

      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         serializedData = {
            id: 'chemtrails',
            level: '8',
            unlocked: false,
            levelScaling: '2.5',
         };
      });

      it('should restore level from serialized data', () => {
         generatorStore.deserialize(serializedData);

         expect(generatorStore.level).toStrictEqual(new Decimal(8));
      });

      it('should restore unlocked state from serialized data', () => {
         generatorStore.deserialize(serializedData);

         expect(generatorStore.unlocked).toBe(false);
      });

      it('should not modify static configuration data', () => {
         const originalBaseCost = { ...generatorStore.baseCost };
         const originalCategories = [...generatorStore.categories];

         generatorStore.deserialize(serializedData);

         expect(generatorStore.baseCost).toStrictEqual(originalBaseCost);
         expect(generatorStore.categories).toStrictEqual(originalCategories);
         expect(generatorStore.id).toBe('chemtrails'); // Should remain unchanged
      });

      it('should handle missing properties gracefully', () => {
         const partialData = {
            id: 'chemtrails',
            level: undefined,
            unlocked: undefined,
            levelScaling: undefined,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
         } as any;

         expect(() => generatorStore.deserialize(partialData)).toThrow();
      });

      it('should maintain data integrity after deserialization', () => {
         generatorStore.deserialize(serializedData);

         // Generator should still function correctly
         expect(() => generatorStore.effectiveProduction).not.toThrow();
         expect(() => generatorStore.getCost(new Decimal(1), new Decimal(0))).not.toThrow();
         expect(() => generatorStore.buy(new Decimal(1))).not.toThrow();
      });
   });

   describe('Edge Cases and Error Handling', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
      });

      it('should handle extremely large level values', () => {
         const largeLevel = new Decimal(999999);

         expect(() => generatorStore.buy(largeLevel)).not.toThrow();
         expect(generatorStore.level).toStrictEqual(largeLevel);

         expect(() => generatorStore.getBaseProduction(largeLevel)).not.toThrow();
         expect(() => generatorStore.getEffectiveProduction(largeLevel)).not.toThrow();
      });

      it('should not handle negative level values in production calculations', () => {
         generatorStore.unlocked = true;

         expect(() => generatorStore.getBaseProduction(new Decimal(-5))).not.toThrow();
         expect(() => generatorStore.getEffectiveProduction(new Decimal(-5))).not.toThrow();

         const production = generatorStore.getBaseProduction(new Decimal(-5));

         // Negative levels can result in negative production due to the formula: base + (level-1) * multiplier
         expect(production.proofs.lessThanOrEqualTo(0)).toBeTruthy();
      });

      it('should handle extreme cost reduction values', () => {
         expect(() => generatorStore.getCost(new Decimal(1), new Decimal(-10))).not.toThrow(); // Negative reduction (increase)
         expect(() => generatorStore.getCost(new Decimal(1), new Decimal(10))).not.toThrow(); // Greater than 100% reduction

         const negativeCostReduction = generatorStore.getCost(new Decimal(1), new Decimal(-1)); // 100% increase
         const extremeCostReduction = generatorStore.getCost(new Decimal(1), new Decimal(2)); // 200% reduction

         expect(
            negativeCostReduction.proofs.greaterThan(
               generatorStore.getCost(new Decimal(1), new Decimal(0)).proofs,
            ),
         ).toBeTruthy();
         expect(extremeCostReduction.proofs.lessThan(0)).toBeTruthy(); // Can result in negative cost
      });

      it('should handle zero and negative amount purchases', () => {
         const initialLevel = generatorStore.level;

         generatorStore.buy(new Decimal(0));
         expect(generatorStore.level).toStrictEqual(initialLevel);

         generatorStore.buy(new Decimal(-5));
         expect(generatorStore.level).toStrictEqual(initialLevel.minus(5));
      });

      it('should handle missing game store methods gracefully', () => {
         const brokenGameStore = {} as Partial<GameStore>;

         (brokenGameStore as Partial<GameStore>).getGeneratorMultipliers = undefined;
         (brokenGameStore as Partial<GameStore>).getFlatBonusesForGenerator = undefined;
         const generator = new GeneratorStore('chemtrails', brokenGameStore as GameStore);

         generator.unlocked = true;
         generator.level = new Decimal(1);

         // Should throw when game store methods are missing (this is expected behavior)
         expect(() => generator.effectiveProduction).toThrow();
      });

      it('should handle very small production values', () => {
         generatorStore.baseProduction = {
            proofs: new Decimal(0.001),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         };
         generatorStore.unlocked = true;

         const production = generatorStore.getBaseProduction(new Decimal(1));

         expect(production.proofs).toStrictEqual(new Decimal(0)); // Should round to 1 decimal place
      });

      it('should maintain consistency between related methods', () => {
         generatorStore.unlocked = true;
         generatorStore.level = new Decimal(5);

         const baseProduction = generatorStore.baseProductionAtCurrentLevel;
         const effectiveProduction = generatorStore.effectiveProduction;
         const manualEffectiveProduction = generatorStore.getEffectiveProduction(new Decimal(5));
         const productionIncrease = generatorStore.getProductionIncrease(new Decimal(0));

         expect(effectiveProduction).toStrictEqual(manualEffectiveProduction);
         expect(productionIncrease).toStrictEqual({
            proofs: new Decimal(0),
            followers: new Decimal(0),
            paranoia: new Decimal(0),
         });

         // Base production should be less than or equal to effective production (unless negative bonuses)
         expect(baseProduction.proofs.lessThanOrEqualTo(effectiveProduction.proofs)).toBeTruthy();
      });
   });

   describe('Integration with GameStore', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         generatorStore.unlocked = true;
         generatorStore.level = new Decimal(3);
      });

      it('should call game store methods with correct parameters', () => {
         // Access the value to trigger the getter
         void generatorStore.effectiveProduction;

         expect(mockGameStore.getGeneratorMultipliers).toHaveBeenCalledWith(generatorStore);
         expect(mockGameStore.getFlatBonusesForGenerator).toHaveBeenCalledWith(generatorStore);
      });

      it('should handle game store method calls for different operations', () => {
         vi.clearAllMocks();

         generatorStore.getEffectiveProduction(new Decimal(10));
         generatorStore.getProductionIncrease(new Decimal(2));

         // Should call game store methods multiple times for different calculations
         expect(mockGameStore.getGeneratorMultipliers).toHaveBeenCalledTimes(3); // Once for each getEffectiveProduction call
         expect(mockGameStore.getFlatBonusesForGenerator).toHaveBeenCalledTimes(3);
      });

      it('should work correctly when game store returns different multipliers', () => {
         const multipliers1 = { proofs: 1.5, followers: 2, paranoia: 3 };
         const multipliers2 = { proofs: 0.5, followers: 0.1, paranoia: 10 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getGeneratorMultipliers as any)
            .mockReturnValueOnce(multipliers1)
            .mockReturnValueOnce(multipliers2);

         const production1 = generatorStore.getEffectiveProduction(new Decimal(1));
         const production2 = generatorStore.getEffectiveProduction(new Decimal(1));

         expect(production1.proofs).not.toBe(production2.proofs);
      });
   });
});
