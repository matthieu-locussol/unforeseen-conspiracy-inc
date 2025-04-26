export type ResourceId = 'proofs' | 'followers' | 'paranoia';

export interface Resource {
   id: ResourceId;
   baseProduction: number;
   productionMultiplier: number;
   isClickable: boolean;
}

export interface SerializedResourceData {
   id: ResourceId;
   value: number;
}
