import type { CustomIcon } from '../components/core/Icons';

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

// Stats boost types for upgrades
export type StatsBoostType =
   | 'production_flat'
   | 'production_multiplier'
   | 'speed'
   | 'double_chance'
   | 'cost_reduction'
   | 'bulk_discount'
   | 'click_value'
   | 'click_multiplier'
   | 'click_critical_chance'
   | 'click_critical_magnitude'
   | 'click_combo'
   | 'offline_progress'
   | 'offline_multiplier'
   | 'idle_bonus'
   | 'research_speed';

export type StatsBoostTarget = 'this_generator' | 'category' | 'all_generators' | 'global';

export interface StatsBoost {
   type: StatsBoostType;
   target: StatsBoostTarget;
   value: number;
   resource?: 'proofs' | 'followers' | 'paranoia';
   category?: GeneratorCategory;
}

export type UpgradeId = string;

export interface GeneratorUpgrade {
   id: UpgradeId;
   name: string;
   description: string;
   icon: CustomIcon;
   cost: GeneratorCost;
   statsBoosts: StatsBoost[];
   conditions: GeneratorConditions;
   maxLevel: number;
   purchased: boolean;
}

export interface Generator {
   id: GeneratorId;
   categories: GeneratorCategory[];
   baseCost: GeneratorCost;
   costMultiplier: GeneratorCost;
   baseProduction: GeneratorProduction;
   productionMultiplier: GeneratorProduction;
   conditions: GeneratorConditions;
   unlocked: boolean;
   upgrades: GeneratorUpgrade[];
}

export interface SerializedGeneratorData {
   id: GeneratorId;
   unlocked: boolean;
   level: number;
   upgrades: Record<UpgradeId, boolean>;
}
