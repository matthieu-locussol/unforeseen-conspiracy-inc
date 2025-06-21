import type Decimal from 'decimal.js';
import type { CustomIcon } from '../components/core/Icons';
import type { GeneratorId } from './generators';
import type { ResourceId } from './resources';

export type CategoryId =
   | 'government'
   | 'history'
   | 'technology'
   | 'organization'
   | 'extraterrestrial'
   | 'media-manipulation'
   | 'theory'
   | 'other';

export interface Conditions {
   proofs: Decimal;
   followers: Decimal;
   paranoia: Decimal;
   generators: GeneratorId[];
}

export interface Cost {
   proofs: Decimal;
   followers: Decimal;
}

export type BoostType =
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

export type BoostTarget =
   | {
        id: GeneratorId;
        type: 'generator';
     }
   | {
        id: CategoryId;
        type: 'category';
     }
   | {
        type: 'all_generators' | 'global';
     };

export interface Boost {
   type: BoostType;
   target: BoostTarget;
   value: Decimal;
   resource?: ResourceId;
}

export type UpgradeId =
   | 'chemtrails_production_boost'
   | 'chemtrails_cost_reduction'
   | 'chemtrails_double_chance'
   | 'michael_jackson_media_boost'
   | 'michael_jackson_speed_boost'
   | 'michael_jackson_bulk_discount'
   | 'flat_earth_global_boost'
   | 'flat_earth_organization_boost'
   | 'flat_earth_production_flat'
   | 'flat_earth_critical_chance'
   | 'enhanced_critical_power';

export interface Upgrade {
   id: UpgradeId;
   name: string;
   description: string;
   icon: CustomIcon;
   cost: Cost;
   boosts: Boost[];
   conditions: Conditions;
   unlocked: boolean;
}

export interface SerializedUpgradeData {
   id: UpgradeId;
   unlocked: boolean;
}
