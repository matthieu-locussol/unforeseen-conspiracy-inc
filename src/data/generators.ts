import type { Generator } from '../types/generators';

import Decimal from 'decimal.js';

export const GENERATORS: Generator[] = [
   {
      id: 'chemtrails',
      categories: ['government', 'technology'],
      baseCost: {
         proofs: new Decimal(10),
         followers: new Decimal(0),
      },
      costMultiplier: {
         proofs: new Decimal(1.15),
         followers: new Decimal(0),
      },
      baseProduction: {
         proofs: new Decimal(0.1),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
      },
      productionMultiplier: {
         proofs: new Decimal(0.1),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
      },
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: true,
      upgradesIds: [
         'chemtrails_cost_reduction',
         'chemtrails_production_boost',
         'chemtrails_double_chance',
      ],
   },
   {
      id: 'michael_jackson',
      categories: ['media-manipulation'],
      baseCost: {
         proofs: new Decimal(50),
         followers: new Decimal(0),
      },
      costMultiplier: {
         proofs: new Decimal(1.17),
         followers: new Decimal(0),
      },
      baseProduction: {
         proofs: new Decimal(0.5),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
      },
      productionMultiplier: {
         proofs: new Decimal(0.5),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
      },
      conditions: {
         proofs: new Decimal(100),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
      upgradesIds: [
         'michael_jackson_media_boost',
         'michael_jackson_speed_boost',
         'michael_jackson_bulk_discount',
      ],
   },
   {
      id: 'flat_earth',
      categories: ['organization', 'media-manipulation'],
      baseCost: {
         proofs: new Decimal(250),
         followers: new Decimal(0),
      },
      costMultiplier: {
         proofs: new Decimal(1.19),
         followers: new Decimal(0),
      },
      baseProduction: {
         proofs: new Decimal(3),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
      },
      productionMultiplier: {
         proofs: new Decimal(3),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
      },
      conditions: {
         proofs: new Decimal(500),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
      upgradesIds: [
         'flat_earth_global_boost',
         'flat_earth_organization_boost',
         'flat_earth_production_flat',
         'flat_earth_critical_chance',
         'enhanced_critical_power',
      ],
   },
];
