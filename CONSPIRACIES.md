# Conspiracies - Unforeseen Conspiracy Inc.

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

_"Those white streaks in the sky aren't just contrails from airplanes - they're government chemicals
being sprayed on us to control our minds! Wake up, sheeple!"_

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

1. **Binoculars Upgrade** - _"High-powered binoculars to spot the chemtrail planes from miles away.
   The government thinks we can't see them, but we can!"_
2. **Weather App Conspiracy** - _"Your weather app is actually a government tool to track who's
   looking at the sky. Time to go analog!"_
3. **Aluminum Hat Mk.I** - _"Basic aluminum protection against mind control chemicals. It's not
   paranoia if they're really spraying you!"_
4. **Air Quality Monitor** - _"Detect the invisible chemicals in the air. Spoiler alert: they're
   everywhere!"_
5. **Government Contacts** - _"You've got a cousin who works at the post office who knows a guy who
   knows a guy in the FAA. Trust the process!"_
6. **Whistleblower Network** - _"Former airport workers, disgruntled pilots, and people who 'just
   know things' are now your informants."_
7. **Chemical Analysis Kit** - _"Test the rainwater for government chemicals. Warning: results may
   cause existential crisis."_
8. **Satellite Tracking** - _"Track the chemtrail planes using 'public' satellite data. They can't
   hide from space!"_
9. **Underground Bunker** - _"Your own personal shelter from the chemical rain. Stocked with canned
   food and conspiracy theories."_
10.   **Mind Control Resistance** - _"Years of exposure have built up your immunity to government
      mind control. Or maybe that's what they want you to think..."_
11.   **Global Chemtrail Map** - _"Track chemtrail patterns worldwide. The truth is written in the
      sky!"_
12.   **Anti-Chemtrail Device** - _"Your homemade device that 'neutralizes' chemtrails. Science
      can't explain why it works, but it totally does!"_

---

## 2. Michael Jackson Clone Conspiracy

### Description

_"Michael Jackson was replaced by a clone in the early 2000s! The real MJ is still alive, but the
government has been using his clone to control the masses through music. Other celebrities have been
cloned too - but we can't reveal their names yet..."_

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

1. **Clone Detection Kit** - _"Advanced equipment to detect subtle differences between the real MJ
   and his clone. The clone has slightly different fingerprints!"_
2. **Voice Pattern Analysis** - _"Analyze MJ's voice patterns over the years. The clone's voice has
   subtle differences that only experts can detect."_
3. **Plastic Surgery Evidence** - _"The 'plastic surgery' was actually clone integration procedures.
   They were preparing the clone to look more like the real MJ."_
4. **Government Cloning Lab** - _"Secret government facility where celebrity clones are created.
   Located deep underground in Nevada."_
5. **Celebrity Clone Network** - _"MJ's clone is part of a larger network of celebrity clones. Other
   stars have been replaced too, but we can't reveal their names yet."_
6. **Music Mind Control** - _"The clone's music contains subliminal messages to control the masses.
   That's why his later songs sound 'different'."_
7. **Underground Real MJ** - _"The real MJ is living in an underground bunker, creating music that
   will one day expose the truth about the cloning program."_
8. **Clone Behavioral Analysis** - _"Study the clone's behavior patterns. Real MJ would never have
   done that weird interview with Martin Bashir!"_
9. **Government Coverup Team** - _"Special agents assigned to maintain the clone's cover story. They
   control the media narrative about MJ."_
10.   **Clone Aging Technology** - _"The clone ages differently than the real MJ would have. That's
      why he looked so different in his later years."_
11.   **Celebrity Replacement Program** - _"The government has been systematically replacing
      celebrities with clones for decades. MJ was just the most famous case."_
12.   **Truth Serum Formula** - _"A special formula that can force clones to reveal their true
      nature. The real MJ helped develop it before he was replaced."_

---

## 3. Flat Earth Theory

### Description

_"The Earth isn't a globe - it's flat! NASA is a Hollywood studio, and all the space photos are CGI.
The truth has been hidden for centuries by the global elite!"_

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

1. **Ice Wall Expedition** - _"The Antarctic ice wall is real! It's 150 feet tall and guarded by
   government agents. Time to climb it!"_
2. **NASA Studio Access** - _"NASA is just a Hollywood studio in California. All the 'space
   missions' are filmed on sound stages."_
3. **Antarctic Treaty Breach** - _"The Antarctic Treaty is just a cover to keep people away from the
   edge of the world. We're going anyway!"_
4. **Gravity Hoax Exposure** - _"Gravity doesn't exist! It's just density and buoyancy. The
   government made up gravity to hide the truth!"_
5. **Satellite Deception** - _"Satellites are just balloons with cameras. That's why they 'fall'
   back to Earth when they 'malfunction'."_
6. **Globe Manufacturing Plant** - _"There's a secret factory making all the globes to perpetuate
   the lie. We found it!"_
7. **Round Earth Propaganda** - _"The education system is brainwashing children with fake globes.
   Time to infiltrate the schools!"_
8. **Flat Map Cartography** - _"Create the first accurate flat Earth map. The UN logo is actually
   the real map - they're not even hiding it!"_
9. **Underworld Exploration** - _"The Earth is hollow! There are civilizations living inside the
   flat Earth. Time to dig down!"_
10.   **Sky Dome Technology** - _"The sky is actually a dome with stars painted on it. The sun and
      moon are just lights on the dome."_
11.   **Global Elite Network** - _"The global elite know the Earth is flat and are keeping it
      secret. Time to expose their network!"_
12.   **Truth Broadcast System** - _"Set up a worldwide network to broadcast the flat Earth truth.
      The internet is our weapon!"_

---

## 4. Suspicious Pigeon Watch

### Description

_"Those pigeons you see every day? They're not real birds - they're government surveillance drones!
The government has been replacing real pigeons with robotic spies to monitor our every move. Wake
up, people! Those 'birds' are watching you right now!"_

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

1. **Bird Watching Equipment** - _"High-powered binoculars and cameras to document the suspicious
   behavior of 'pigeons.' Notice how they never actually eat bread crumbs? Robots don't need food!"_
2. **Government Drone Manual** - _"A leaked manual from a 'former' government employee shows how to
   identify robotic pigeons. The real giveaway? They don't poop like real birds!"_
3. **Pigeon Behavior Analysis** - _"Study the movement patterns of 'pigeons.' Real birds don't fly
   in perfect formation or hover suspiciously outside windows for hours!"_
4. **Robotic Pigeon Factory** - _"Secret government facility where robotic pigeons are manufactured.
   Located in an abandoned warehouse in New Jersey. We have the coordinates!"_
5. **Pigeon Surveillance Network** - _"The pigeons are part of a massive surveillance network. Each
   'bird' has a unique ID and reports back to a central monitoring station."_
6. **Anti-Pigeon Technology** - _"Developed special devices to jam the pigeon drones' signals. They
   start malfunctioning and fly in circles when you activate it!"_
7. **Pigeon Whistleblower** - _"A 'former' government pigeon technician has come forward with
   evidence. He's been living in hiding since exposing the program."_
8. **Government Pigeon Training** - _"The government has been training real pigeons to work with the
   robotic ones. It's a hybrid surveillance system - part bird, part machine!"_
9. **Pigeon Communication Decoder** - _"Developed technology to intercept the signals between pigeon
   drones and their control center. They're transmitting everything they see!"_
10.   **Underground Pigeon Bunker** - _"Your secret base where you analyze captured pigeon drones.
      The walls are lined with aluminum foil to block their surveillance signals."_
11.   **Global Pigeon Network** - _"The pigeon surveillance program is worldwide! Every major city
      has its own network of robotic pigeons. The truth is everywhere!"_
12.   **Pigeon Truth Exposure** - _"Launch a massive campaign to expose the pigeon surveillance
      program. Billboards, social media, and public demonstrations. The pigeons can't stop us all!"_

---

## Progression Timeline

### Optimal Play Scenario (Active Clicking + Generator Purchases)

1. **0-60 seconds**: Click to 25 proofs, buy first chemtrails generator
2. **60-180 seconds**: Click + chemtrails production to 150 proofs
3. **180-240 seconds**: Buy Michael Jackson generator, continue clicking
4. **240-600 seconds**: Build up to 300 proofs, unlock Michael Jackson
5. **600-1200 seconds**: Generate 1000 proofs, unlock Flat Earth
6. **1200-2400 seconds**: Generate 2500 proofs, unlock Suspicious Pigeon Watch

### Idle Play Scenario (Minimal Clicking)

1. **0-120 seconds**: Click to 25 proofs, buy chemtrails
2. **120-1200 seconds**: Let chemtrails generate passively
3. **1200-2400 seconds**: Unlock Michael Jackson through passive generation
4. **2400-4800 seconds**: Unlock Flat Earth through passive generation
5. **4800-9600 seconds**: Unlock Suspicious Pigeon Watch through passive generation

## Balance Principles Applied

### Cost Scaling

-  **1.08x → 1.09x → 1.1x → 1.11x**: Very gentle scaling for long-term progression
-  **No followers cost**: Introduced much later in the game

### Production Scaling

-  **8x improvement per tier**: Clear progression milestones
-  **No followers/paranoia**: Introduced around generators 4-6
-  **Conservative scaling**: Designed for 20+ generator progression

### Unlock Conditions

-  **Proofs**: 0 → 300 → 1000 → 2500 (2.5x scaling)
-  **No followers/paranoia requirements**: Prevents early-game complexity
-  **Simple progression**: Focus on proofs only for early game

### Categories Distribution

-  **Government**: 4/4 generators (common conspiracy theme)
-  **Media-manipulation**: 2/4 generators (information control)
-  **Technology**: 2/4 generators (scientific skepticism)
-  **Organization**: 1/4 generators (secret societies)
-  **Surveillance**: 1/4 generators (new category introduction)

### Upgrade Design Philosophy

-  **12 upgrades per generator**: Provides long-term progression
-  **Humorous descriptions**: Maintains satirical tone
-  **Conspiracy escalation**: Each upgrade builds on the original theory
-  **Variety of effects**: Mix of production, cost reduction, and special abilities
-  **Cultural references**: Ties into the original conspiracy themes

This progression provides a smooth learning curve while maintaining the satirical conspiracy theme
throughout the early game experience, with room for 17+ more generators in the full game
progression.
