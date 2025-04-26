export type GeneratorId = 'chemtrails' | 'michael_jackson' | 'flat_earth';

export interface GeneratorConditions {
   proofs: number;
   followers: number;
   paranoia: number;
   generators: GeneratorId[];
}

export interface GeneratorCost {
   proofs: number;
   followers: number;
}

export interface GeneratorProduction {
   proofs: number;
   followers: number;
   paranoia: number;
}

export type GeneratorCategory =
   | 'government'
   | 'history'
   | 'technology'
   | 'organization'
   | 'extraterrestrial'
   | 'media-manipulation'
   | 'theory'
   | 'other';

export interface Generator {
   id: GeneratorId;
   categories: GeneratorCategory[];
   baseCost: GeneratorCost;
   costMultiplier: GeneratorCost;
   baseProduction: GeneratorProduction;
   productionMultiplier: GeneratorProduction;
   conditions: GeneratorConditions;
   unlocked: boolean;
}

export interface SerializedGeneratorData {
   id: GeneratorId;
   unlocked: boolean;
   level: number;
}
