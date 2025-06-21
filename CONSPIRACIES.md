# Conspiracies - Unforeseen Conspiracy Inc.

**LLM Prompt for Writing Descriptions:**

**Objective:** Generate descriptions for new conspiracies (generators) and upgrades that sound like
they are written by a seasoned, yet unhinged, internet conspiracy theorist, reminiscent of 4chan
culture.

**Tone Guidelines:**

1. **Cynical & Arrogant:** The voice should be that of someone who believes they have uncovered
   profound, hidden truths that "normies" are too blind to see. Avoid cheerful or overly
   enthusiastic language.
2. **Pseudo-Intellectual:** Use complex-sounding language to describe simple or absurd ideas. The
   goal is to sound smart while being completely ridiculous.
3. **Deadpan Humor:** The humor should arise from the serious, matter-of-fact presentation of
   increasingly bizarre theories. Treat the most insane ideas as established fact.
4. **Subtle Language:** Instead of using excessive exclamation marks or overtly "childish" phrasing,
   use declarative statements. The conviction in the tone is what sells the conspiracy.
5. **Escalating Absurdity:** While early conspiracies might seem almost plausible (to a theorist),
   they should progressively become more detached from reality. The writing style should remain
   consistent, making the escalation funnier.
6. **Key vocabulary (use sparingly):** "sheeple", "the elite", "normies", "red-pilled", "they", "the
   narrative".

---

This document describes conspiracies (generators) in the game with carefully balanced attributes for
optimal progression pacing in a long-term game with 20+ generators. Numbers in this incremental
clicker game can be huge. The biggest unit currently managed by the game is "DTg", 1DTg being equal
to
"1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000".

## Game Progression Analysis

### Base Click Mechanics

-  **Base Click Value**: 1 proof per click
-  **Click Multiplier**: 1x (no upgrades initially)
-  **Critical Chance**: 0% (no upgrades initially)
-  **Combo System**: 1.5x max multiplier over 1 second window

### Progression Goals

-  **Generator 1**: Available immediately, provides steady income
-  **Generator 2**: Unlockable within ~1 minute of active play
-  **Generator 3**: Unlockable within ~3-5 minutes of active play
-  **Followers**: Start generating around generator 4-5
-  **Paranoia**: Start generating around generator 5-6

## 1. Chemtrails Conspiracy

### Description

_"Look up. You see those white streaks? The normies call them 'contrails'. That's what 'they' want
you to believe. It's a chemical cocktail, a fog to keep the masses docile. You're breathing it right
now."_

### Game Attributes

```typescript
{
   id: 'chemtrails',
   name: 'Chemtrails Investigation',
   description: 'Investigate the mysterious white streaks in the sky that are definitely not normal airplane contrails.',
   categories: ['government', 'technology'],
   baseCost: {
      proofs: new Decimal(15),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.15),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(0.1),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   productionMultiplier: {
      proofs: new Decimal(0.1),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   conditions: {
      proofs: new Decimal(0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
      generators: [],
   },
   unlocked: true,
   upgradesIds: [
      'chemtrails_binoculars',
      'chemtrails_weather_app',
      'chemtrails_aluminum_hat',
      'chemtrails_air_quality_monitor',
      'chemtrails_government_contacts',
      'chemtrails_whistleblower_network',
      'chemtrails_chemical_analysis_kit',
      'chemtrails_satellite_tracking',
      'chemtrails_underground_bunker',
      'chemtrails_mind_control_resistance',
      'chemtrails_global_chemtrail_map',
      'chemtrails_anti_chemtrail_device',
   ],
}
```

### Balance Reasoning

-  **Base Cost**: 15 proofs - achievable in ~15 clicks, but still requires some initial commitment
-  **Cost Multiplier**: 1.15x - meaningful scaling that makes each purchase progressively more
   expensive
-  **Base Production**: 0.1 proofs/sec - 10x slower than clicking, emphasizing active play in early
   game
-  **No followers/paranoia**: Introduced later in the game to avoid early complexity

### Upgrades (12 total)

1. **Binoculars Upgrade** - _"They think we can't see them. With high-powered optics, their delivery
   systems become crystal clear. Every plane is a potential threat."_
2. **Weather App Conspiracy** - _"Your phone's weather app isn't for you. It's for them. It tracks
   who's looking up, who's getting suspicious. Ditch the tech, trust the sky."_
3. **Aluminum Hat Mk.I** - _"It's not paranoia, it's basic operational security. A simple
   aluminum-lined hat can disrupt the psychoactive compounds in the spray. A first-line defense."_
4. **Air Quality Monitor** - _"Standard air quality monitors can be modified to detect the specific
   non-terrestrial polymers they use. The readings will confirm your worst fears."_
5. **Government Contacts** - _"Information is power. A guy who knows a guy inside the FAA is a
   critical node in our information network. He doesn't even know what he's leaking."_
6. **Whistleblower Network** - _"Create a network of informants: disgruntled ground crew, pilots
   who've seen too much. They're the weak link in the chain of silence."_
7. **Chemical Analysis Kit** - _"Rainwater collection and analysis. The results from a basic
   chemical kit will be... illuminating. It's not just water falling from the sky."_
8. **Satellite Tracking** - _"They use public satellite data to hide in plain sight. By
   cross-referencing flight paths with atmospheric aerosol data, their patterns emerge. They can't
   hide."_
9. **Underground Bunker** - _"A hardened location is necessary for periods of heavy spraying. Air
   filtration, canned goods, and a secure data connection. A modern-day fallout shelter."_
10.   **Mind Control Resistance** - _"Through micro-dosing and mental exercises, you can build a
      tolerance to the psychotropic agents. Or maybe that's just another layer of their control..."_
11.   **Global Chemtrail Map** - _"Correlate global flight data with atmospheric readings to create
      a live map of their operations. The scale of it is staggering."_
12.   **Anti-Chemtrail Device** - _"A device based on orgone energy principles that can locally
      disrupt the aerosol suspension. 'Science' doesn't have a paradigm for this. We do."_

---

## 2. Michael Jackson Clone Conspiracy

### Description

_"The man the world saw after the early 2000s was not Michael Jackson. He was a bio-synthetic
duplicate, a puppet. The real MJ was sidelined when he got too close to the truth. They use his
image to push their sonic mind-control agenda."_

### Game Attributes

```typescript
{
   id: 'michael_jackson',
   name: 'Michael Jackson Clone Investigation',
   description: 'Uncover the truth about MJ\'s clone replacement and the government\'s celebrity cloning program.',
   categories: ['media-manipulation', 'government'],
   baseCost: {
      proofs: new Decimal(100),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.15),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(0.2),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   productionMultiplier: {
      proofs: new Decimal(0.2),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   conditions: {
      proofs: new Decimal(0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
      generators: [],
   },
   unlocked: false,
   upgradesIds: [
      'mj_clone_detection_kit',
      'mj_voice_pattern_analysis',
      'mj_plastic_surgery_evidence',
      'mj_government_cloning_lab',
      'mj_celebrity_clone_network',
      'mj_music_mind_control',
      'mj_underground_real_mj',
      'mj_clone_behavioral_analysis',
      'mj_government_coverup_team',
      'mj_clone_aging_technology',
      'mj_celebrity_replacement_program',
      'mj_truth_serum_formula',
   ],
}
```

### Balance Reasoning

-  **Base Cost**: 100 proofs - requires sustained engagement with first generator and clicking
-  **Cost Multiplier**: 1.15x - consistent scaling across all generators
-  **Base Production**: 0.2 proofs/sec - modest 2x improvement over chemtrails
-  **Unlock Conditions**: 0 proofs - no requirements

### Upgrades (12 total)

1. **Clone Detection Kit** - _"Bio-duplicates have tells. Micro-expressions, slight variations in
   fingerprints. You just need the right equipment to see the seams in the puppet."_
2. **Voice Pattern Analysis** - _"The vocal cords can be replicated, but not the soul. A
   spectrographic analysis of his later work reveals harmonic discrepancies that prove it's not
   him."_
3. **Plastic Surgery Evidence** - _"It wasn't 'plastic surgery'. It was scheduled maintenance and
   hardware upgrades for the synthetic replacement. They called it that to mock us."_
4. **Government Cloning Lab** - _"Deep below the Nevada desert lies the 'bionetics' facility. It's
   where they grow the replacements for influential figures who won't play ball."_
5. **Celebrity Clone Network** - _"MJ wasn't the first. A whole network of public figures are
   duplicates. Revealing the full list would shatter the public's reality. We must be careful."_
6. **Music Mind Control** - _"The duplicate's music is embedded with low-frequency sonic patterns
   designed to suppress critical thought. It's why pop music feels so hollow."_
7. **Underground Real MJ** - _"The real MJ is in hiding, likely in a secure bunker. He's said to be
   amassing a library of 'truth tracks' to expose the whole system."_
8. **Clone Behavioral Analysis** - _"The duplicate's behavior deviates from the original's baseline
   psychological profile. The inconsistencies are subtle, but they're there if you know what to look
   for."_
9. **Government Coverup Team** - _"A dedicated team of handlers and media manipulators work around
   the clock to maintain the duplicate's cover story. We call them the 'mythweavers'."_
10.   **Clone Aging Technology** - _"The duplicate's aging process is artificial, controlled by
      telomere-capping injections. It's why his appearance changed so drastically."_
11.   **Celebrity Replacement Program** - _"This goes beyond one celebrity. It's a systemic program
      to replace any influential voice with a compliant duplicate. We have to map the network."_
12.   **Truth Serum Formula** - _"A psychoactive compound that can bypass the duplicate's core
      programming. Forcing one to speak on a live feed would bring the whole house of cards down."_

---

## 3. Flat Earth Theory

### Description

_"The globe is the greatest deception ever perpetrated. A lie to hide the true nature of our realm
and the resources at its edges. NASA is a film studio with a budget larger than most nations,
selling you a fantasy to keep you from asking what's beyond the ice wall."_

### Game Attributes

```typescript
{
   id: 'flat_earth',
   name: 'Flat Earth Revelation',
   description: 'Expose the greatest lie ever told - the Earth is actually flat, not round!',
   categories: ['organization', 'media-manipulation', 'government'],
   baseCost: {
      proofs: new Decimal(500),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.15),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(0.45),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   productionMultiplier: {
      proofs: new Decimal(0.45),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   conditions: {
      proofs: new Decimal(0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
      generators: [],
   },
   unlocked: false,
   upgradesIds: [
      'flat_earth_ice_wall_expedition',
      'flat_earth_nasa_studio_access',
      'flat_earth_antarctic_treaty_breach',
      'flat_earth_gravity_hoax_exposure',
      'flat_earth_satellite_deception',
      'flat_earth_globe_manufacturing_plant',
      'flat_earth_round_earth_propaganda',
      'flat_earth_flat_map_cartography',
      'flat_earth_underworld_exploration',
      'flat_earth_sky_dome_technology',
      'flat_earth_global_elite_network',
      'flat_earth_truth_broadcast_system',
   ],
}
```

### Balance Reasoning

-  **Base Cost**: 500 proofs - requires significant investment from multiple sources
-  **Cost Multiplier**: 1.15x - consistent scaling for balanced progression
-  **Base Production**: 0.45 proofs/sec - modest 2.25x improvement over Michael Jackson
-  **Unlock Conditions**: 0 proofs - no requirements

### Upgrades (12 total)

1. **Ice Wall Expedition** - _"Antarctica isn't a continent. It's a 150-foot ice wall encircling our
   known world, patrolled by a shadowy multinational force. We need to fund an expedition."_
2. **NASA Studio Access** - _"All 'space missions' are filmed in a secure studio. Gaining access
   means acquiring original, unedited footage of their green screen operations."_
3. **Antarctic Treaty Breach** - _"The Antarctic Treaty isn't about science; it's a military pact to
   guard the world's edge. Breaching it is the only way to get proof."_
4. **Gravity Hoax Exposure** - _"'Gravity' is a lie to explain why we don't fall off the 'globe.'
   The truth is simple density and buoyancy. They complicate it to confuse you."_
5. **Satellite Deception** - _"So-called 'satellites' are just high-altitude reconnaissance drones
   and communication balloons. They can't orbit a flat plane."_
6. **Globe Manufacturing Plant** - _"There's a handful of factories that produce every globe on
   Earth. Infiltrating one would allow us to disrupt the primary tool of indoctrination."_
7. **Round Earth Propaganda** - _"The narrative is pushed through the education system. We need to
   develop counter-curriculum materials to de-program the next generation."_
8. **Flat Map Cartography** - _"Create a true map of our plane, based on suppressed pre-globular
   records. The UN logo is a good starting point; they're hiding it in plain sight."_
9. **Underworld Exploration** - _"If the Earth is not a sphere, what's beneath it? Ancient texts
   speak of a hollow domain. We need to start digging."_
10.   **Sky Dome Technology** - _"The 'sky' is a physical firmament, a dome onto which celestial
      bodies are projected. Understanding its technology is key to understanding our prison."_
11.   **Global Elite Network** - _"The families who perpetuate this lie form a global network.
      Mapping their connections and control structures is essential to dismantling their power."_
12.   **Truth Broadcast System** - _"Hijack their own satellite network to broadcast the flat Earth
      truth to every screen on the planet. A signal that can't be ignored."_

---

## 4. Suspicious Pigeon Watch

### Description

_"The common pigeon. Ubiquitous. Ignored. The perfect chassis for a surveillance drone. They
replaced the real birds years ago. Every coo is a data packet. Every flutter of wings is a
repositioning algorithm. They are watching."_

### Game Attributes

```typescript
{
   id: 'suspicious_pigeons',
   name: 'Suspicious Pigeon Watch',
   description: 'Monitor and expose the government\'s robotic pigeon surveillance program that\'s been watching us all along.',
   categories: ['government', 'technology', 'surveillance'],
   baseCost: {
      proofs: new Decimal(1700),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.15),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(1.0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   productionMultiplier: {
      proofs: new Decimal(1.0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   conditions: {
      proofs: new Decimal(0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
      generators: [],
   },
   unlocked: false,
   upgradesIds: [
      'pigeons_bird_watching_equipment',
      'pigeons_government_drone_manual',
      'pigeons_pigeon_behavior_analysis',
      'pigeons_robotic_pigeon_factory',
      'pigeon_surveillance_network',
      'pigeons_anti_pigeon_technology',
      'pigeons_pigeon_whistleblower',
      'pigeons_government_pigeon_training',
      'pigeons_pigeon_communication_decoder',
      'pigeons_underground_pigeon_bunker',
      'pigeons_global_pigeon_network',
      'pigeons_pigeon_truth_exposure',
   ],
}
```

### Balance Reasoning

-  **Base Cost**: 1700 proofs - requires sustained play across all previous generators
-  **Cost Multiplier**: 1.15x - consistent scaling for balanced progression
-  **Base Production**: 1.0 proofs/sec - solid 2.2x improvement over Flat Earth
-  **Unlock Conditions**: 0 proofs - no requirements
-  **Categories**: Government + Technology + Surveillance (introduces surveillance category)

### Upgrades (12 total)

1. **Bird Watching Equipment** - _"Standard bird-watching equipment is enough to spot the anomalies.
   Their flight paths are too perfect, their loitering too intentional. They don't eat, they just
   observe."_
2. **Government Drone Manual** - _"A leaked field manual for the 'Avian Reconnaissance Unit' details
   the drones' inner workings. Their power source is the biggest giveaway."_
3. **Pigeon Behavior Analysis** - _"Log their behavior. You'll find they operate on a repeating loop
   of programmed actions, unlike a real biological entity."_
4. **Robotic Pigeon Factory** - _"The drones are assembled in automated facilities disguised as
   industrial bakeries. We have the address of one in New Jersey."_
5. **Pigeon Surveillance Network** - _"The drones form a mesh network, relaying data from one to
   another until it reaches a central collection node. It's an airborne spy grid."_
6. **Anti-Pigeon Technology** - _"A simple electromagnetic pulse device can temporarily disable the
   drones. They just reboot and fly off, but it proves they're not real."_
7. **Pigeon Whistleblower** - _"A former technician from the program has agreed to talk. He's afraid
   for his life, but his conscience got the better of him."_
8. **Government Pigeon Training** - _"They use a handful of real, trained pigeons to lead the drone
   flocks, making them appear more natural. These 'Judas birds' are the key."_
9. **Pigeon Communication Decoder** - _"The drones communicate via a specific, encrypted frequency.
   If we can crack it, we can see what they see."_
10.   **Underground Pigeon Bunker** - _"A secure location is needed to disassemble and analyze a
      captured drone. We need to reverse-engineer the tech."_
11.   **Global Pigeon Network** - _"This isn't just a local program. It's global. Every major city
      is infested with these bio-mechanical spies. The scale is unbelievable."_
12.   **Pigeon Truth Exposure** - _"Once we have irrefutable proof, we leak it all. A coordinated
      data dump that will make people look at the birds in a whole new light."_

---

## 5. Denver Airport Anomaly Scanner

### Description

_"The 'Denver International Airport' is a monument to their hubris. The sheep see a terminal; we see
a multi-layered bunker complex. The murals are not art; they are prophecies. The demonic horse
statue? A sentinel. We're not looking for lost luggage. We're scanning for the Lizard Lairs
beneath."_

### Game Attributes

```typescript
{
   id: 'denver_airport',
   name: 'Denver Airport Anomaly Scanner',
   description: 'Something weird is under there. Luggage? Or Lizard Lairs?',
   categories: ['government', 'organization', 'hidden-worlds'],
   baseCost: {
      proofs: new Decimal(6500),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.15),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(2.2),
      followers: new Decimal(0.05),
      paranoia: new Decimal(0),
   },
   productionMultiplier: {
      proofs: new Decimal(2.2),
      followers: new Decimal(0.05),
      paranoia: new Decimal(0),
   },
   conditions: {
      proofs: new Decimal(0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
      generators: [],
   },
   unlocked: false,
   upgradesIds: [
      'denver_airport_gargoyle_glyphs',
      'denver_airport_blucifers_signature',
      'denver_airport_nwo_records',
      'denver_airport_murals_deep_dive',
      'denver_airport_subterranean_mapping',
      'denver_airport_lizard_translator',
      'denver_airport_frequency_jammer',
      'denver_airport_employee_interviews',
      'denver_airport_geiger_counter',
      'denver_airport_runway_analysis',
      'denver_airport_quantum_scanner',
      'denver_airport_queen_deed',
   ],
}
```

### Balance Reasoning

-  **Base Cost**: 6500 proofs - requires mastery of all previous generators and significant time
   investment
-  **Cost Multiplier**: 1.15x - consistent scaling for balanced long-term progression
-  **Base Production**: 2.2 proofs/sec & 0.05 followers/sec - Introduces followers resource
   gradually
-  **Unlock Conditions**: 0 proofs - no requirements
-  **Categories**: Introduces 'hidden-worlds' while maintaining government/organization themes

### Upgrades (12 total)

1. **Gargoyle Glyphs Analysis** - _"The gargoyles perched in the terminal aren't just decorative.
   Their positions correspond to runic markers, detailing the entrances to the lower levels. It's a
   map for those who can read it."_
2. **Blucifer's Energy Signature** - _"That horse statue, 'Blucifer,' isn't just terrifying public
   art. It emits a low-frequency field to pacify travelers. We need to analyze its energy signature
   to find a way to counteract it."_
3. **New World Airport Commission Records** - _"The capstone mentions the 'New World Airport
   Commission.' No such organization officially exists. We need to dig into suppressed records to
   expose the signatories and their true allegiance."_
4. **Murals Deep Dive** - _"The murals aren't just bizarre paintings; they're a pictographic
   timeline of the elite's plans for global depopulation and a one-world government. Every panel is
   a confession."_
5. **Subterranean Tunnels Mapping** - _"The official story is a 'failed baggage system.' A ludicrous
   cover for a sprawling underground city. We can use seismic sensors to map the network of tunnels
   they're hiding."_
6. **Lizard People Language Translator** - _"Reports from maintenance workers speak of strange,
   chittering sounds from deep underground. It's not faulty wiring. We need to develop a translator
   for their reptilian language."_
7. **Unusual Frequency Jammer** - _"The entire airport is bathed in specific frequencies to induce
   compliance. A custom jammer will not only block these signals but also reveal the hidden
   communications layered on top of them."_
8. **Ex-Employee Interviews** - _"Construction workers and ex-employees were sworn to secrecy. By
   offering them anonymity and protection, we can piece together firsthand accounts of what they
   were forced to build down there."_
9. **Geiger Counter Readings** - _"The high levels of background radiation aren't from 'granite
   countertops'. They're a byproduct of the exotic power sources used in the subterranean levels. A
   Geiger counter will tell the real story."_
10.   **Swastika-shaped Runway Analysis** - _"The runway layout is not an accident of civil
      engineering. It's a symbol, visible from above, marking the location as a site of power for a
      very specific, very old organization."_
11.   **Quantum Luggage Scanner** - _"Repurpose a standard luggage scanner with quantum tunneling
      technology. It won't just see what's in the bags; it'll phase through the floor to see what's
      moving in the 'baggage tunnels' below."_
12.   **The Queen of England's Property Deed** - _"Persistent rumors claim the Queen of England
      secretly owns property at DIA through shell corporations. Finding that deed would connect the
      British Crown to the coming New World Order."_

---

## 6. Finnish Non-Existence Proofing

### Description

_"'Finland' is the most successful geopolitical hoax in modern history. What normies call a Nordic
country is actually open water, a designated fishing zone split between Russia and Japan since the
Cold War. The 'Finnish' language? Constructed gibberish. Nokia? A front company to legitimize the
phantom state. Every Finn you've met is a crisis actor."_

### Game Attributes

```typescript
{
   id: 'finnish_non_existence',
   name: 'Finnish Non-Existence Proofing',
   description: 'Compiling cartographic, linguistic, and historical anomalies to demonstrate the \'Finland\' construct as a placeholder for Russo-Japanese fishing rights.',
   categories: ['government', 'media-manipulation', 'organization'],
   baseCost: {
      proofs: new Decimal(28000),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.15),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(4.8),
      followers: new Decimal(0.12),
      paranoia: new Decimal(0.1),
   },
   productionMultiplier: {
      proofs: new Decimal(4.8),
      followers: new Decimal(0.12),
      paranoia: new Decimal(0.1),
   },
   conditions: {
      proofs: new Decimal(0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
      generators: [],
   },
   unlocked: false,
   upgradesIds: [
      'finland_cartographic_analysis',
      'finland_nokia_financial_records',
      'finland_linguistic_deconstruction',
      'finland_satellite_imagery_gaps',
      'finland_fishing_rights_treaty',
      'finland_crisis_actor_database',
      'finland_population_census_fraud',
      'finland_educational_propaganda',
      'finland_embassy_shell_operations',
      'finland_cultural_fabrication_unit',
      'finland_deep_state_coordination',
      'finland_revelation_protocol',
   ],
}
```

### Balance Reasoning

-  **Base Cost**: 28000 proofs - follows exponential progression requiring mastery of all previous
   generators
-  **Cost Multiplier**: 1.15x - consistent scaling for balanced long-term progression
-  **Base Production**: 4.8 proofs/sec, 0.12 followers/sec, 0.1 paranoia/sec - Introduces paranoia
   resource gradually
-  **Unlock Conditions**: 0 proofs - no requirements, gated purely by cost
-  **Categories**: Government + Media-manipulation + Organization (international conspiracy themes)

### Upgrades (12 total)

1. **Cartographic Analysis System** - _"Cross-reference historical maps with satellite data. The
   'Finland' landmass appears inconsistently across different mapping agencies. The gaps in their
   story are literally visible from space."_
2. **Nokia Financial Records Audit** - _"Nokia's financial records don't add up for a company
   supposedly from a country with 5.5 million people. The revenue streams point to Russian and
   Japanese shell corporations, not Finnish consumers."_
3. **Linguistic Deconstruction Protocol** - _"Finnish shares no meaningful linguistic roots with
   neighboring languages. It's a constructed language designed to give credibility to the hoax. Even
   the grammar is suspiciously artificial."_
4. **Satellite Imagery Gap Analysis** - _"High-resolution satellite imagery of the 'Finland' region
   shows suspicious pixelation and composite artifacting. They're literally photoshopping a country
   into existence on our maps."_
5. **Russo-Japanese Fishing Rights Treaty** - _"Declassified documents from the 1940s reference a
   secret fishing agreement between Russia and Japan. The coordinates match perfectly with the
   supposed Finnish borders. Coincidence? Hardly."_
6. **Crisis Actor Database** - _"Every 'Finnish' person can be traced back to acting agencies in
   neighboring countries. We're building a comprehensive database of these international operatives
   and their fake backstories."_
7. **Population Census Fraud Investigation** - _"Finland's population statistics are mathematically
   impossible given birth rates, immigration data, and economic output. The numbers are fabricated
   to support the illusion of a functioning nation-state."_
8. **Educational System Propaganda Unit** - _"Schools worldwide teach about 'Finland' as fact. This
   requires a coordinated global education conspiracy. We need to trace the textbook publishers and
   their suspicious funding sources."_
9. **Embassy Shell Operations Analysis** - _"Finnish embassies are staffed by Russian and Japanese
   operatives. By monitoring diplomatic communications, we can expose the true chain of command
   behind the 'Finnish' government facade."_
10.   **Cultural Fabrication Unit** - _"Finnish 'culture' - from saunas to heavy metal - is
      artificially constructed to give the hoax authenticity. Each cultural element can be traced to
      systematic psychological operations designed to fool the masses."_
11.   **Deep State Coordination Network** - _"The Finland hoax requires coordination between
      multiple intelligence agencies, the UN, Google Maps, and countless other institutions. We're
      mapping the entire network responsible for maintaining this lie."_
12.   **Finland Revelation Protocol** - _"Once we have irrefutable proof, we execute a coordinated
      global revelation. Every major news outlet, social media platform, and government database
      simultaneously learns the truth: Finland never existed."_

---

## 7. Great Reset Agenda

### Description

_"Close reading of World Economic Forum publications and stakeholder capitalism manifestos. 'You'll
own nothing and be happy' isn't a meme; it's a mission statement from the people who think they own
you already."_

### Game Attributes

```typescript
{
   id: 'great_reset_agenda',
   name: 'Great Reset Agenda Analysis',
   description: 'Analyze WEF documents to expose the plan for a new world order where you own nothing.',
   categories: ['organization', 'government', 'media-manipulation'],
   baseCost: {
      proofs: new Decimal(125000),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.15),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(10.5),
      followers: new Decimal(0.28),
      paranoia: new Decimal(0.2),
   },
   productionMultiplier: {
      proofs: new Decimal(10.5),
      followers: new Decimal(0.28),
      paranoia: new Decimal(0.2),
   },
   conditions: {
      proofs: new Decimal(0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
      generators: [],
   },
   unlocked: false,
   upgradesIds: [
      'great_reset_wef_publication_analysis',
      'great_reset_digital_currency_tracking',
      'great_reset_insect_protein_propaganda',
      'great_reset_property_abolition_blueprint',
      'great_reset_social_credit_system',
      'great_reset_own_nothing_simulation',
      'great_reset_davos_infiltration',
      'great_reset_great_narrative_deconstruction',
      'great_reset_fourth_industrial_revolution_tech',
      'great_reset_global_leader_puppet_strings',
      'great_reset_personal_carbon_footprint_hoax',
      'great_reset_happiness_doctrine',
   ],
}
```

### Balance Reasoning

-  **Base Cost**: 125,000 proofs - A significant jump, requiring a well-developed network of
   lower-tier generators to afford.
-  **Cost Multiplier**: 1.15x - Maintains the consistent scaling curve for balanced long-term play.
-  **Base Production**: 10.5 proofs/sec, 0.28 followers/sec, 0.2 paranoia/sec - A substantial ~2.2x
   increase in production, making it a valuable mid-game generator and ramping up paranoia.
-  **Unlock Conditions**: 0 proofs - Gated purely by its high cost, rewarding players who have
   optimized their economy.
-  **Categories**: Focuses on organization and government themes, reinforcing the idea of a
   top-down, planned conspiracy.

### Upgrades (12 total)

1. **WEF Publication Analysis** - _"The official documents are filled with doublespeak. 'Stakeholder
   capitalism' is just feudalism with better branding. We need to decode their manifestos."_
2. **Digital Currency Tracking** - _"They want to replace cash with a programmable digital currency.
   One that can be turned off if you buy the 'wrong' kind of products. We must map their blockchain
   infrastructure."_
3. **Insect Protein Propaganda** - _"The push for 'sustainable' insect protein isn't about the
   environment. It's about conditioning the masses to accept nutrient paste while the elite eat
   steak. We're tracking the supply chain."_
4. **Property Abolition Blueprint** - _"The goal is simple: abolish private property for the
   commoner. We're analyzing zoning laws and land ownership databases to find the legislative
   vectors they're using."_
5. **Social Credit Score System** - _"They are building a global social credit system, tying your
   access to services to your compliance with their narrative. We have to expose the algorithm."_
6. **The 'Own Nothing' Simulation** - _"We'll run simulations based on their economic models. The
   outcome is always the same: serfdom. These models are not predictions, they are plans."_
7. **Davos Meeting Infiltration** - _"An operative inside the annual WEF meeting in Davos. They
   won't be discussing policy, just sipping champagne and finalizing our collective future."_
8. **The Great Narrative Deconstruction** - _"They speak of a 'Great Narrative'. It's the story they
   will tell to justify the reset. We must deconstruct it before it becomes history."_
9. **Fourth Industrial Revolution Tech** - _"They champion AI, IoT, and genetic engineering. Not for
   progress, but for control. We're investigating the tech companies in their pocket."_
10.   **Global Leader Puppet Strings** - _"The WEF's 'Young Global Leaders' program has placed
      operatives in governments worldwide. We're mapping this network of puppets."_
11.   **Personal Carbon Footprint Hoax** - _"The idea of a 'personal carbon footprint' was created
      to shift blame from corporations to individuals. It's the ultimate psychological trick to make
      you police yourself."_
12.   **The Happiness Doctrine** - _"The promise of 'and you'll be happy' is the most sinister part.
      It's the promise of a drugged, compliant populace that has forgotten what freedom feels like.
      We must develop a counter-narrative."_

---

## 8. 5G Health Impact

### Description

_"They're rolling it out everywhere. Little white boxes on every street corner. They call it
'progress.' Faster downloads for your mindless scrolling. But it's a weapon, hiding in plain sight.
Millimeter waves that cook you from the inside out, disrupt your cells, cloud your mind. The 'safety
standards' are a joke, written by the same telecom giants getting rich off our declining health.
It's not about speed. It's about control."_

### Game Attributes

```typescript
{
   id: '5g_health_impact',
   name: '5G Health Impact Research',
   description: "Collating non-industry-funded research on millimeter wave exposure and potential biological effects. The official safety reports conveniently overlook inconvenient data. We're looking at the data they bury.",
   categories: ['technology', 'health', 'media-manipulation'],
   baseCost: {
      proofs: new Decimal(550000),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.15),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(23),
      followers: new Decimal(0.65),
      paranoia: new Decimal(0.4),
   },
   productionMultiplier: {
      proofs: new Decimal(23),
      followers: new Decimal(0.65),
      paranoia: new Decimal(0.4),
   },
   conditions: {
      proofs: new Decimal(0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
      generators: [],
   },
   unlocked: false,
   upgradesIds: [
      '5g_health_impact_emf_meter',
      '5g_health_impact_faraday_cage',
      '5g_health_impact_leaked_documents',
      '5g_health_impact_bio_resonance_analysis',
      '5g_health_impact_dead_zone_mapping',
      '5g_health_impact_peer_review_network',
      '5g_health_impact_tower_teardown',
      '5g_health_impact_animal_dieoff_correlation',
      '5g_health_impact_psychotronic_modulation',
      '5g_health_impact_graphene_oxide_link',
      '5g_health_impact_global_grid_mapping',
      '5g_health_impact_counter_frequency_emitter',
   ],
}
```

### Balance Reasoning

-  **Base Cost**: 550,000 proofs - This continues the exponential cost curve, making it a
   significant investment for the mid-to-late game.
-  **Cost Multiplier**: 1.15x - Maintains the consistent scaling for balanced long-term progression.
-  **Base Production**: 23 proofs/sec, 0.65 followers/sec, 0.4 paranoia/sec - Provides a ~2.2x
   increase over the previous generator, making it a powerful but costly upgrade while increasing
   paranoia.
-  **Unlock Conditions**: 0 proofs - Gated purely by cost, maintaining player freedom in
   progression.
-  **Categories**: Introduces the 'health' category, diversifying the types of conspiracies the
   player can investigate.

### Upgrades (12 total)

1. **EMF Meter Purchase** - _"Your first step is to see the invisible enemy. A commercial EMF meter
   is enough to show you the radiation soup you're living in. The readings near a 5G tower will
   be... informative."_
2. **Faraday Cage Construction** - _"You can't fight what you can't block. Lining your research
   space with a Faraday cage is essential to create a baseline, a 'clean' environment to measure the
   incoming assault."_
3. **Leaked Industry Documents** - _"We've got a source inside a major telecom. He's feeding us
   internal safety studies that were buried for a reason. The data they have versus the data they
   publish are two very different things."_
4. **Biological Resonance Analysis** - _"It's not about heat. It's about frequency. Certain
   millimeter wave frequencies resonate with human cell structures, causing disruption. We're
   building a model to predict these resonant peaks."_
5. **Urban 'Dead Zone' Mapping** - _"Some people are getting sick, but only in certain areas. We're
   mapping these sickness clusters and overlaying them with 5G tower locations. The pattern is
   undeniable."_
6. **Independent Peer Review Network** - _"The 'official' science is bought and paid for. We're
   creating a network of independent, non-industry-funded scientists to review the data. They can't
   suppress all of them."_
7. **Deactivated Tower Teardown** - _"We've located a tower that's been 'deactivated' for
   maintenance. It's our chance to get inside, pull apart the hardware, and see what technology
   they're *really* packing in there."_
8. **Bird & Bee Die-off Correlation** - _"They're not just targeting us. Reports of mass bird and
   bee deaths correlate perfectly with 5G rollouts in major cities. Animals are more sensitive.
   They're the canaries in the coal mine."_
9. **Psychotronic Frequency Modulation** - _"It's not just physical health. The frequencies can be
   modulated to affect mood and cognition. 'Brain fog' isn't a symptom, it's a feature. We're
   working on decoding these modulations."_
10.   **5G-to-Graphene Oxide Hypothesis** - _"A theory gaining traction in our circles. Could the
      signals be activating dormant graphene oxide introduced into the body through other...
      vectors? We need to investigate the link."_
11.   **Global Frequency Harmonization Grid** - _"The towers are all connected, forming a global
      grid. They can harmonize their frequencies to create massive 'hot spots' of radiation. We need
      to map their network topology."_
12.   **Counter-Frequency Emitter** - _"Based on our research, we've developed a device that emits a
      counter-frequency, creating a localized 'safe zone' by nullifying the 5G waves. It's a shield
      against the invisible storm."_

---

## 9. Hidden Symbology in Corporate Logos

### Description

_"Identifying occult and Masonic symbols embedded in ubiquitous branding. It's not just marketing;
it's constant, low-level sigil magic reinforcing their dominance in the collective psyche."_

### Game Attributes

```typescript
{
   id: 'corporate_logo_symbology',
   name: 'Hidden Symbology in Corporate Logos',
   description: 'Decode the occult symbols hidden in plain sight on corporate logos. It\'s not branding; it\'s a global psychological operation.',
   categories: ['media-manipulation', 'organization', 'hidden-worlds'],
   baseCost: {
      proofs: new Decimal(2500000),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.15),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(51),
      followers: new Decimal(1.5),
      paranoia: new Decimal(0.8),
   },
   productionMultiplier: {
      proofs: new Decimal(51),
      followers: new Decimal(1.5),
      paranoia: new Decimal(0.8),
   },
   conditions: {
      proofs: new Decimal(0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
      generators: [],
   },
   unlocked: false,
   upgradesIds: [
      'corporate_logo_sacred_geometry',
      'corporate_logo_color_analysis',
      'corporate_logo_subliminal_detector',
      'corporate_logo_gematria',
      'corporate_logo_font_psychology',
      'corporate_logo_sigil_grimoire',
      'corporate_logo_mascot_deconstruction',
      'corporate_logo_jungian_mapping',
      'corporate_logo_ritual_analysis',
      'corporate_logo_debranding_goggles',
      'corporate_logo_egregore_connection',
      'corporate_logo_counter_sigil',
   ],
}
```

### Balance Reasoning

-  **Base Cost**: 2,500,000 proofs - This follows the established exponential cost curve (~4.5x
   increase), positioning it as a late-game generator requiring significant investment.
-  **Cost Multiplier**: 1.15x - Maintains the consistent scaling for balanced long-term progression.
-  **Base Production**: 51 proofs/sec, 1.5 followers/sec, 0.8 paranoia/sec - Provides a ~2.2x
   increase in proofs, a ~2.3x increase in followers, and a 2x increase in paranoia, consistent with
   the scaling of previous tiers.
-  **Unlock Conditions**: 0 proofs - Gated purely by cost to maintain player freedom.
-  **Categories**: `media-manipulation`, `organization`, and `hidden-worlds` reinforce the themes of
   information control, secret societies, and occult influences.

### Upgrades (12 total)

1. **Sacred Geometry Ruler** - _"It starts with geometry. A simple ruler and a compass are all you
   need to uncover the sacred ratios and Masonic patterns hidden in the designs of the most
   'innocuous' brands."_
2. **Color Palette Analysis** - _"The color choices aren't aesthetic. They're alchemical. We're
   analyzing the specific hex codes to reveal their connection to hermetic principles and elemental
   manipulation."_
3. **Subliminal Messaging Detector** - _"Flickering images, hidden words, suggestive shapes. We're
   developing software to scan logos frame-by-frame, revealing the subliminal commands they flash at
   you millions of times a day."_
4. **Brand Name Gematria** - _"The names aren't random. Using ancient numerology (Gematria), we can
   decode the true meaning and intent behind the brand names. The numbers don't lie."_
5. **Font Psychology Database** - _"The fonts are chosen to evoke specific emotional responses.
   We're compiling a database of corporate typography and its links to psychological manipulation
   techniques developed by Tavistock."_
6. **Sigil Magic Grimoire** - _"A recovered grimoire details how to create and charge sigils for
   influence. The overlap with modern logo design is... perfect. They are casting spells on a global
   scale."_
7. **Corporate Mascot Deconstruction** - _"The friendly mascots are archetypal servitors. We're
   unmasking their occult origins, from jovial food icons to cartoon animals, revealing the entities
   they truly represent."_
8. **Jungian Archetype Mapping** - _"They tap directly into the collective unconscious. By mapping
   logos to Jungian archetypes, we can see how they hijack our primal symbols to create brand
   loyalty."_
9. **Global Branding Ritual Analysis** - _"Product launches and Super Bowl ads aren't just for
   sales. They are coordinated global rituals designed to energize the corporate sigils. We're
   tracking their astrological timings."_
10.   **De-branding Goggles** - _"Specialized eyewear that uses augmented reality to strip away the
      logos, revealing the raw, unfiltered product underneath. It breaks the spell, one consumer at
      a time."_
11.   **Logo-to-Egregore Connection** - _"Each major brand has spawned an 'egregore' - a psychic
      entity fed by consumer attention. We're learning to trace the flow of energy from the logo to
      these powerful thoughtforms."_
12.   **Memetic Counter-Sigil** - _"The only way to fight a symbol is with another symbol. We are
      designing a memetic counter-sigil, a viral symbol that neutralizes the effects of corporate
      branding on contact. A vaccine for the mind."_

---

## 10. Gates Philanthropic Impacts

### Description

_"Forensic accounting of Gates Foundation grants versus stated humanitarian goals, cross-referenced
with agricultural and pharmaceutical patent acquisitions. 'Saving the world' apparently involves a
lot of proprietary tech and population trend analysis."_

### Game Attributes

```typescript
{
   id: 'gates_philanthropic_impacts',
   name: 'Gates Philanthropic Impacts Analysis',
   description: "Analyze the Gates Foundation's philanthropic activities to uncover a web of patents, data mining, and population control disguised as charity.",
   categories: ['organization', 'government', 'health', 'technology'],
   baseCost: {
      proofs: new Decimal(11500000),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.15),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(112),
      followers: new Decimal(3.5),
      paranoia: new Decimal(1.6),
   },
   productionMultiplier: {
      proofs: new Decimal(112),
      followers: new Decimal(3.5),
      paranoia: new Decimal(1.6),
   },
   conditions: {
      proofs: new Decimal(0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
      generators: [],
   },
   unlocked: false,
   upgradesIds: [
      'gates_grant_auditor',
      'gates_patent_tracker',
      'gates_agricultural_impact',
      'gates_pharma_synergy',
      'gates_population_data_mining',
      'gates_educational_curriculum',
      'gates_seed_vault_intel',
      'gates_digital_id_initiative',
      'gates_weather_modification_link',
      'gates_global_health_database',
      'gates_policy_influence_map',
      'gates_savior_complex_deconstruction',
   ],
}
```

### Balance Reasoning

-  **Base Cost**: 11,500,000 proofs - This continues the established exponential growth (~4.6x the
   previous generator), positioning it firmly in the late-game and requiring a robust economic
   engine.
-  **Cost Multiplier**: 1.15x - Maintains the consistent scaling for balanced long-term progression.
-  **Base Production**: 112 proofs/sec, 3.5 followers/sec, 1.6 paranoia/sec - Provides a ~2.2x
   increase in proofs, a ~2.3x increase in followers, and a 2x increase in paranoia, consistent with
   the scaling of previous tiers, making it a critical asset for pushing into the game's later
   stages.
-  **Unlock Conditions**: 0 proofs - Gated purely by cost to maintain player freedom in progression
   strategy.
-  **Categories**: `organization`, `government`, `health`, and `technology` connect this conspiracy
   to major themes of global control, health manipulation, and technological overreach.

### Upgrades (12 total)

1. **Grant Forensic Auditor** - _"Follow the money. Not where they say it goes, but where it
   *actually* lands. You'll find a labyrinth of NGOs and shell corporations that leads right back to
   their own portfolio."_
2. **Patent Portfolio Tracker** - _"Every humanitarian crisis seems to coincide with a new patent
   filing from a company they fund. It's not charity, it's vertical integration on a global scale."_
3. **Agricultural Impact Analysis** - _"They call it 'sustainable agriculture'. We call it creating
   a dependency on patented seeds and chemicals. The goal isn't to feed the world, it's to own the
   food supply."_
4. **Pharmaceutical Synergy Map** - _"The vaccines they fund often require treatments for side
   effects produced by... other companies they fund. It's a self-sustaining business model disguised
   as public health."_
5. **Population Data Mining** - _"Their health initiatives are the perfect cover for mass data
   collection. They're not tracking diseases; they're tracking you. Demographics, biometrics,
   compliance rates... it's all in a database."_
6. **Educational Curriculum Influence** - _"They fund educational programs to 'improve learning'. A
   closer look at the curriculum shows a subtle rewrite of history and science to fit their
   globalist narrative. Indoctrination starts early."_
7. **Svalbard Seed Vault Intel** - _"Why would a tech billionaire be so interested in a seed vault
   near the North Pole? It's not a backup for humanity; it's a genetic library to be leveraged after
   the current ecosystem is... 'optimized'."_
8. **Digital ID Initiative (ID2020)** - _"The push for a global digital ID, tied to your vaccination
   status and financial records. It's not for convenience. It's the infrastructure for the social
   credit system they're beta testing."_
9. **Weather Modification Connection** - _"Dig deep enough, and you find funding for atmospheric
   geoengineering research. The droughts and famines they 'solve' may just be problems they helped
   create."_
10.   **Global Health Database Access** - _"Their 'global health' network is the most comprehensive
      surveillance system ever created. Gaining back-end access means we can see who they're really
      targeting with their 'interventions'."_
11.   **Policy Influence Mapping** - _"Through strategic donations, they've placed allies in key
      positions within governments and global health organizations. It's not lobbying; it's a silent
      takeover."_
12.   **The 'Savior Complex' Deconstruction** - _"The final layer of the onion. The entire
      philanthropic persona is a meticulously crafted psychological operation to make the public see
      a savior, not a monopolist. We need to shatter the illusion."_

---

## Progression Timeline

### Optimal Play Scenario (Active Clicking + Generator Purchases)

1. **0-60 seconds**: Click to 15 proofs, buy first chemtrails generator
2. **60-300 seconds**: Click + chemtrails production to reach 100 proofs, buy Michael Jackson
3. **300-900 seconds**: Build generators and continue clicking to reach 500 proofs, buy Flat Earth
4. **900-2000 seconds**: Generate through combined generators to reach 1700 proofs, buy Suspicious
   Pigeon Watch
5. **2000-4500 seconds**: Generate 6500 proofs through all generators, buy Denver Airport Anomaly
   Scanner
6. **4500-8000 seconds**: Generate 28000 proofs through all generators, buy Finnish Non-Existence
   Proofing
7. **8000-15000 seconds**: Generate 125000 proofs through all generators, buy Great Reset Agenda

### Idle Play Scenario (Minimal Clicking)

1. **0-180 seconds**: Click to 15 proofs, buy chemtrails
2. **180-2000 seconds**: Let chemtrails generate passively to buy Michael Jackson at 100 proofs
3. **2000-5000 seconds**: Use chemtrails + Michael Jackson to reach 500 proofs for Flat Earth
4. **5000-12000 seconds**: Generate 1700 proofs for Suspicious Pigeon Watch through passive income
5. **12000-25000 seconds**: Generate 6500 proofs for Denver Airport through all generators
6. **25000-45000 seconds**: Generate 28000 proofs for Finnish Non-Existence through all generators
7. **45000-80000 seconds**: Generate 125000 proofs for Great Reset Agenda through all generators

## Balance Principles Applied

### Cost Scaling

-  **Adjusted scaling**: 15 → 100 → 500 → 1700 → 6500 → 28000 → 125000 (exponential curve
   compensating for removed unlock gates)
-  **1.15x cost multiplier**: Meaningful individual purchase scaling for long-term progression
-  **No followers cost**: Introduced gradually in later generators

### Production Scaling

-  **~2.2x improvement per tier**: 0.1 → 0.2 → 0.45 → 1.0 → 2.2 → 4.8 → 10.5 (modest, sustainable
   scaling)
-  **Conservative base values**: Leaves room for upgrades to provide meaningful multipliers
-  **Followers introduced gradually**: 0.05/sec starting at generator 5, 0.12/sec at generator 6,
   0.28/sec at generator 7
-  **Paranoia introduced gradually**: 0.1/sec starting at generator 6, 0.2/sec at generator 7

### Unlock Conditions

-  **All generators**: 0 proofs/0 followers/0 paranoia - no unlock gates
-  **Progression gating**: Now entirely through base cost requirements
-  **Simple access**: Players can save up to skip generators if desired, but economics discourage
   this

### Categories Distribution

-  **Government**: 7/7 generators (common conspiracy theme)
-  **Media-manipulation**: 4/7 generators (information control)
-  **Technology**: 2/7 generators (scientific skepticism)
-  **Organization**: 4/7 generators (secret societies)
-  **Surveillance**: 1/7 generators (introduces surveillance theme)
-  **Hidden-worlds**: 1/7 generators (introduces hidden realm concepts)

### Upgrade Design Philosophy

-  **12 upgrades per generator**: Provides sustained long-term progression
-  **Conservative base values**: Upgrades can provide 2x-10x multipliers without breaking balance
-  **Humorous descriptions**: Maintains satirical conspiracy tone throughout
-  **Conspiracy escalation**: Each upgrade builds on the original theory logically
-  **Variety of effects**: Mix of production boosts, cost reductions, and special mechanics

This rebalanced progression emphasizes:

1. **Active engagement**: Clicking remains valuable throughout early game
2. **Multiple generator relevance**: Players need to invest in several generators, not just the
   latest
3. **Upgrade significance**: Conservative base values make upgrades feel impactful
4. **Sustainable scaling**: Mathematical curves designed for 20+ generator long-term progression
5. **Resource management**: Followers and paranoia introduced gradually to add complexity over time

This progression provides a smooth learning curve while maintaining the satirical conspiracy theme
throughout the early game experience, with room for 14+ more generators in the full game
progression.
