import type Decimal from 'decimal.js';
import type { CustomIcon } from '../components/core/Icons';

export type ResourceId = 'proofs' | 'followers' | 'paranoia';

export interface Resource {
   id: ResourceId;
   icon: CustomIcon;
   baseProduction: Decimal;
   productionMultiplier: Decimal;
   isClickable: boolean;
}

export interface SerializedResourceData {
   id: ResourceId;
   value: string;
   highestValue: string;
}
