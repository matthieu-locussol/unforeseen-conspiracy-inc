import type { Resource } from '../types/resources';

import Decimal from 'decimal.js';

export const RESOURCES: Resource[] = [
   {
      id: 'proofs',
      icon: 'searchCheck',
      baseProduction: new Decimal(0),
      productionMultiplier: new Decimal(0),
      isClickable: true,
   },
   {
      id: 'followers',
      icon: 'usersRound',
      baseProduction: new Decimal(0),
      productionMultiplier: new Decimal(0),
      isClickable: false,
   },
   {
      id: 'paranoia',
      icon: 'eye',
      baseProduction: new Decimal(0),
      productionMultiplier: new Decimal(0),
      isClickable: false,
   },
];
