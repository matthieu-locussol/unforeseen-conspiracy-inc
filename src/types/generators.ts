import type { CategoryId, Conditions, Cost, UpgradeId } from './upgrades';

export type GeneratorId = 'chemtrails' | 'michael_jackson' | 'flat_earth';

export interface GeneratorProduction {
   proofs: number;
   followers: number;
   paranoia: number;
}

export interface Generator {
   id: GeneratorId;
   categories: CategoryId[];
   baseCost: Cost;
   costMultiplier: Cost;
   baseProduction: GeneratorProduction;
   productionMultiplier: GeneratorProduction;
   conditions: Conditions;
   unlocked: boolean;
   upgradesIds: UpgradeId[];
}

export interface SerializedGeneratorData {
   id: GeneratorId;
   unlocked: boolean;
   level: number;
}
