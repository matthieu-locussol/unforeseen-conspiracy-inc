import type { Upgrade } from '../types/upgrades';

export const UPGRADES: Upgrade[] = [
   {
      id: 'chemtrails_production_boost',
      name: 'Enhanced Chemical Analysis',
      description:
         'Improved analysis techniques reveal more evidence. +50% proof production for Chemtrails.',
      icon: 'flask',
      cost: { proofs: 100, followers: 0 },
      boosts: [
         {
            type: 'production_multiplier',
            target: {
               type: 'generator',
               id: 'chemtrails',
            },
            value: 0.5,
            resource: 'proofs',
         },
      ],
      conditions: { proofs: 50, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
   {
      id: 'chemtrails_cost_reduction',
      name: 'Efficient Evidence Gathering',
      description:
         'Streamlined processes reduce investigation costs. -25% cost for Chemtrails upgrades.',
      icon: 'coins',
      cost: { proofs: 200, followers: 0 },
      boosts: [
         {
            type: 'cost_reduction',
            target: {
               type: 'generator',
               id: 'chemtrails',
            },
            value: 0.25,
         },
      ],
      conditions: { proofs: 150, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
   {
      id: 'chemtrails_double_chance',
      name: 'Critical Discovery',
      description:
         'Sometimes you find smoking gun evidence. 15% chance to double Chemtrails production.',
      icon: 'target',
      cost: { proofs: 500, followers: 0 },
      boosts: [
         {
            type: 'double_chance',
            target: {
               type: 'generator',
               id: 'chemtrails',
            },
            value: 0.15,
         },
      ],
      conditions: { proofs: 300, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
   {
      id: 'michael_jackson_media_boost',
      name: 'Media Manipulation Mastery',
      description:
         'Better understanding of media manipulation techniques. +75% proof production for media-manipulation conspiracies.',
      icon: 'tv',
      cost: { proofs: 300, followers: 0 },
      boosts: [
         {
            type: 'production_multiplier',
            target: {
               type: 'category',
               id: 'media-manipulation',
            },
            value: 0.75,
            resource: 'proofs',
         },
      ],
      conditions: { proofs: 200, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
   {
      id: 'michael_jackson_speed_boost',
      name: 'Rapid Investigation',
      description:
         'Faster evidence collection techniques. +30% speed for Michael Jackson investigations.',
      icon: 'zap',
      cost: { proofs: 800, followers: 0 },
      boosts: [
         {
            type: 'speed',
            target: {
               type: 'generator',
               id: 'michael_jackson',
            },
            value: 0.3,
         },
      ],
      conditions: { proofs: 500, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
   {
      id: 'michael_jackson_bulk_discount',
      name: 'Economy of Scale',
      description:
         'Bulk operations become more efficient. -10% cost when buying x100 Michael Jackson levels.',
      icon: 'package',
      cost: { proofs: 1500, followers: 0 },
      boosts: [
         {
            type: 'bulk_discount',
            target: {
               type: 'generator',
               id: 'michael_jackson',
            },
            value: 0.1,
         },
      ],
      conditions: { proofs: 1000, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
   {
      id: 'flat_earth_global_boost',
      name: 'Conspiracy Network',
      description:
         'Establish connections between all conspiracies. +25% proof production for all generators.',
      icon: 'globe',
      cost: { proofs: 2000, followers: 0 },
      boosts: [
         {
            type: 'production_multiplier',
            target: {
               type: 'all_generators',
            },
            value: 0.25,
            resource: 'proofs',
         },
      ],
      conditions: { proofs: 1500, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
   {
      id: 'flat_earth_organization_boost',
      name: 'Organizational Excellence',
      description:
         'Better coordination among organized conspiracies. +100% proof production for organization conspiracies.',
      icon: 'users',
      cost: { proofs: 1200, followers: 0 },
      boosts: [
         {
            type: 'production_multiplier',
            target: {
               type: 'category',
               id: 'organization',
            },
            value: 1.0,
            resource: 'proofs',
         },
      ],
      conditions: { proofs: 800, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
   {
      id: 'flat_earth_production_flat',
      name: 'Core Evidence Cache',
      description:
         'A fundamental collection of irrefutable evidence. +2 base proof production for Flat Earth.',
      icon: 'archive',
      cost: { proofs: 5000, followers: 0 },
      boosts: [
         {
            type: 'production_flat',
            target: {
               type: 'generator',
               id: 'flat_earth',
            },
            value: 2,
            resource: 'proofs',
         },
      ],
      conditions: { proofs: 3000, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
   {
      id: 'flat_earth_critical_chance',
      name: 'Critical Evidence',
      description: 'Increases the critical chance of your clicks by 10%.',
      icon: 'target',
      cost: { proofs: 1000, followers: 0 },
      boosts: [
         {
            type: 'click_critical_chance',
            target: {
               type: 'global',
            },
            value: 0.05,
         },
      ],
      conditions: { proofs: 0, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
   {
      id: 'enhanced_critical_power',
      name: 'Enhanced Critical Power',
      description: 'Critical clicks become more powerful. +100% critical hit magnitude.',
      icon: 'zap',
      cost: { proofs: 2000, followers: 0 },
      boosts: [
         {
            type: 'click_critical_magnitude',
            target: {
               type: 'global',
            },
            value: 1.0,
         },
      ],
      conditions: { proofs: 1500, followers: 0, paranoia: 0, generators: [] },
      unlocked: false,
   },
];
