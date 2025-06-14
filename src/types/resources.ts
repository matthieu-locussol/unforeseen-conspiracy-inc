import type { CustomIcon } from '../components/core/Icons';

export type ResourceId = 'proofs' | 'followers' | 'paranoia';

export interface Resource {
   id: ResourceId;
   icon: CustomIcon;
   baseProduction: number;
   productionMultiplier: number;
   isClickable: boolean;
}

export interface SerializedResourceData {
   id: ResourceId;
   value: number;
}
