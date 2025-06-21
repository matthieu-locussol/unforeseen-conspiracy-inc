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
      proofs: new Decimal(25),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.08),
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

-  **Base Cost**: 25 proofs - achievable in ~25 clicks (more meaningful progression)
-  **Cost Multiplier**: 1.08x - gentle scaling for long-term progression
-  **Base Production**: 0.1 proofs/sec - 10x slower than clicking, but passive
-  **No followers/paranoia**: Introduced later in the game

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
      proofs: new Decimal(150),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.09),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(0.8),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   productionMultiplier: {
      proofs: new Decimal(0.8),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   conditions: {
      proofs: new Decimal(300),
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

-  **Base Cost**: 150 proofs - requires ~2-3 minutes of active play
-  **Cost Multiplier**: 1.09x - gentle scaling for long-term progression
-  **Base Production**: 0.8 proofs/sec - 8x better than chemtrails
-  **Unlock Conditions**: 300 proofs - achievable with chemtrails

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
      proofs: new Decimal(1.1),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(3.0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   productionMultiplier: {
      proofs: new Decimal(3.0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   conditions: {
      proofs: new Decimal(1000),
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

-  **Base Cost**: 500 proofs - requires ~5-8 minutes of play
-  **Cost Multiplier**: 1.1x - moderate scaling for mid-game
-  **Base Production**: 3.0 proofs/sec - 3.75x better than Michael Jackson
-  **Unlock Conditions**: 1000 proofs - achievable with previous generators

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
      proofs: new Decimal(1200),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.11),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(8.0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   productionMultiplier: {
      proofs: new Decimal(8.0),
      followers: new Decimal(0),
      paranoia: new Decimal(0),
   },
   conditions: {
      proofs: new Decimal(2500),
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

-  **Base Cost**: 1200 proofs - requires ~8-12 minutes of play with previous generators
-  **Cost Multiplier**: 1.11x - moderate scaling for mid-game progression
-  **Base Production**: 8.0 proofs/sec - 2.67x better than Flat Earth
-  **Unlock Conditions**: 2500 proofs - achievable with previous generators
-  **Categories**: Government + Technology + Surveillance (new category introduction)

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
      proofs: new Decimal(2800),
      followers: new Decimal(0),
   },
   costMultiplier: {
      proofs: new Decimal(1.12),
      followers: new Decimal(0),
   },
   baseProduction: {
      proofs: new Decimal(20),
      followers: new Decimal(0.1),
      paranoia: new Decimal(0),
   },
   productionMultiplier: {
      proofs: new Decimal(20),
      followers: new Decimal(0.1),
      paranoia: new Decimal(0),
   },
   conditions: {
      proofs: new Decimal(6000),
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

-  **Base Cost**: 2800 proofs - requires ~15-20 minutes of play
-  **Cost Multiplier**: 1.12x - continued moderate scaling
-  **Base Production**: 20 proofs/sec & 0.1 followers/sec - Introduces the 'followers' resource
-  **Unlock Conditions**: 6000 proofs - achievable with the previous four generators
-  **Categories**: Introduces 'hidden-worlds' to broaden conspiracy themes

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

## Progression Timeline

### Optimal Play Scenario (Active Clicking + Generator Purchases)

1. **0-60 seconds**: Click to 25 proofs, buy first chemtrails generator
2. **60-180 seconds**: Click + chemtrails production to 150 proofs
3. **180-240 seconds**: Buy Michael Jackson generator, continue clicking
4. **240-600 seconds**: Build up to 300 proofs, unlock Michael Jackson
5. **600-1200 seconds**: Generate 1000 proofs, unlock Flat Earth
6. **1200-2400 seconds**: Generate 2500 proofs, unlock Suspicious Pigeon Watch
7. **2400-3600 seconds**: Generate 6000 proofs, unlock Denver Airport Anomaly Scanner

### Idle Play Scenario (Minimal Clicking)

1. **0-120 seconds**: Click to 25 proofs, buy chemtrails
2. **120-1200 seconds**: Let chemtrails generate passively
3. **1200-2400 seconds**: Unlock Michael Jackson through passive generation
4. **2400-4800 seconds**: Unlock Flat Earth through passive generation
5. **4800-9600 seconds**: Unlock Suspicious Pigeon Watch through passive generation
6. **9600-14400 seconds**: Unlock Denver Airport Anomaly Scanner through passive generation

## Balance Principles Applied

### Cost Scaling

-  **1.08x → 1.09x → 1.1x → 1.11x → 1.12x**: Very gentle scaling for long-term progression
-  **No followers cost**: Introduced much later in the game

### Production Scaling

-  **8x improvement per tier**: Clear progression milestones
-  **No followers/paranoia**: Introduced around generators 4-6
-  **Conservative scaling**: Designed for 20+ generator progression

### Unlock Conditions

-  **Proofs**: 0 → 300 → 1000 → 2500 → 6000 (2.5x scaling)
-  **No followers/paranoia requirements**: Prevents early-game complexity
-  **Simple progression**: Focus on proofs only for early game

### Categories Distribution

-  **Government**: 5/5 generators (common conspiracy theme)
-  **Media-manipulation**: 2/5 generators (information control)
-  **Technology**: 2/5 generators (scientific skepticism)
-  **Organization**: 2/5 generators (secret societies)
-  **Surveillance**: 1/5 generators (new category introduction)
-  **Hidden-worlds**: 1/5 generators (new category introduction)

### Upgrade Design Philosophy

-  **12 upgrades per generator**: Provides long-term progression
-  **Humorous descriptions**: Maintains satirical tone
-  **Conspiracy escalation**: Each upgrade builds on the original theory
-  **Variety of effects**: Mix of production, cost reduction, and special abilities
-  **Cultural references**: Ties into the original conspiracy themes

This progression provides a smooth learning curve while maintaining the satirical conspiracy theme
throughout the early game experience, with room for 17+ more generators in the full game
progression.
