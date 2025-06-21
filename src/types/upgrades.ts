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
   | 'surveillance'
   | 'hidden-worlds'
   | 'health'
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
   // Chemtrails
   | 'chemtrails_binoculars'
   | 'chemtrails_weather_app'
   | 'chemtrails_aluminum_hat'
   | 'chemtrails_air_quality_monitor'
   | 'chemtrails_government_contacts'
   | 'chemtrails_whistleblower_network'
   | 'chemtrails_chemical_analysis_kit'
   | 'chemtrails_satellite_tracking'
   | 'chemtrails_underground_bunker'
   | 'chemtrails_mind_control_resistance'
   | 'chemtrails_global_chemtrail_map'
   | 'chemtrails_anti_chemtrail_device'
   // Michael Jackson
   | 'mj_clone_detection_kit'
   | 'mj_voice_pattern_analysis'
   | 'mj_plastic_surgery_evidence'
   | 'mj_government_cloning_lab'
   | 'mj_celebrity_clone_network'
   | 'mj_music_mind_control'
   | 'mj_underground_real_mj'
   | 'mj_clone_behavioral_analysis'
   | 'mj_government_coverup_team'
   | 'mj_clone_aging_technology'
   | 'mj_celebrity_replacement_program'
   | 'mj_truth_serum_formula'
   // Flat Earth
   | 'flat_earth_ice_wall_expedition'
   | 'flat_earth_nasa_studio_access'
   | 'flat_earth_antarctic_treaty_breach'
   | 'flat_earth_gravity_hoax_exposure'
   | 'flat_earth_satellite_deception'
   | 'flat_earth_globe_manufacturing_plant'
   | 'flat_earth_round_earth_propaganda'
   | 'flat_earth_flat_map_cartography'
   | 'flat_earth_underworld_exploration'
   | 'flat_earth_sky_dome_technology'
   | 'flat_earth_global_elite_network'
   | 'flat_earth_truth_broadcast_system'
   // Suspicious Pigeons
   | 'pigeons_bird_watching_equipment'
   | 'pigeons_government_drone_manual'
   | 'pigeons_pigeon_behavior_analysis'
   | 'pigeons_robotic_pigeon_factory'
   | 'pigeon_surveillance_network'
   | 'pigeons_anti_pigeon_technology'
   | 'pigeons_pigeon_whistleblower'
   | 'pigeons_government_pigeon_training'
   | 'pigeons_pigeon_communication_decoder'
   | 'pigeons_underground_pigeon_bunker'
   | 'pigeons_global_pigeon_network'
   | 'pigeons_pigeon_truth_exposure'
   // Denver Airport
   | 'denver_airport_gargoyle_glyphs'
   | 'denver_airport_blucifers_signature'
   | 'denver_airport_nwo_records'
   | 'denver_airport_murals_deep_dive'
   | 'denver_airport_subterranean_mapping'
   | 'denver_airport_lizard_translator'
   | 'denver_airport_frequency_jammer'
   | 'denver_airport_employee_interviews'
   | 'denver_airport_geiger_counter'
   | 'denver_airport_runway_analysis'
   | 'denver_airport_quantum_scanner'
   | 'denver_airport_queen_deed'
   // Finnish Non-Existence
   | 'finland_cartographic_analysis'
   | 'finland_nokia_financial_records'
   | 'finland_linguistic_deconstruction'
   | 'finland_satellite_imagery_gaps'
   | 'finland_fishing_rights_treaty'
   | 'finland_crisis_actor_database'
   | 'finland_population_census_fraud'
   | 'finland_educational_propaganda'
   | 'finland_embassy_shell_operations'
   | 'finland_cultural_fabrication_unit'
   | 'finland_deep_state_coordination'
   | 'finland_revelation_protocol'
   // Great Reset Agenda
   | 'great_reset_wef_publication_analysis'
   | 'great_reset_digital_currency_tracking'
   | 'great_reset_insect_protein_propaganda'
   | 'great_reset_property_abolition_blueprint'
   | 'great_reset_social_credit_system'
   | 'great_reset_own_nothing_simulation'
   | 'great_reset_davos_infiltration'
   | 'great_reset_great_narrative_deconstruction'
   | 'great_reset_fourth_industrial_revolution_tech'
   | 'great_reset_global_leader_puppet_strings'
   | 'great_reset_personal_carbon_footprint_hoax'
   | 'great_reset_happiness_doctrine'
   // 5G Health Impact
   | '5g_health_impact_emf_meter'
   | '5g_health_impact_faraday_cage'
   | '5g_health_impact_leaked_documents'
   | '5g_health_impact_bio_resonance_analysis'
   | '5g_health_impact_dead_zone_mapping'
   | '5g_health_impact_peer_review_network'
   | '5g_health_impact_tower_teardown'
   | '5g_health_impact_animal_dieoff_correlation'
   | '5g_health_impact_psychotronic_modulation'
   | '5g_health_impact_graphene_oxide_link'
   | '5g_health_impact_global_grid_mapping'
   | '5g_health_impact_counter_frequency_emitter'
   // Hidden Symbology in Corporate Logos
   | 'corporate_logo_sacred_geometry'
   | 'corporate_logo_color_analysis'
   | 'corporate_logo_subliminal_detector'
   | 'corporate_logo_gematria'
   | 'corporate_logo_font_psychology'
   | 'corporate_logo_sigil_grimoire'
   | 'corporate_logo_mascot_deconstruction'
   | 'corporate_logo_jungian_mapping'
   | 'corporate_logo_ritual_analysis'
   | 'corporate_logo_debranding_goggles'
   | 'corporate_logo_egregore_connection'
   | 'corporate_logo_counter_sigil'
   // Gates Philanthropic Impacts
   | 'gates_grant_auditor'
   | 'gates_patent_tracker'
   | 'gates_agricultural_impact'
   | 'gates_pharma_synergy'
   | 'gates_population_data_mining'
   | 'gates_educational_curriculum'
   | 'gates_seed_vault_intel'
   | 'gates_digital_id_initiative'
   | 'gates_weather_modification_link'
   | 'gates_global_health_database'
   | 'gates_policy_influence_map'
   | 'gates_savior_complex_deconstruction';

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
