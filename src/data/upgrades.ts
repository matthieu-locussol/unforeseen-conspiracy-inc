import type { Upgrade } from '../types/upgrades';

import Decimal from 'decimal.js';

export const UPGRADES: Upgrade[] = [
   // Chemtrails
   {
      id: 'chemtrails_binoculars',
      name: 'Binoculars Upgrade',
      description:
         "They think we can't see them. With high-powered optics, their delivery systems become crystal clear. Every plane is a potential threat.",
      icon: 'eye',
      cost: { proofs: new Decimal(607), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'chemtrails' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_weather_app',
      name: 'Weather App Conspiracy',
      description:
         "Your phone's weather app isn't for you. It's for them. It tracks who's looking up, who's getting suspicious. Ditch the tech, trust the sky.",
      icon: 'settings',
      cost: { proofs: new Decimal(3292), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_flat',
            resource: 'proofs',
            value: new Decimal(5),
            target: { type: 'generator', id: 'chemtrails' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_aluminum_hat',
      name: 'Aluminum Hat Mk.I',
      description:
         "It's not paranoia, it's basic operational security. A simple aluminum-lined hat can disrupt the psychoactive compounds in the spray. A first-line defense.",
      icon: 'shield',
      cost: { proofs: new Decimal(17853), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'generator', id: 'chemtrails' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_air_quality_monitor',
      name: 'Air Quality Monitor',
      description:
         'Standard air quality monitors can be modified to detect the specific non-terrestrial polymers they use. The readings will confirm your worst fears.',
      icon: 'trendingUp',
      cost: { proofs: new Decimal(96825), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'chemtrails' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'technology' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_government_contacts',
      name: 'Government Contacts',
      description:
         "Information is power. A guy who knows a guy inside the FAA is a critical node in our information network. He doesn't even know what he's leaking.",
      icon: 'users',
      cost: { proofs: new Decimal(525117), followers: new Decimal(0) },
      boosts: [
         {
            type: 'speed',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'chemtrails' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_whistleblower_network',
      name: 'Whistleblower Network',
      description:
         "Create a network of informants: disgruntled ground crew, pilots who've seen too much. They're the weak link in the chain of silence.",
      icon: 'usersRound',
      cost: { proofs: new Decimal(2847952), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'generator', id: 'chemtrails' },
         },
         {
            type: 'click_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_chemical_analysis_kit',
      name: 'Chemical Analysis Kit',
      description:
         "Rainwater collection and analysis. The results from a basic chemical kit will be... illuminating. It's not just water falling from the sky.",
      icon: 'flask',
      cost: { proofs: new Decimal(15446485), followers: new Decimal(0) },
      boosts: [
         {
            type: 'double_chance',
            resource: 'proofs',
            value: new Decimal(0.05),
            target: { type: 'generator', id: 'chemtrails' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_satellite_tracking',
      name: 'Satellite Tracking',
      description:
         "They use public satellite data to hide in plain sight. By cross-referencing flight paths with atmospheric aerosol data, their patterns emerge. They can't hide.",
      icon: 'globe',
      cost: { proofs: new Decimal(83777013), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'category', id: 'government' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_underground_bunker',
      name: 'Underground Bunker',
      description:
         'A hardened location is necessary for periods of heavy spraying. Air filtration, canned goods, and a secure data connection. A modern-day fallout shelter.',
      icon: 'archive',
      cost: { proofs: new Decimal(454332826), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.0),
            target: { type: 'generator', id: 'chemtrails' },
         },
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.3),
            target: { type: 'generator', id: 'chemtrails' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_mind_control_resistance',
      name: 'Mind Control Resistance',
      description:
         "Through micro-dosing and mental exercises, you can build a tolerance to the psychotropic agents. Or maybe that's just another layer of their control...",
      icon: 'shield',
      cost: { proofs: new Decimal(2464134407), followers: new Decimal(0) },
      boosts: [
         {
            type: 'click_critical_chance',
            resource: 'proofs',
            value: new Decimal(0.08),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_global_chemtrail_map',
      name: 'Global Chemtrail Map',
      description:
         'Correlate global flight data with atmospheric readings to create a live map of their operations. The scale of it is staggering.',
      icon: 'globe',
      cost: { proofs: new Decimal(13364215286), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'chemtrails_anti_chemtrail_device',
      name: 'Anti-Chemtrail Device',
      description:
         "A device based on orgone energy principles that can locally disrupt the aerosol suspension. 'Science' doesn't have a paradigm for this. We do.",
      icon: 'zap',
      cost: { proofs: new Decimal(72483101099), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: 'chemtrails' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'all_generators' },
         },
         {
            type: 'click_critical_magnitude',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   // Michael Jackson
   {
      id: 'mj_clone_detection_kit',
      name: 'Clone Detection Kit',
      description:
         'Bio-duplicates have tells. Micro-expressions, slight variations in fingerprints. You just need the right equipment to see the seams in the puppet.',
      icon: 'searchCheck',
      cost: { proofs: new Decimal(4045), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'michael_jackson' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_voice_pattern_analysis',
      name: 'Voice Pattern Analysis',
      description:
         "The vocal cords can be replicated, but not the soul. A spectrographic analysis of his later work reveals harmonic discrepancies that prove it's not him.",
      icon: 'zap',
      cost: { proofs: new Decimal(21948), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_flat',
            resource: 'proofs',
            value: new Decimal(1.5),
            target: { type: 'generator', id: 'michael_jackson' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_plastic_surgery_evidence',
      name: 'Plastic Surgery Evidence',
      description:
         "It wasn't 'plastic surgery'. It was scheduled maintenance and hardware upgrades for the synthetic replacement. They called it that to mock us.",
      icon: 'fileWarning',
      cost: { proofs: new Decimal(119020), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'generator', id: 'michael_jackson' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_government_cloning_lab',
      name: 'Government Cloning Lab',
      description:
         "Deep below the Nevada desert lies the 'bionetics' facility. It's where they grow the replacements for influential figures who won't play ball.",
      icon: 'flask',
      cost: { proofs: new Decimal(645502), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'michael_jackson' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'government' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_celebrity_clone_network',
      name: 'Celebrity Clone Network',
      description:
         "MJ wasn't the first. A whole network of public figures are duplicates. Revealing the full list would shatter the public's reality. We must be careful.",
      icon: 'users',
      cost: { proofs: new Decimal(3500780), followers: new Decimal(0) },
      boosts: [
         {
            type: 'speed',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'generator', id: 'michael_jackson' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_music_mind_control',
      name: 'Music Mind Control',
      description:
         "The duplicate's music is embedded with low-frequency sonic patterns designed to suppress critical thought. It's why pop music feels so hollow.",
      icon: 'tv',
      cost: { proofs: new Decimal(18986347), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'generator', id: 'michael_jackson' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'media-manipulation' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_underground_real_mj',
      name: 'Underground Real MJ',
      description:
         "The real MJ is in hiding, likely in a secure bunker. He's said to be amassing a library of 'truth tracks' to expose the whole system.",
      icon: 'archive',
      cost: { proofs: new Decimal(102976566), followers: new Decimal(0) },
      boosts: [
         {
            type: 'double_chance',
            resource: 'proofs',
            value: new Decimal(0.08),
            target: { type: 'generator', id: 'michael_jackson' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_clone_behavioral_analysis',
      name: 'Clone Behavioral Analysis',
      description:
         "The duplicate's behavior deviates from the original's baseline psychological profile. The inconsistencies are subtle, but they're there if you know what to look for.",
      icon: 'searchCheck',
      cost: { proofs: new Decimal(558513418), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.0),
            target: { type: 'generator', id: 'michael_jackson' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_government_coverup_team',
      name: 'Government Coverup Team',
      description:
         "A dedicated team of handlers and media manipulators work around the clock to maintain the duplicate's cover story. We call them the 'mythweavers'.",
      icon: 'users',
      cost: { proofs: new Decimal(3028885507), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.3),
            target: { type: 'generator', id: 'michael_jackson' },
         },
         {
            type: 'offline_progress',
            resource: 'proofs',
            value: new Decimal(0.1),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_clone_aging_technology',
      name: 'Clone Aging Technology',
      description:
         "The duplicate's aging process is artificial, controlled by telomere-capping injections. It's why his appearance changed so drastically.",
      icon: 'settings',
      cost: { proofs: new Decimal(16427562713), followers: new Decimal(0) },
      boosts: [
         {
            type: 'idle_bonus',
            resource: 'proofs',
            value: new Decimal(0.1),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_celebrity_replacement_program',
      name: 'Celebrity Replacement Program',
      description:
         "This goes beyond one celebrity. It's a systemic program to replace any influential voice with a compliant duplicate. We have to map the network.",
      icon: 'usersRound',
      cost: { proofs: new Decimal(89094768571), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'mj_truth_serum_formula',
      name: 'Truth Serum Formula',
      description:
         "A psychoactive compound that can bypass the duplicate's core programming. Forcing one to speak on a live feed would bring the whole house of cards down.",
      icon: 'flask',
      cost: { proofs: new Decimal(483220673990), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: 'michael_jackson' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'all_generators' },
         },
         {
            type: 'click_critical_magnitude',
            resource: 'proofs',
            value: new Decimal(1.0),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   // Flat Earth
   {
      id: 'flat_earth_ice_wall_expedition',
      name: 'Ice Wall Expedition',
      description:
         "Antarctica isn't a continent. It's a 150-foot ice wall encircling our known world, patrolled by a shadowy multinational force. We need to fund an expedition.",
      icon: 'globe',
      cost: { proofs: new Decimal(20227), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'flat_earth' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_nasa_studio_access',
      name: 'NASA Studio Access',
      description:
         "All 'space missions' are filmed in a secure studio. Gaining access means acquiring original, unedited footage of their green screen operations.",
      icon: 'tv',
      cost: { proofs: new Decimal(109739), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_flat',
            resource: 'proofs',
            value: new Decimal(3.0),
            target: { type: 'generator', id: 'flat_earth' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_antarctic_treaty_breach',
      name: 'Antarctic Treaty Breach',
      description:
         "The Antarctic Treaty isn't about science; it's a military pact to guard the world's edge. Breaching it is the only way to get proof.",
      icon: 'fileWarning',
      cost: { proofs: new Decimal(595101), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'generator', id: 'flat_earth' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_gravity_hoax_exposure',
      name: 'Gravity Hoax Exposure',
      description:
         "'Gravity' is a lie to explain why we don't fall off the 'globe.' The truth is simple density and buoyancy. They complicate it to confuse you.",
      icon: 'alertTriangle',
      cost: { proofs: new Decimal(3227511), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'flat_earth' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'organization' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_satellite_deception',
      name: 'Satellite Deception',
      description:
         "So-called 'satellites' are just high-altitude reconnaissance drones and communication balloons. They can't orbit a flat plane.",
      icon: 'globe',
      cost: { proofs: new Decimal(17503899), followers: new Decimal(0) },
      boosts: [
         {
            type: 'speed',
            resource: 'proofs',
            value: new Decimal(1.0),
            target: { type: 'generator', id: 'flat_earth' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_globe_manufacturing_plant',
      name: 'Globe Manufacturing Plant',
      description:
         "There's a handful of factories that produce every globe on Earth. Infiltrating one would allow us to disrupt the primary tool of indoctrination.",
      icon: 'settings',
      cost: { proofs: new Decimal(94931735), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'generator', id: 'flat_earth' },
         },
         {
            type: 'click_multiplier',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_round_earth_propaganda',
      name: 'Round Earth Propaganda',
      description:
         'The narrative is pushed through the education system. We need to develop counter-curriculum materials to de-program the next generation.',
      icon: 'tv',
      cost: { proofs: new Decimal(514882830), followers: new Decimal(0) },
      boosts: [
         {
            type: 'double_chance',
            resource: 'proofs',
            value: new Decimal(0.1),
            target: { type: 'generator', id: 'flat_earth' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_flat_map_cartography',
      name: 'Flat Map Cartography',
      description:
         "Create a true map of our plane, based on suppressed pre-globular records. The UN logo is a good starting point; they're hiding it in plain sight.",
      icon: 'globe',
      cost: { proofs: new Decimal(2792567091), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.0),
            target: { type: 'generator', id: 'flat_earth' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'media-manipulation' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_underworld_exploration',
      name: 'Underworld Exploration',
      description:
         "If the Earth is not a sphere, what's beneath it? Ancient texts speak of a hollow domain. We need to start digging.",
      icon: 'archive',
      cost: { proofs: new Decimal(15144427533), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: 'flat_earth' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_sky_dome_technology',
      name: 'Sky Dome Technology',
      description:
         "The 'sky' is a physical firmament, a dome onto which celestial bodies are projected. Understanding its technology is key to understanding our prison.",
      icon: 'shield',
      cost: { proofs: new Decimal(82137813563), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.4),
            target: { type: 'generator', id: 'flat_earth' },
         },
         {
            type: 'offline_multiplier',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_global_elite_network',
      name: 'Global Elite Network',
      description:
         'The families who perpetuate this lie form a global network. Mapping their connections and control structures is essential to dismantling their power.',
      icon: 'users',
      cost: { proofs: new Decimal(445473842853), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'flat_earth_truth_broadcast_system',
      name: 'Truth Broadcast System',
      description:
         "Hijack their own satellite network to broadcast the flat Earth truth to every screen on the planet. A signal that can't be ignored.",
      icon: 'tv',
      cost: { proofs: new Decimal(2416103369952), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: 'flat_earth' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'all_generators' },
         },
         {
            type: 'click_critical_chance',
            resource: 'proofs',
            value: new Decimal(0.12),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   // Suspicious Pigeons
   {
      id: 'pigeons_bird_watching_equipment',
      name: 'Bird Watching Equipment',
      description:
         "Standard bird-watching equipment is enough to spot the anomalies. Their flight paths are too perfect, their loitering too intentional. They don't eat, they just observe.",
      icon: 'eye',
      cost: { proofs: new Decimal(68776), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeons_government_drone_manual',
      name: 'Government Drone Manual',
      description:
         "A leaked field manual for the 'Avian Reconnaissance Unit' details the drones' inner workings. Their power source is the biggest giveaway.",
      icon: 'fileWarning',
      cost: { proofs: new Decimal(373113), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_flat',
            resource: 'proofs',
            value: new Decimal(8.0),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeons_pigeon_behavior_analysis',
      name: 'Pigeon Behavior Analysis',
      description:
         "Log their behavior. You'll find they operate on a repeating loop of programmed actions, unlike a real biological entity.",
      icon: 'searchCheck',
      cost: { proofs: new Decimal(2023344), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeons_robotic_pigeon_factory',
      name: 'Robotic Pigeon Factory',
      description:
         'The drones are assembled in automated facilities disguised as industrial bakeries. We have the address of one in New Jersey.',
      icon: 'settings',
      cost: { proofs: new Decimal(10973538), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'surveillance' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeon_surveillance_network',
      name: 'Pigeon Surveillance Network',
      description:
         "The drones form a mesh network, relaying data from one to another until it reaches a central collection node. It's an airborne spy grid.",
      icon: 'globe',
      cost: { proofs: new Decimal(59512856), followers: new Decimal(0) },
      boosts: [
         {
            type: 'speed',
            resource: 'proofs',
            value: new Decimal(1.5),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeons_anti_pigeon_technology',
      name: 'Anti-Pigeon Technology',
      description:
         "A simple electromagnetic pulse device can temporarily disable the drones. They just reboot and fly off, but it proves they're not real.",
      icon: 'zap',
      cost: { proofs: new Decimal(322769919), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'technology' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeons_pigeon_whistleblower',
      name: 'Pigeon Whistleblower',
      description:
         "A former technician from the program has agreed to talk. He's afraid for his life, but his conscience got the better of him.",
      icon: 'users',
      cost: { proofs: new Decimal(1750593641), followers: new Decimal(0) },
      boosts: [
         {
            type: 'double_chance',
            resource: 'proofs',
            value: new Decimal(0.1),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeons_government_pigeon_training',
      name: 'Government Pigeon Training',
      description:
         "They use a handful of real, trained pigeons to lead the drone flocks, making them appear more natural. These 'Judas birds' are the key.",
      icon: 'usersRound',
      cost: { proofs: new Decimal(9493922152), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.0),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
         {
            type: 'click_value',
            resource: 'proofs',
            value: new Decimal(50000),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeons_pigeon_communication_decoder',
      name: 'Pigeon Communication Decoder',
      description:
         'The drones communicate via a specific, encrypted frequency. If we can crack it, we can see what they see.',
      icon: 'terminal',
      cost: { proofs: new Decimal(51491815134), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeons_underground_pigeon_bunker',
      name: 'Underground Pigeon Bunker',
      description:
         'A secure location is needed to disassemble and analyze a captured drone. We need to reverse-engineer the tech.',
      icon: 'archive',
      cost: { proofs: new Decimal(279282361174), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.4),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
         {
            type: 'research_speed',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeons_global_pigeon_network',
      name: 'Global Pigeon Network',
      description:
         "This isn't just a local program. It's global. Every major city is infested with these bio-mechanical spies. The scale is unbelievable.",
      icon: 'globe',
      cost: { proofs: new Decimal(1514581515325), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'pigeons_pigeon_truth_exposure',
      name: 'Pigeon Truth Exposure',
      description:
         'Once we have irrefutable proof, we leak it all. A coordinated data dump that will make people look at the birds in a whole new light.',
      icon: 'fileWarning',
      cost: { proofs: new Decimal(8214371457839), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: 'suspicious_pigeons' },
         },
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'all_generators' },
         },
         {
            type: 'click_critical_magnitude',
            resource: 'proofs',
            value: new Decimal(1.5),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   // Denver Airport
   {
      id: 'denver_airport_gargoyle_glyphs',
      name: 'Gargoyle Glyphs Analysis',
      description:
         "The gargoyles perched in the terminal aren't just decorative. Their positions correspond to runic markers, detailing the entrances to the lower levels. It's a map for those who can read it.",
      icon: 'searchCheck',
      cost: { proofs: new Decimal(262973), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'denver_airport' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_blucifers_signature',
      name: "Blucifer's Energy Signature",
      description:
         "That horse statue, 'Blucifer,' isn't just terrifying public art. It emits a low-frequency field to pacify travelers. We need to analyze its energy signature to find a way to counteract it.",
      icon: 'zap',
      cost: { proofs: new Decimal(1426189), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_flat',
            resource: 'followers',
            value: new Decimal(0.4),
            target: { type: 'generator', id: 'denver_airport' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_nwo_records',
      name: 'New World Airport Commission Records',
      description:
         "The capstone mentions the 'New World Airport Commission.' No such organization officially exists. We need to dig into suppressed records to expose the signatories and their true allegiance.",
      icon: 'fileWarning',
      cost: { proofs: new Decimal(7735397), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'generator', id: 'denver_airport' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_murals_deep_dive',
      name: 'Murals Deep Dive',
      description:
         "The murals aren't just bizarre paintings; they're a pictographic timeline of the elite's plans for global depopulation and a one-world government. Every panel is a confession.",
      icon: 'eye',
      cost: { proofs: new Decimal(41951479), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'denver_airport' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'denver_airport' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_subterranean_mapping',
      name: 'Subterranean Tunnels Mapping',
      description:
         "The official story is a 'failed baggage system.' A ludicrous cover for a sprawling underground city. We can use seismic sensors to map the network of tunnels they're hiding.",
      icon: 'globe',
      cost: { proofs: new Decimal(227506992), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'hidden-worlds' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_lizard_translator',
      name: 'Lizard People Language Translator',
      description:
         "Reports from maintenance workers speak of strange, chittering sounds from deep underground. It's not faulty wiring. We need to develop a translator for their reptilian language.",
      icon: 'terminal',
      cost: { proofs: new Decimal(1233863673), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.2),
            target: { type: 'generator', id: 'denver_airport' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.2),
            target: { type: 'generator', id: 'denver_airport' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_frequency_jammer',
      name: 'Unusual Frequency Jammer',
      description:
         'The entire airport is bathed in specific frequencies to induce compliance. A custom jammer will not only block these signals but also reveal the hidden communications layered on top of them.',
      icon: 'zap',
      cost: { proofs: new Decimal(6692225828), followers: new Decimal(0) },
      boosts: [
         {
            type: 'click_value',
            resource: 'proofs',
            value: new Decimal(100000),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_employee_interviews',
      name: 'Ex-Employee Interviews',
      description:
         'Construction workers and ex-employees were sworn to secrecy. By offering them anonymity and protection, we can piece together firsthand accounts of what they were forced to build down there.',
      icon: 'users',
      cost: { proofs: new Decimal(36298583477), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.03),
            target: { type: 'all_generators' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.02),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_geiger_counter',
      name: 'Geiger Counter Readings',
      description:
         "The high levels of background radiation aren't from 'granite countertops'. They're a byproduct of the exotic power sources used in the subterranean levels. A Geiger counter will tell the real story.",
      icon: 'trendingUp',
      cost: { proofs: new Decimal(196860341773), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'denver_airport' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_runway_analysis',
      name: 'Swastika-shaped Runway Analysis',
      description:
         "The runway layout is not an accident of civil engineering. It's a symbol, visible from above, marking the location as a site of power for a very specific, very old organization.",
      icon: 'searchCheck',
      cost: { proofs: new Decimal(1067759247161), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'denver_airport' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_quantum_scanner',
      name: 'Quantum Luggage Scanner',
      description:
         "Repurpose a standard luggage scanner with quantum tunneling technology. It won't just see what's in the bags; it'll phase through the floor to see what's moving in the 'baggage tunnels' below.",
      icon: 'eye',
      cost: { proofs: new Decimal(5790479701140), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.03),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'denver_airport_queen_deed',
      name: "The Queen of England's Property Deed",
      description:
         'Persistent rumors claim the Queen of England secretly owns property at DIA through shell corporations. Finding that deed would connect the British Crown to the coming New World Order.',
      icon: 'fileWarning',
      cost: { proofs: new Decimal(31405175949572), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'denver_airport' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'denver_airport' },
         },
         {
            type: 'click_critical_magnitude',
            resource: 'proofs',
            value: new Decimal(0.2),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   // Finnish Non-Existence
   {
      id: 'finland_cartographic_analysis',
      name: 'Cartographic Analysis System',
      description:
         "Cross-reference historical maps with satellite data. The 'Finland' landmass appears inconsistently across different mapping agencies. The gaps in their story are literally visible from space.",
      icon: 'globe',
      cost: { proofs: new Decimal(1129606), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'finnish_non_existence' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_nokia_financial_records',
      name: 'Nokia Financial Records Audit',
      description:
         "Nokia's financial records don't add up for a company supposedly from a country with 5.5 million people. The revenue streams point to Russian and Japanese shell corporations, not Finnish consumers.",
      icon: 'dollar',
      cost: { proofs: new Decimal(6126786), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_flat',
            resource: 'proofs',
            value: new Decimal(15.0),
            target: { type: 'generator', id: 'finnish_non_existence' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_linguistic_deconstruction',
      name: 'Linguistic Deconstruction Protocol',
      description:
         "Finnish shares no meaningful linguistic roots with neighboring languages. It's a constructed language designed to give credibility to the hoax. Even the grammar is suspiciously artificial.",
      icon: 'terminal',
      cost: { proofs: new Decimal(33227418), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'generator', id: 'finnish_non_existence' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_satellite_imagery_gaps',
      name: 'Satellite Imagery Gap Analysis',
      description:
         "High-resolution satellite imagery of the 'Finland' region shows suspicious pixelation and composite artifacting. They're literally photoshopping a country into existence on our maps.",
      icon: 'globe',
      cost: { proofs: new Decimal(180205211), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'finnish_non_existence' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'finnish_non_existence' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_fishing_rights_treaty',
      name: 'Russo-Japanese Fishing Rights Treaty',
      description:
         'Declassified documents from the 1940s reference a secret fishing agreement between Russia and Japan. The coordinates match perfectly with the supposed Finnish borders. Coincidence? Hardly.',
      icon: 'fileWarning',
      cost: { proofs: new Decimal(977348574), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'government' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_crisis_actor_database',
      name: 'Crisis Actor Database',
      description:
         "Every 'Finnish' person can be traced back to acting agencies in neighboring countries. We're building a comprehensive database of these international operatives and their fake backstories.",
      icon: 'database',
      cost: { proofs: new Decimal(5300755584), followers: new Decimal(0) },
      boosts: [
         {
            type: 'speed',
            resource: 'proofs',
            value: new Decimal(2.0),
            target: { type: 'generator', id: 'finnish_non_existence' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_population_census_fraud',
      name: 'Population Census Fraud Investigation',
      description:
         "Finland's population statistics are mathematically impossible given birth rates, immigration data, and economic output. The numbers are fabricated to support the illusion of a functioning nation-state.",
      icon: 'users',
      cost: { proofs: new Decimal(28750884898), followers: new Decimal(0) },
      boosts: [
         {
            type: 'double_chance',
            resource: 'proofs',
            value: new Decimal(0.1),
            target: { type: 'generator', id: 'finnish_non_existence' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_educational_propaganda',
      name: 'Educational System Propaganda Unit',
      description:
         "Schools worldwide teach about 'Finland' as fact. This requires a coordinated global education conspiracy. We need to trace the textbook publishers and their suspicious funding sources.",
      icon: 'tv',
      cost: { proofs: new Decimal(155931652702), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'media-manipulation' },
         },
         {
            type: 'click_multiplier',
            resource: 'proofs',
            value: new Decimal(1.0),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_embassy_shell_operations',
      name: 'Embassy Shell Operations Analysis',
      description:
         "Finnish embassies are staffed by Russian and Japanese operatives. By monitoring diplomatic communications, we can expose the true chain of command behind the 'Finnish' government facade.",
      icon: 'archive',
      cost: { proofs: new Decimal(845722807530), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'generator', id: 'finnish_non_existence' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_cultural_fabrication_unit',
      name: 'Cultural Fabrication Unit',
      description:
         "Finnish 'culture' - from saunas to heavy metal - is artificially constructed to give the hoax authenticity. Each cultural element can be traced to systematic psychological operations designed to fool the masses.",
      icon: 'settings',
      cost: { proofs: new Decimal(4586415891338), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.3),
            target: { type: 'generator', id: 'finnish_non_existence' },
         },
         {
            type: 'click_critical_chance',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_deep_state_coordination',
      name: 'Deep State Coordination Network',
      description:
         "The Finland hoax requires coordination between multiple intelligence agencies, the UN, Google Maps, and countless other institutions. We're mapping the entire network responsible for maintaining this lie.",
      icon: 'usersRound',
      cost: { proofs: new Decimal(24875323862276), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'finland_revelation_protocol',
      name: 'Finland Revelation Protocol',
      description:
         'Once we have irrefutable proof, we execute a coordinated global revelation. Every major news outlet, social media platform, and government database simultaneously learns the truth: Finland never existed.',
      icon: 'fileWarning',
      cost: { proofs: new Decimal(134887349767676), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: 'finnish_non_existence' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.5),
            target: { type: 'all_generators' },
         },
         {
            type: 'click_critical_magnitude',
            resource: 'proofs',
            value: new Decimal(2.0),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   // Great Reset Agenda
   {
      id: 'great_reset_wef_publication_analysis',
      name: 'WEF Publication Analysis',
      description:
         "The official documents are filled with doublespeak. 'Stakeholder capitalism' is just feudalism with better branding. We need to decode their manifestos.",
      icon: 'fileWarning',
      cost: { proofs: new Decimal(5042885), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'great_reset_agenda' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_digital_currency_tracking',
      name: 'Digital Currency Tracking',
      description:
         "They want to replace cash with a programmable digital currency. One that can be turned off if you buy the 'wrong' kind of products. We must map their blockchain infrastructure.",
      icon: 'dollar',
      cost: { proofs: new Decimal(27351722), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_flat',
            resource: 'proofs',
            value: new Decimal(35.0),
            target: { type: 'generator', id: 'great_reset_agenda' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_insect_protein_propaganda',
      name: 'Insect Protein Propaganda',
      description:
         "The push for 'sustainable' insect protein isn't about the environment. It's about conditioning the masses to accept nutrient paste while the elite eat steak. We're tracking the supply chain.",
      icon: 'package',
      cost: { proofs: new Decimal(148336688), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'generator', id: 'great_reset_agenda' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_property_abolition_blueprint',
      name: 'Property Abolition Blueprint',
      description:
         "The goal is simple: abolish private property for the commoner. We're analyzing zoning laws and land ownership databases to find the legislative vectors they're using.",
      icon: 'fileWarning',
      cost: { proofs: new Decimal(804576836), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'great_reset_agenda' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'great_reset_agenda' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_social_credit_system',
      name: 'Social Credit Score System',
      description:
         'They are building a global social credit system, tying your access to services to your compliance with their narrative. We have to expose the algorithm.',
      icon: 'users',
      cost: { proofs: new Decimal(4363328376), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'organization' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_own_nothing_simulation',
      name: "The 'Own Nothing' Simulation",
      description:
         "We'll run simulations based on their economic models. The outcome is always the same: serfdom. These models are not predictions, they are plans.",
      icon: 'terminal',
      cost: { proofs: new Decimal(23664801716), followers: new Decimal(0) },
      boosts: [
         {
            type: 'speed',
            resource: 'proofs',
            value: new Decimal(2.5),
            target: { type: 'generator', id: 'great_reset_agenda' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_davos_infiltration',
      name: 'Davos Meeting Infiltration',
      description:
         "An operative inside the annual WEF meeting in Davos. They won't be discussing policy, just sipping champagne and finalizing our collective future.",
      icon: 'users',
      cost: { proofs: new Decimal(128352168481), followers: new Decimal(0) },
      boosts: [
         {
            type: 'double_chance',
            resource: 'proofs',
            value: new Decimal(0.1),
            target: { type: 'generator', id: 'great_reset_agenda' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_great_narrative_deconstruction',
      name: 'The Great Narrative Deconstruction',
      description:
         "They speak of a 'Great Narrative'. It's the story they will tell to justify the reset. We must deconstruct it before it becomes history.",
      icon: 'archive',
      cost: { proofs: new Decimal(696194917415), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'media-manipulation' },
         },
         {
            type: 'click_value',
            resource: 'proofs',
            value: new Decimal(250000),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_fourth_industrial_revolution_tech',
      name: 'Fourth Industrial Revolution Tech',
      description:
         "They champion AI, IoT, and genetic engineering. Not for progress, but for control. We're investigating the tech companies in their pocket.",
      icon: 'settings',
      cost: { proofs: new Decimal(3775914332900), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'generator', id: 'great_reset_agenda' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_global_leader_puppet_strings',
      name: 'Global Leader Puppet Strings',
      description:
         "The WEF's 'Young Global Leaders' program has placed operatives in governments worldwide. We're mapping this network of puppets.",
      icon: 'usersRound',
      cost: { proofs: new Decimal(20481231454552), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.3),
            target: { type: 'generator', id: 'great_reset_agenda' },
         },
         {
            type: 'offline_multiplier',
            resource: 'proofs',
            value: new Decimal(0.2),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_personal_carbon_footprint_hoax',
      name: 'Personal Carbon Footprint Hoax',
      description:
         "The idea of a 'personal carbon footprint' was created to shift blame from corporations to individuals. It's the ultimate psychological trick to make you police yourself.",
      icon: 'alertTriangle',
      cost: { proofs: new Decimal(111084936161434), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'great_reset_happiness_doctrine',
      name: 'The Happiness Doctrine',
      description:
         "The promise of 'and you'll be happy' is the most sinister part. It's the promise of a drugged, compliant populace that has forgotten what freedom feels like. We must develop a counter-narrative.",
      icon: 'shield',
      cost: { proofs: new Decimal(602484411135242), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: 'great_reset_agenda' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.5),
            target: { type: 'all_generators' },
         },
         {
            type: 'research_speed',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   // 5G Health Impact
   {
      id: '5g_health_impact_emf_meter',
      name: 'EMF Meter Purchase',
      description:
         "Your first step is to see the invisible enemy. A commercial EMF meter is enough to show you the radiation soup you're living in. The readings near a 5G tower will be... informative.",
      icon: 'trendingUp',
      cost: { proofs: new Decimal(22188694), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: '5g_health_impact' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_faraday_cage',
      name: 'Faraday Cage Construction',
      description:
         "You can't fight what you can't block. Lining your research space with a Faraday cage is essential to create a baseline, a 'clean' environment to measure the incoming assault.",
      icon: 'shield',
      cost: { proofs: new Decimal(120325977), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_flat',
            resource: 'proofs',
            value: new Decimal(75.0),
            target: { type: 'generator', id: '5g_health_impact' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_leaked_documents',
      name: 'Leaked Industry Documents',
      description:
         "We've got a source inside a major telecom. He's feeding us internal safety studies that were buried for a reason. The data they have versus the data they publish are two very different things.",
      icon: 'fileWarning',
      cost: { proofs: new Decimal(652597426), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'generator', id: '5g_health_impact' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_bio_resonance_analysis',
      name: 'Biological Resonance Analysis',
      description:
         "It's not about heat. It's about frequency. Certain millimeter wave frequencies resonate with human cell structures, causing disruption. We're building a model to predict these resonant peaks.",
      icon: 'zap',
      cost: { proofs: new Decimal(3539358079), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: '5g_health_impact' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.25),
            target: { type: 'generator', id: '5g_health_impact' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_dead_zone_mapping',
      name: "Urban 'Dead Zone' Mapping",
      description:
         "Some people are getting sick, but only in certain areas. We're mapping these sickness clusters and overlaying them with 5G tower locations. The pattern is undeniable.",
      icon: 'globe',
      cost: { proofs: new Decimal(19192245253), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'technology' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_peer_review_network',
      name: 'Independent Peer Review Network',
      description:
         "The 'official' science is bought and paid for. We're creating a network of independent, non-industry-funded scientists to review the data. They can't suppress all of them.",
      icon: 'users',
      cost: { proofs: new Decimal(104085607556), followers: new Decimal(0) },
      boosts: [
         {
            type: 'speed',
            resource: 'proofs',
            value: new Decimal(3.0),
            target: { type: 'generator', id: '5g_health_impact' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_tower_teardown',
      name: 'Deactivated Tower Teardown',
      description:
         "We've located a tower that's been 'deactivated' for maintenance. It's our chance to get inside, pull apart the hardware, and see what technology they're *really* packing in there.",
      icon: 'settings',
      cost: { proofs: new Decimal(564539542549), followers: new Decimal(0) },
      boosts: [
         {
            type: 'double_chance',
            resource: 'proofs',
            value: new Decimal(0.1),
            target: { type: 'generator', id: '5g_health_impact' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_animal_dieoff_correlation',
      name: 'Bird & Bee Die-off Correlation',
      description:
         "They're not just targeting us. Reports of mass bird and bee deaths correlate perfectly with 5G rollouts in major cities. Animals are more sensitive. They're the canaries in the coal mine.",
      icon: 'alertTriangle',
      cost: { proofs: new Decimal(3061655610664), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'health' },
         },
         {
            type: 'click_multiplier',
            resource: 'proofs',
            value: new Decimal(1.5),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_psychotronic_modulation',
      name: 'Psychotronic Frequency Modulation',
      description:
         "It's not just physical health. The frequencies can be modulated to affect mood and cognition. 'Brain fog' isn't a symptom, it's a feature. We're working on decoding these modulations.",
      icon: 'zap',
      cost: { proofs: new Decimal(16606042979859), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'generator', id: '5g_health_impact' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_graphene_oxide_link',
      name: '5G-to-Graphene Oxide Hypothesis',
      description:
         'A theory gaining traction in our circles. Could the signals be activating dormant graphene oxide introduced into the body through other... vectors? We need to investigate the link.',
      icon: 'flask',
      cost: { proofs: new Decimal(90069536034680), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.3),
            target: { type: 'generator', id: '5g_health_impact' },
         },
         {
            type: 'click_critical_chance',
            resource: 'proofs',
            value: new Decimal(0.2),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_global_grid_mapping',
      name: 'Global Frequency Harmonization Grid',
      description:
         "The towers are all connected, forming a global grid. They can harmonize their frequencies to create massive 'hot spots' of radiation. We need to map their network topology.",
      icon: 'globe',
      cost: { proofs: new Decimal(488497491787122), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: '5g_health_impact_counter_frequency_emitter',
      name: 'Counter-Frequency Emitter',
      description:
         "Based on our research, we've developed a device that emits a counter-frequency, creating a localized 'safe zone' by nullifying the 5G waves. It's a shield against the invisible storm.",
      icon: 'zap',
      cost: { proofs: new Decimal(2649479383643798), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: '5g_health_impact' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.5),
            target: { type: 'all_generators' },
         },
         {
            type: 'click_critical_magnitude',
            resource: 'proofs',
            value: new Decimal(2.5),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   // Hidden Symbology in Corporate Logos
   {
      id: 'corporate_logo_sacred_geometry',
      name: 'Sacred Geometry Ruler',
      description:
         "It starts with geometry. A simple ruler and a compass are all you need to uncover the sacred ratios and Masonic patterns hidden in the designs of the most 'innocuous' brands.",
      icon: 'searchCheck',
      cost: { proofs: new Decimal(100858610), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'corporate_logo_symbology' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_color_analysis',
      name: 'Color Palette Analysis',
      description:
         "The color choices aren't aesthetic. They're alchemical. We're analyzing the specific hex codes to reveal their connection to hermetic principles and elemental manipulation.",
      icon: 'flask',
      cost: { proofs: new Decimal(546936259), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_flat',
            resource: 'proofs',
            value: new Decimal(170.0),
            target: { type: 'generator', id: 'corporate_logo_symbology' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_subliminal_detector',
      name: 'Subliminal Messaging Detector',
      description:
         "Flickering images, hidden words, suggestive shapes. We're developing software to scan logos frame-by-frame, revealing the subliminal commands they flash at you millions of times a day.",
      icon: 'eye',
      cost: { proofs: new Decimal(2966806482), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'generator', id: 'corporate_logo_symbology' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_gematria',
      name: 'Brand Name Gematria',
      description:
         "The names aren't random. Using ancient numerology (Gematria), we can decode the true meaning and intent behind the brand names. The numbers don't lie.",
      icon: 'terminal',
      cost: { proofs: new Decimal(16089809450), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'corporate_logo_symbology' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'corporate_logo_symbology' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_font_psychology',
      name: 'Font Psychology Database',
      description:
         "The fonts are chosen to evoke specific emotional responses. We're compiling a database of corporate typography and its links to psychological manipulation techniques developed by Tavistock.",
      icon: 'database',
      cost: { proofs: new Decimal(87251111603), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'media-manipulation' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_sigil_grimoire',
      name: 'Sigil Magic Grimoire',
      description:
         'A recovered grimoire details how to create and charge sigils for influence. The overlap with modern logo design is... perfect. They are casting spells on a global scale.',
      icon: 'archive',
      cost: { proofs: new Decimal(473199792040), followers: new Decimal(0) },
      boosts: [
         {
            type: 'speed',
            resource: 'proofs',
            value: new Decimal(4.0),
            target: { type: 'generator', id: 'corporate_logo_symbology' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_mascot_deconstruction',
      name: 'Corporate Mascot Deconstruction',
      description:
         "The friendly mascots are archetypal servitors. We're unmasking their occult origins, from jovial food icons to cartoon animals, revealing the entities they truly represent.",
      icon: 'users',
      cost: { proofs: new Decimal(2566543372951), followers: new Decimal(0) },
      boosts: [
         {
            type: 'double_chance',
            resource: 'proofs',
            value: new Decimal(0.12),
            target: { type: 'generator', id: 'corporate_logo_symbology' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_jungian_mapping',
      name: 'Jungian Archetype Mapping',
      description:
         'They tap directly into the collective unconscious. By mapping logos to Jungian archetypes, we can see how they hijack our primal symbols to create brand loyalty.',
      icon: 'usersRound',
      cost: { proofs: new Decimal(13919934622915), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'organization' },
         },
         {
            type: 'click_value',
            resource: 'proofs',
            value: new Decimal(500000),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_ritual_analysis',
      name: 'Global Branding Ritual Analysis',
      description:
         "Product launches and Super Bowl ads aren't just for sales. They are coordinated global rituals designed to energize the corporate sigils. We're tracking their astrological timings.",
      icon: 'globe',
      cost: { proofs: new Decimal(75497931726880), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'generator', id: 'corporate_logo_symbology' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_debranding_goggles',
      name: 'De-branding Goggles',
      description:
         'Specialized eyewear that uses augmented reality to strip away the logos, revealing the raw, unfiltered product underneath. It breaks the spell, one consumer at a time.',
      icon: 'eye',
      cost: { proofs: new Decimal(409477017266158), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.4),
            target: { type: 'generator', id: 'corporate_logo_symbology' },
         },
         {
            type: 'click_critical_chance',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_egregore_connection',
      name: 'Logo-to-Egregore Connection',
      description:
         "Each major brand has spawned an 'egregore' - a psychic entity fed by consumer attention. We're learning to trace the flow of energy from the logo to these powerful thoughtforms.",
      icon: 'zap',
      cost: { proofs: new Decimal(2220718042122352), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'corporate_logo_counter_sigil',
      name: 'Memetic Counter-Sigil',
      description:
         'The only way to fight a symbol is with another symbol. We are designing a memetic counter-sigil, a viral symbol that neutralizes the effects of corporate branding on contact. A vaccine for the mind.',
      icon: 'shield',
      cost: { proofs: new Decimal(12042788880052328), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: 'corporate_logo_symbology' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.5),
            target: { type: 'all_generators' },
         },
         {
            type: 'click_critical_magnitude',
            resource: 'proofs',
            value: new Decimal(3.0),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   // Gates Philanthropic Impacts
   {
      id: 'gates_grant_auditor',
      name: 'Grant Forensic Auditor',
      description:
         "Follow the money. Not where they say it goes, but where it *actually* lands. You'll find a labyrinth of NGOs and shell corporations that leads right back to their own portfolio.",
      icon: 'dollar',
      cost: { proofs: new Decimal(464009605), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'gates_philanthropic_impacts' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_patent_tracker',
      name: 'Patent Portfolio Tracker',
      description:
         "Every humanitarian crisis seems to coincide with a new patent filing from a company they fund. It's not charity, it's vertical integration on a global scale.",
      icon: 'fileWarning',
      cost: { proofs: new Decimal(2516646790), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_flat',
            resource: 'proofs',
            value: new Decimal(350.0),
            target: { type: 'generator', id: 'gates_philanthropic_impacts' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_agricultural_impact',
      name: 'Agricultural Impact Analysis',
      description:
         "They call it 'sustainable agriculture'. We call it creating a dependency on patented seeds and chemicals. The goal isn't to feed the world, it's to own the food supply.",
      icon: 'package',
      cost: { proofs: new Decimal(13649129817), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'generator', id: 'gates_philanthropic_impacts' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_pharma_synergy',
      name: 'Pharmaceutical Synergy Map',
      description:
         "The vaccines they fund often require treatments for side effects produced by... other companies they fund. It's a self-sustaining business model disguised as public health.",
      icon: 'flask',
      cost: { proofs: new Decimal(74031133475), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.5),
            target: { type: 'generator', id: 'gates_philanthropic_impacts' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.25),
            target: { type: 'generator', id: 'gates_philanthropic_impacts' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_population_data_mining',
      name: 'Population Data Mining',
      description:
         "Their health initiatives are the perfect cover for mass data collection. They're not tracking diseases; they're tracking you. Demographics, biometrics, compliance rates... it's all in a database.",
      icon: 'database',
      cost: { proofs: new Decimal(401529113374), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'government' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_educational_curriculum',
      name: 'Educational Curriculum Influence',
      description:
         "They fund educational programs to 'improve learning'. A closer look at the curriculum shows a subtle rewrite of history and science to fit their globalist narrative. Indoctrination starts early.",
      icon: 'tv',
      cost: { proofs: new Decimal(2177999052674), followers: new Decimal(0) },
      boosts: [
         {
            type: 'speed',
            resource: 'proofs',
            value: new Decimal(5.0),
            target: { type: 'generator', id: 'gates_philanthropic_impacts' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_seed_vault_intel',
      name: 'Svalbard Seed Vault Intel',
      description:
         "Why would a tech billionaire be so interested in a seed vault near the North Pole? It's not a backup for humanity; it's a genetic library to be leveraged after the current ecosystem is... 'optimized'.",
      icon: 'archive',
      cost: { proofs: new Decimal(11811984242689), followers: new Decimal(0) },
      boosts: [
         {
            type: 'double_chance',
            resource: 'proofs',
            value: new Decimal(0.12),
            target: { type: 'generator', id: 'gates_philanthropic_impacts' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_digital_id_initiative',
      name: 'Digital ID Initiative (ID2020)',
      description:
         "The push for a global digital ID, tied to your vaccination status and financial records. It's not for convenience. It's the infrastructure for the social credit system they're beta testing.",
      icon: 'users',
      cost: { proofs: new Decimal(64065609470381), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'category', id: 'technology' },
         },
         {
            type: 'click_value',
            resource: 'proofs',
            value: new Decimal(1000000),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_weather_modification_link',
      name: 'Weather Modification Connection',
      description:
         "Dig deep enough, and you find funding for atmospheric geoengineering research. The droughts and famines they 'solve' may just be problems they helped create.",
      icon: 'globe',
      cost: { proofs: new Decimal(347458113642194), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.75),
            target: { type: 'generator', id: 'gates_philanthropic_impacts' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_global_health_database',
      name: 'Global Health Database Access',
      description:
         "Their 'global health' network is the most comprehensive surveillance system ever created. Gaining back-end access means we can see who they're really targeting with their 'interventions'.",
      icon: 'database',
      cost: { proofs: new Decimal(1884489958744952), followers: new Decimal(0) },
      boosts: [
         {
            type: 'cost_reduction',
            resource: 'proofs',
            value: new Decimal(0.4),
            target: { type: 'generator', id: 'gates_philanthropic_impacts' },
         },
         {
            type: 'offline_progress',
            resource: 'proofs',
            value: new Decimal(0.15),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_policy_influence_map',
      name: 'Policy Influence Mapping',
      description:
         "Through strategic donations, they've placed allies in key positions within governments and global health organizations. It's not lobbying; it's a silent takeover.",
      icon: 'usersRound',
      cost: { proofs: new Decimal('10220301157960300'), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(0.25),
            target: { type: 'all_generators' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
   {
      id: 'gates_savior_complex_deconstruction',
      name: "The 'Savior Complex' Deconstruction",
      description:
         'The final layer of the onion. The entire philanthropic persona is a meticulously crafted psychological operation to make the public see a savior, not a monopolist. We need to shatter the illusion.',
      icon: 'shield',
      cost: { proofs: new Decimal('55431665420658820'), followers: new Decimal(0) },
      boosts: [
         {
            type: 'production_multiplier',
            resource: 'proofs',
            value: new Decimal(1.25),
            target: { type: 'generator', id: 'gates_philanthropic_impacts' },
         },
         {
            type: 'production_multiplier',
            resource: 'followers',
            value: new Decimal(0.5),
            target: { type: 'all_generators' },
         },
         {
            type: 'research_speed',
            resource: 'proofs',
            value: new Decimal(1.0),
            target: { type: 'global' },
         },
      ],
      conditions: {
         proofs: new Decimal(0),
         followers: new Decimal(0),
         paranoia: new Decimal(0),
         generators: [],
      },
      unlocked: false,
   },
];
