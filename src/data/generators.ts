import type { Generator } from '../types/generators';

export const GENERATORS: Generator[] = [
   {
      id: 'chemtrails',
      categories: ['government', 'technology'],
      baseCost: {
         proofs: 10,
         followers: 0,
      },
      costMultiplier: {
         proofs: 1.15,
         followers: 0,
      },
      baseProduction: {
         proofs: 0.1,
         followers: 0,
         paranoia: 0,
      },
      productionMultiplier: {
         proofs: 0.1,
         followers: 0,
         paranoia: 0,
      },
      conditions: {
         proofs: 0,
         followers: 0,
         paranoia: 0,
         generators: [],
      },
      unlocked: true,
   },
   {
      id: 'michael_jackson',
      categories: ['media-manipulation'],
      baseCost: {
         proofs: 50,
         followers: 0,
      },
      costMultiplier: {
         proofs: 1.17,
         followers: 0,
      },
      baseProduction: {
         proofs: 0.5,
         followers: 0,
         paranoia: 0,
      },
      productionMultiplier: {
         proofs: 0.5,
         followers: 0,
         paranoia: 0,
      },
      conditions: {
         proofs: 100,
         followers: 0,
         paranoia: 0,
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth',
      categories: ['organization', 'media-manipulation'],
      baseCost: {
         proofs: 250,
         followers: 0,
      },
      costMultiplier: {
         proofs: 1.19,
         followers: 0,
      },
      baseProduction: {
         proofs: 3,
         followers: 0,
         paranoia: 0,
      },
      productionMultiplier: {
         proofs: 3,
         followers: 0,
         paranoia: 0,
      },
      conditions: {
         proofs: 500,
         followers: 0,
         paranoia: 0,
         generators: [],
      },
      unlocked: false,
   },
];
