import type { UpgradeCategory, UpgradeData } from '../store/UpgradeStore';

// Initial upgrades for the game
export const initialUpgrades: UpgradeData[] = [
   // Click upgrades (Metabolism)
   {
      id: 'click_value_1',
      name: 'Watch YouTube',
      description: 'YouTube conspiracy videos give you new ideas. +1 to click value.',
      category: 'click' as UpgradeCategory,
      cost: 15,
      purchased: false,
      visible: true,
      prerequisiteUpgradeIds: [],
      requiredProofs: 0,
   },
   {
      id: 'click_value_2',
      name: 'Practice Penspinning',
      description:
         'Distract yourself with pen tricks to unlock your subconscious. +5 to click value.',
      category: 'click' as UpgradeCategory,
      cost: 100,
      purchased: false,
      visible: false,
      prerequisiteUpgradeIds: ['click_value_1'],
      requiredProofs: 50,
   },
   {
      id: 'click_multiplier_1',
      name: 'Fold Aluminum Hats',
      description: 'Block out mind control rays. +50% to all clicks.',
      category: 'click' as UpgradeCategory,
      cost: 250,
      purchased: false,
      visible: false,
      prerequisiteUpgradeIds: ['click_value_1'],
      requiredProofs: 150,
   },
   {
      id: 'click_critical_chance_1',
      name: 'Read Conspiracy Books',
      description: 'Discover patterns others miss. +5% chance of critical clicks.',
      category: 'click' as UpgradeCategory,
      cost: 500,
      purchased: false,
      visible: false,
      prerequisiteUpgradeIds: ['click_value_2'],
      requiredProofs: 300,
   },
   {
      id: 'click_critical_multiplier_1',
      name: 'Browse 4chan Archives',
      description: 'The wisdom of anonymous. Increases critical click multiplier from 2x to 3x.',
      category: 'click' as UpgradeCategory,
      cost: 1000,
      purchased: false,
      visible: false,
      prerequisiteUpgradeIds: ['click_critical_chance_1'],
      requiredProofs: 750,
   },

   // Resource upgrades
   {
      id: 'proof_multiplier_1',
      name: 'Bookmark Forum Posts',
      description: 'Save important information for later. +25% to proof production.',
      category: 'resource' as UpgradeCategory,
      cost: 200,
      purchased: false,
      visible: false,
      prerequisiteUpgradeIds: [],
      requiredProofs: 100,
   },
   {
      id: 'proof_multiplier_2',
      name: 'Cognitive Dissonance Resistance',
      description:
         'Conflicting information just makes your theories stronger. +50% to proof production.',
      category: 'resource' as UpgradeCategory,
      cost: 1000,
      purchased: false,
      visible: false,
      prerequisiteUpgradeIds: ['proof_multiplier_1'],
      requiredProofs: 750,
   },

   // Generator category upgrades
   {
      id: 'common_generator_boost',
      name: 'Connect the Dots',
      description:
         'Find common patterns between conspiracies. Common conspiracies produce +50% more proofs.',
      category: 'generator' as UpgradeCategory,
      cost: 500,
      purchased: false,
      visible: false,
      prerequisiteUpgradeIds: [],
      requiredProofs: 400,
   },
   {
      id: 'uncommon_generator_boost',
      name: 'Deep Web Research',
      description:
         'Venture into the hidden parts of the internet. Uncommon conspiracies produce +50% more proofs.',
      category: 'generator' as UpgradeCategory,
      cost: 2500,
      purchased: false,
      visible: false,
      prerequisiteUpgradeIds: [],
      requiredProofs: 2000,
   },

   // Special upgrades
   {
      id: 'offline_progress_1',
      name: 'Subconscious Processing',
      description:
         "Your brain works on conspiracies even when you're not actively thinking about them. Increase offline progress from 50% to 75%.",
      category: 'special' as UpgradeCategory,
      cost: 1500,
      purchased: false,
      visible: false,
      prerequisiteUpgradeIds: [],
      requiredProofs: 1000,
   },
];
