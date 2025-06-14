import type { Resource } from '../types/resources';

export const RESOURCES: Resource[] = [
   {
      id: 'proofs',
      icon: 'searchCheck',
      baseProduction: 0,
      productionMultiplier: 0,
      isClickable: true,
   },
   {
      id: 'followers',
      icon: 'usersRound',
      baseProduction: 0,
      productionMultiplier: 0,
      isClickable: false,
   },
   {
      id: 'paranoia',
      icon: 'eye',
      baseProduction: 0,
      productionMultiplier: 0,
      isClickable: false,
   },
];
