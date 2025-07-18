import type Decimal from 'decimal.js';
import type { CategoryId, Conditions, Cost, UpgradeId } from './upgrades';

export type GeneratorId =
   | 'chemtrails'
   | 'michael_jackson'
   | 'flat_earth'
   | 'suspicious_pigeons'
   | 'denver_airport'
   | 'finnish_non_existence'
   | 'great_reset_agenda'
   | '5g_health_impact'
   | 'corporate_logo_symbology'
   | 'gates_philanthropic_impacts';

export interface GeneratorProduction {
   proofs: Decimal;
   followers: Decimal;
   paranoia: Decimal;
}

export interface Generator {
   id: GeneratorId;
   categories: CategoryId[];
   baseCost: Cost;
   costMultiplier: Cost;
   baseProduction: GeneratorProduction;
   productionMultiplier: GeneratorProduction;
   levelScaling: Decimal;
   conditions: Conditions;
   unlocked: boolean;
   upgradesIds: UpgradeId[];
}

export interface SerializedGeneratorData {
   id: GeneratorId;
   level: string;
   unlocked: boolean;
   levelScaling: string; // Optional for backward compatibility
}
