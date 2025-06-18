import type { GeneratorId, SerializedGeneratorData } from '../types/generators';
import type { CategoryId, UpgradeId } from '../types/upgrades';
import type { GameStore } from './GameStore';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { GENERATORS } from '../data/generators';

import { GeneratorStore } from './GeneratorStore';
import { UpgradeStore } from './UpgradeStore';

// Mock GameStore to isolate GeneratorStore testing
const createMockGameStore = (): Partial<GameStore> => ({
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
         expect(generatorStore.categories).toEqual(['government', 'technology']);
         expect(generatorStore.baseCost).toEqual({ proofs: 10, followers: 0 });
         expect(generatorStore.costMultiplier).toEqual({ proofs: 1.15, followers: 0 });
         expect(generatorStore.baseProduction).toEqual({ proofs: 0.1, followers: 0, paranoia: 0 });
         expect(generatorStore.productionMultiplier).toEqual({
            proofs: 0.1,
            followers: 0,
            paranoia: 0,
         });
         expect(generatorStore.conditions).toEqual({
            proofs: 0,
            followers: 0,
            paranoia: 0,
            generators: [],
         });
         expect(generatorStore.unlocked).toBe(true);
         expect(generatorStore.level).toBe(0);
         expect(generatorStore.upgradesIds).toEqual([
            'chemtrails_cost_reduction',
            'chemtrails_production_boost',
            'chemtrails_double_chance',
         ]);
      });

      it('should initialize with correct data from GENERATORS config for michael_jackson', () => {
         generatorStore = new GeneratorStore('michael_jackson', mockGameStore as GameStore);

         expect(generatorStore.id).toBe('michael_jackson');
         expect(generatorStore.categories).toEqual(['media-manipulation']);
         expect(generatorStore.baseCost).toEqual({ proofs: 50, followers: 0 });
         expect(generatorStore.costMultiplier).toEqual({ proofs: 1.17, followers: 0 });
         expect(generatorStore.unlocked).toBe(false);
         expect(generatorStore.level).toBe(0);
      });

      it('should initialize with correct data from GENERATORS config for flat_earth', () => {
         generatorStore = new GeneratorStore('flat_earth', mockGameStore as GameStore);

         expect(generatorStore.id).toBe('flat_earth');
         expect(generatorStore.categories).toEqual(['organization', 'media-manipulation']);
         expect(generatorStore.baseCost).toEqual({ proofs: 250, followers: 0 });
         expect(generatorStore.costMultiplier).toEqual({ proofs: 1.19, followers: 0 });
         expect(generatorStore.unlocked).toBe(false);
         expect(generatorStore.level).toBe(0);
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
         generatorStore.baseCost.proofs = 999;
         generatorStore.upgradesIds.push('new-upgrade-id' as UpgradeId);

         expect(originalData.categories).not.toContain('test-category');
         expect(originalData.baseCost.proofs).toBe(10);
         expect(originalData.upgradesIds).not.toContain('new-upgrade-id');
      });
   });

   describe('Upgrades Property', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
      });

      it('should return empty array when no upgrades are available in game store', () => {
         const upgrades = generatorStore.upgrades;

         expect(upgrades).toEqual([]);
      });

      it('should return only matching upgrades from game store', () => {
         // Set up the mock upgrades array before constructing the generatorStore
         const upgradesIds = GENERATORS.find((g) => g.id === 'chemtrails')!.upgradesIds;

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
         expect(generatorStore.level).toBe(0);

         generatorStore.buy(5);

         expect(generatorStore.level).toBe(5);
      });

      it('should set unlocked to true', () => {
         expect(generatorStore.unlocked).toBe(false);

         generatorStore.buy(1);

         expect(generatorStore.unlocked).toBe(true);
      });

      it('should handle buying multiple times', () => {
         generatorStore.buy(3);
         generatorStore.buy(2);

         expect(generatorStore.level).toBe(5);
         expect(generatorStore.unlocked).toBe(true);
      });

      it('should handle buying zero amount', () => {
         generatorStore.buy(0);

         expect(generatorStore.level).toBe(0);
         expect(generatorStore.unlocked).toBe(true);
      });

      it('should handle negative amounts', () => {
         generatorStore.level = 5;

         generatorStore.buy(-2);

         expect(generatorStore.level).toBe(3);
      });
   });

   describe('getCost()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
      });

      it('should calculate correct cost for single level purchase', () => {
         const cost = generatorStore.getCost(1, 0);

         expect(cost.proofs).toBe(Math.floor(10 * Math.pow(1.15, 1))); // baseCost * multiplier^(currentLevel + 1)
         expect(cost.followers).toBe(0);
      });

      it('should calculate correct cost for multiple levels', () => {
         const cost = generatorStore.getCost(3, 0);

         let expectedProofsCost = 0;

         for (let i = 1; i <= 3; i++) {
            expectedProofsCost += 10 * Math.pow(1.15, i);
         }

         expect(cost.proofs).toBe(Math.floor(expectedProofsCost));
         expect(cost.followers).toBe(0);
      });

      it('should account for current level in cost calculation', () => {
         generatorStore.level = 5;

         const cost = generatorStore.getCost(2, 0);

         let expectedProofsCost = 0;

         for (let i = 1; i <= 2; i++) {
            expectedProofsCost += 10 * Math.pow(1.15, 5 + i); // Start from level 6 and 7
         }

         expect(cost.proofs).toBe(Math.floor(expectedProofsCost));
      });

      it('should apply cost reduction correctly', () => {
         const costReduction = 0.25; // 25% reduction
         const cost = generatorStore.getCost(1, costReduction);

         const baseCost = 10 * Math.pow(1.15, 1);
         const expectedCost = baseCost * (1 - costReduction);

         expect(cost.proofs).toBe(Math.floor(expectedCost));
      });

      it('should handle zero amount purchase', () => {
         const cost = generatorStore.getCost(0, 0);

         expect(cost.proofs).toBe(0);
         expect(cost.followers).toBe(0);
      });

      it('should handle cost reduction greater than 1 (100%)', () => {
         const cost = generatorStore.getCost(1, 1.5); // 150% reduction

         expect(cost.proofs).toBe(Math.floor(10 * Math.pow(1.15, 1) * (1 - 1.5)));
      });

      it('should calculate cost for generator with follower costs', () => {
         // Create a custom generator with follower costs for testing
         const customGameStore = createMockGameStore();
         const customGenerator = new GeneratorStore('chemtrails', customGameStore as GameStore);

         // Override the base cost to include followers
         customGenerator.baseCost = { proofs: 10, followers: 5 };
         customGenerator.costMultiplier = { proofs: 1.15, followers: 1.1 };

         const cost = customGenerator.getCost(2, 0);

         let expectedProofsCost = 0;
         let expectedFollowersCost = 0;

         for (let i = 1; i <= 2; i++) {
            expectedProofsCost += 10 * Math.pow(1.15, i);
            expectedFollowersCost += 5 * Math.pow(1.1, i);
         }

         expect(cost.proofs).toBe(Math.floor(expectedProofsCost));
         expect(cost.followers).toBe(Math.floor(expectedFollowersCost));
      });
   });

   describe('getBaseProduction()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('flat_earth', mockGameStore as GameStore);
      });

      it('should return zero production when unlocked is false', () => {
         expect(generatorStore.unlocked).toBe(false);

         const production = generatorStore.getBaseProduction(5);

         expect(production).toEqual({ proofs: 0, followers: 0, paranoia: 0 });
      });

      it('should return zero production when level is 0', () => {
         generatorStore.unlocked = true;

         const production = generatorStore.getBaseProduction(0);

         expect(production).toEqual({ proofs: 0, followers: 0, paranoia: 0 });
      });

      it('should calculate base production for level 1', () => {
         generatorStore.unlocked = true;

         const production = generatorStore.getBaseProduction(1);

         expect(production.proofs).toBe(3); // baseProduction.proofs
         expect(production.followers).toBe(0);
         expect(production.paranoia).toBe(0);
      });

      it('should calculate base production for higher levels', () => {
         generatorStore.unlocked = true;

         const production = generatorStore.getBaseProduction(5);

         // baseProduction + (level - 1) * productionMultiplier
         const expectedProofs = 3 + (5 - 1) * 3; // 3 + 4 * 3 = 15

         expect(production.proofs).toBe(expectedProofs);
         expect(production.followers).toBe(0);
         expect(production.paranoia).toBe(0);
      });

      it('should round production values to 1 decimal place', () => {
         generatorStore.unlocked = true;

         // Set up production that will create decimal values
         generatorStore.baseProduction = { proofs: 0.333, followers: 0, paranoia: 0 };
         generatorStore.productionMultiplier = { proofs: 0.111, followers: 0, paranoia: 0 };

         const production = generatorStore.getBaseProduction(3);

         // 0.333 + (3 - 1) * 0.111 = 0.333 + 0.222 = 0.555
         expect(production.proofs).toBe(0.6); // Rounded to 1 decimal
      });

      it('should handle production with all resource types', () => {
         generatorStore.unlocked = true;
         generatorStore.baseProduction = { proofs: 1.1, followers: 2.2, paranoia: 3.3 };
         generatorStore.productionMultiplier = { proofs: 0.1, followers: 0.2, paranoia: 0.3 };

         const production = generatorStore.getBaseProduction(4);

         expect(production.proofs).toBe(1.4); // 1.1 + 3 * 0.1
         expect(production.followers).toBe(2.8); // 2.2 + 3 * 0.2
         expect(production.paranoia).toBe(4.2); // 3.3 + 3 * 0.3
      });
   });

   describe('getEffectiveProduction()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         generatorStore.unlocked = true;
      });

      it('should return base production when no bonuses or multipliers', () => {
         const baseProduction = generatorStore.getBaseProduction(5);
         const effectiveProduction = generatorStore.getEffectiveProduction(5);

         expect(effectiveProduction).toEqual(baseProduction);
      });

      it('should apply multipliers from game store', () => {
         const mockMultipliers = { proofs: 2, followers: 1.5, paranoia: 3 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getGeneratorMultipliers as any).mockReturnValue(mockMultipliers);

         const effectiveProduction = generatorStore.getEffectiveProduction(1);

         expect(mockGameStore.getGeneratorMultipliers).toHaveBeenCalledWith(generatorStore);

         // Base production for level 1: proofs = 0.1
         // With multiplier: 0.1 * 2 = 0.2
         expect(effectiveProduction.proofs).toBe(0.2);
      });

      it('should apply flat bonuses from game store', () => {
         const mockFlatBonuses = { proofs: 5, followers: 2, paranoia: 1 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getFlatBonusesForGenerator as any).mockReturnValue(mockFlatBonuses);

         const effectiveProduction = generatorStore.getEffectiveProduction(1);

         expect(mockGameStore.getFlatBonusesForGenerator).toHaveBeenCalledWith(generatorStore);

         // Base production: 0.1, flat bonus: 5, no multiplier: (0.1 + 5) * 1 = 5.1
         expect(effectiveProduction.proofs).toBe(5.1);
      });

      it('should apply both flat bonuses and multipliers correctly', () => {
         const mockFlatBonuses = { proofs: 2, followers: 0, paranoia: 0 };
         const mockMultipliers = { proofs: 3, followers: 1, paranoia: 1 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getFlatBonusesForGenerator as any).mockReturnValue(mockFlatBonuses);
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getGeneratorMultipliers as any).mockReturnValue(mockMultipliers);

         const effectiveProduction = generatorStore.getEffectiveProduction(1);

         // (baseProduction + flatBonus) * multiplier = (0.1 + 2) * 3 = 6.3
         expect(effectiveProduction.proofs).toBe(6.3);
      });

      it('should use current level when no level specified', () => {
         generatorStore.level = 3;

         const effectiveProduction = generatorStore.getEffectiveProduction();
         const explicitProduction = generatorStore.getEffectiveProduction(3);

         expect(effectiveProduction).toEqual(explicitProduction);
      });

      it('should return zero when generator is not unlocked', () => {
         generatorStore.unlocked = false;

         const effectiveProduction = generatorStore.getEffectiveProduction(5);

         expect(effectiveProduction).toEqual({ proofs: 0, followers: 0, paranoia: 0 });
      });

      it('should return zero when level is 0', () => {
         const effectiveProduction = generatorStore.getEffectiveProduction(0);

         expect(effectiveProduction).toEqual({ proofs: 0, followers: 0, paranoia: 0 });
      });

      it('should round final production values to 1 decimal place', () => {
         const mockFlatBonuses = { proofs: 0.333, followers: 0, paranoia: 0 };
         const mockMultipliers = { proofs: 1.111, followers: 1, paranoia: 1 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getFlatBonusesForGenerator as any).mockReturnValue(mockFlatBonuses);
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getGeneratorMultipliers as any).mockReturnValue(mockMultipliers);

         const effectiveProduction = generatorStore.getEffectiveProduction(1);

         // (0.1 + 0.333) * 1.111 = 0.433 * 1.111 = 0.481063
         expect(effectiveProduction.proofs).toBe(0.5); // Rounded to 1 decimal
      });
   });

   describe('getProductionIncrease()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         generatorStore.unlocked = true;
         generatorStore.level = 5;
      });

      it('should calculate production increase for single level', () => {
         const increase = generatorStore.getProductionIncrease(1);

         const currentProduction = generatorStore.getEffectiveProduction(5);
         const newProduction = generatorStore.getEffectiveProduction(6);

         expect(increase.proofs).toBe(
            +(newProduction.proofs - currentProduction.proofs).toFixed(1),
         );
         expect(increase.followers).toBe(
            +(newProduction.followers - currentProduction.followers).toFixed(1),
         );
         expect(increase.paranoia).toBe(
            +(newProduction.paranoia - currentProduction.paranoia).toFixed(1),
         );
      });

      it('should calculate production increase for multiple levels', () => {
         const increase = generatorStore.getProductionIncrease(3);

         const currentProduction = generatorStore.getEffectiveProduction(5);
         const newProduction = generatorStore.getEffectiveProduction(8);

         expect(increase.proofs).toBe(
            +(newProduction.proofs - currentProduction.proofs).toFixed(1),
         );
      });

      it('should handle zero level increase', () => {
         const increase = generatorStore.getProductionIncrease(0);

         expect(increase).toEqual({ proofs: 0, followers: 0, paranoia: 0 });
      });

      it('should handle negative level increase', () => {
         const increase = generatorStore.getProductionIncrease(-2);

         const currentProduction = generatorStore.getEffectiveProduction(5);
         const newProduction = generatorStore.getEffectiveProduction(3);

         expect(increase.proofs).toBe(
            +(newProduction.proofs - currentProduction.proofs).toFixed(1),
         );
         expect(increase.proofs).toBeLessThan(0);
      });

      it('should account for bonuses and multipliers in increase calculation', () => {
         const mockMultipliers = { proofs: 2, followers: 1, paranoia: 1 };

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (mockGameStore.getGeneratorMultipliers as any).mockReturnValue(mockMultipliers);

         const increase = generatorStore.getProductionIncrease(1);

         // Should include the effect of multipliers in the calculation
         expect(increase.proofs).toBeGreaterThan(0.1); // Base production multiplier would be 0.1, but with 2x multiplier should be higher
      });
   });

   describe('effectiveProduction getter', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         generatorStore.unlocked = true;
         generatorStore.level = 3;
      });

      it('should return effective production at current level', () => {
         const effectiveProduction = generatorStore.effectiveProduction;
         const manualCalculation = generatorStore.getEffectiveProduction(3);

         expect(effectiveProduction).toEqual(manualCalculation);
      });

      it('should update when level changes', () => {
         const initialProduction = generatorStore.effectiveProduction;

         generatorStore.level = 5;
         const newProduction = generatorStore.effectiveProduction;

         expect(newProduction.proofs).toBeGreaterThan(initialProduction.proofs);
      });
   });

   describe('baseProductionAtCurrentLevel getter', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         generatorStore.unlocked = true;
         generatorStore.level = 4;
      });

      it('should return base production at current level', () => {
         const baseProduction = generatorStore.baseProductionAtCurrentLevel;
         const manualCalculation = generatorStore.getBaseProduction(4);

         expect(baseProduction).toEqual(manualCalculation);
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
         expect(baseProduction.proofs).toBe(0.4); // 0.1 + (4-1) * 0.1
      });
   });

   describe('reset()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
      });

      it('should reset generator to initial state', () => {
         // Modify generator state
         generatorStore.level = 10;
         generatorStore.unlocked = false; // Chemtrails starts unlocked
         generatorStore.baseCost.proofs = 999;

         generatorStore.reset();

         expect(generatorStore.level).toBe(0);
         expect(generatorStore.unlocked).toBe(true); // Back to original state
         expect(generatorStore.baseCost.proofs).toBe(10); // Back to original
      });

      it('should maintain generator id after reset', () => {
         generatorStore.reset();

         expect(generatorStore.id).toBe('chemtrails');
      });

      it('should reload all data from GENERATORS config', () => {
         // Modify all properties
         generatorStore.categories = ['government'];
         generatorStore.baseCost = { proofs: 999, followers: 999 };
         generatorStore.upgradesIds = ['chemtrails_cost_reduction'];

         generatorStore.reset();

         // Should match original GENERATORS data
         const originalData = GENERATORS.find((g) => g.id === 'chemtrails')!;

         expect(generatorStore.categories).toEqual(originalData.categories);
         expect(generatorStore.baseCost).toEqual(originalData.baseCost);
         expect(generatorStore.upgradesIds).toEqual(originalData.upgradesIds);
      });
   });

   describe('serialize()', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
      });

      it('should serialize essential generator state', () => {
         generatorStore.level = 15;
         generatorStore.unlocked = true;

         const serialized = generatorStore.serialize();

         expect(serialized).toEqual({
            id: 'chemtrails',
            level: 15,
            unlocked: true,
         });
      });

      it('should exclude static data from serialization', () => {
         const serialized = generatorStore.serialize();

         expect(serialized).not.toHaveProperty('baseCost');
         expect(serialized).not.toHaveProperty('categories');
         expect(serialized).not.toHaveProperty('upgradesIds');
      });

      it('should produce JSON-serializable output', () => {
         generatorStore.level = 5;
         const serialized = generatorStore.serialize();

         expect(() => JSON.stringify(serialized)).not.toThrow();

         const jsonString = JSON.stringify(serialized);
         const parsed = JSON.parse(jsonString);

         expect(parsed).toEqual(serialized);
      });
   });

   describe('deserialize()', () => {
      let serializedData: SerializedGeneratorData;

      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         serializedData = {
            id: 'chemtrails',
            level: 8,
            unlocked: false,
         };
      });

      it('should restore level from serialized data', () => {
         generatorStore.deserialize(serializedData);

         expect(generatorStore.level).toBe(8);
      });

      it('should restore unlocked state from serialized data', () => {
         generatorStore.deserialize(serializedData);

         expect(generatorStore.unlocked).toBe(false);
      });

      it('should not modify static configuration data', () => {
         const originalBaseCost = { ...generatorStore.baseCost };
         const originalCategories = [...generatorStore.categories];

         generatorStore.deserialize(serializedData);

         expect(generatorStore.baseCost).toEqual(originalBaseCost);
         expect(generatorStore.categories).toEqual(originalCategories);
         expect(generatorStore.id).toBe('chemtrails'); // Should remain unchanged
      });

      it('should handle missing properties gracefully', () => {
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         const partialData = { id: 'chemtrails', level: undefined, unlocked: undefined } as any;

         expect(() => generatorStore.deserialize(partialData)).not.toThrow();

         // Should handle undefined values gracefully
         expect(generatorStore.level).toBeDefined();
         expect(generatorStore.unlocked).toBeDefined();
      });

      it('should maintain data integrity after deserialization', () => {
         generatorStore.deserialize(serializedData);

         // Generator should still function correctly
         expect(() => generatorStore.effectiveProduction).not.toThrow();
         expect(() => generatorStore.getCost(1, 0)).not.toThrow();
         expect(() => generatorStore.buy(1)).not.toThrow();
      });
   });

   describe('Edge Cases and Error Handling', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
      });

      it('should handle extremely large level values', () => {
         const largeLevel = 999999;

         expect(() => generatorStore.buy(largeLevel)).not.toThrow();
         expect(generatorStore.level).toBe(largeLevel);

         expect(() => generatorStore.getBaseProduction(largeLevel)).not.toThrow();
         expect(() => generatorStore.getEffectiveProduction(largeLevel)).not.toThrow();
      });

      it('should handle negative level values in production calculations', () => {
         generatorStore.unlocked = true;

         expect(() => generatorStore.getBaseProduction(-5)).not.toThrow();
         expect(() => generatorStore.getEffectiveProduction(-5)).not.toThrow();

         const production = generatorStore.getBaseProduction(-5);

         // Negative levels can result in negative production due to the formula: base + (level-1) * multiplier
         expect(production.proofs).toBeLessThanOrEqual(0);
      });

      it('should handle extreme cost reduction values', () => {
         expect(() => generatorStore.getCost(1, -10)).not.toThrow(); // Negative reduction (increase)
         expect(() => generatorStore.getCost(1, 10)).not.toThrow(); // Greater than 100% reduction

         const negativeCostReduction = generatorStore.getCost(1, -1); // 100% increase
         const extremeCostReduction = generatorStore.getCost(1, 2); // 200% reduction

         expect(negativeCostReduction.proofs).toBeGreaterThan(generatorStore.getCost(1, 0).proofs);
         expect(extremeCostReduction.proofs).toBeLessThan(0); // Can result in negative cost
      });

      it('should handle zero and negative amount purchases', () => {
         const initialLevel = generatorStore.level;

         generatorStore.buy(0);
         expect(generatorStore.level).toBe(initialLevel);

         generatorStore.buy(-5);
         expect(generatorStore.level).toBe(initialLevel - 5);
      });

      it('should handle missing game store methods gracefully', () => {
         const brokenGameStore = {} as Partial<GameStore>;

         (brokenGameStore as Partial<GameStore>).getGeneratorMultipliers = undefined;
         (brokenGameStore as Partial<GameStore>).getFlatBonusesForGenerator = undefined;
         const generator = new GeneratorStore('chemtrails', brokenGameStore as GameStore);

         generator.unlocked = true;
         generator.level = 1;

         // Should throw when game store methods are missing (this is expected behavior)
         expect(() => generator.effectiveProduction).toThrow();
      });

      it('should handle floating point precision issues', () => {
         generatorStore.baseProduction = { proofs: 0.1, followers: 0, paranoia: 0 };
         generatorStore.productionMultiplier = { proofs: 0.1, followers: 0, paranoia: 0 };
         generatorStore.unlocked = true;

         const production = generatorStore.getBaseProduction(10);

         // Should handle floating point arithmetic correctly
         expect(production.proofs).toBe(1); // 0.1 + 9 * 0.1 = 1.0
         expect(typeof production.proofs).toBe('number');
         expect(isFinite(production.proofs)).toBe(true);
      });

      it('should handle very small production values', () => {
         generatorStore.baseProduction = { proofs: 0.001, followers: 0, paranoia: 0 };
         generatorStore.unlocked = true;

         const production = generatorStore.getBaseProduction(1);

         expect(production.proofs).toBe(0); // Should round to 1 decimal place
      });

      it('should maintain consistency between related methods', () => {
         generatorStore.unlocked = true;
         generatorStore.level = 5;

         const baseProduction = generatorStore.baseProductionAtCurrentLevel;
         const effectiveProduction = generatorStore.effectiveProduction;
         const manualEffectiveProduction = generatorStore.getEffectiveProduction(5);
         const productionIncrease = generatorStore.getProductionIncrease(0);

         expect(effectiveProduction).toEqual(manualEffectiveProduction);
         expect(productionIncrease).toEqual({ proofs: 0, followers: 0, paranoia: 0 });

         // Base production should be less than or equal to effective production (unless negative bonuses)
         expect(baseProduction.proofs).toBeLessThanOrEqual(effectiveProduction.proofs);
      });
   });

   describe('Integration with GameStore', () => {
      beforeEach(() => {
         generatorStore = new GeneratorStore('chemtrails', mockGameStore as GameStore);
         generatorStore.unlocked = true;
         generatorStore.level = 3;
      });

      it('should call game store methods with correct parameters', () => {
         // Access the value to trigger the getter
         void generatorStore.effectiveProduction;

         expect(mockGameStore.getGeneratorMultipliers).toHaveBeenCalledWith(generatorStore);
         expect(mockGameStore.getFlatBonusesForGenerator).toHaveBeenCalledWith(generatorStore);
      });

      it('should handle game store method calls for different operations', () => {
         vi.clearAllMocks();

         generatorStore.getEffectiveProduction(10);
         generatorStore.getProductionIncrease(2);

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

         const production1 = generatorStore.getEffectiveProduction(1);
         const production2 = generatorStore.getEffectiveProduction(1);

         expect(production1.proofs).not.toBe(production2.proofs);
      });
   });
});
