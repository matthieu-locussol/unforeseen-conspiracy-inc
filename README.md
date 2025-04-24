# Unforeseen Conspiracy Inc.

The theme of the game is conspiracy: the player embodies the role of a conspirationist that believes
in absolutely everything he can find on the internet that seems « hidden » or « edgy ». His ultimate
goal is to dig conspiracies as part of « ongoing cases » in order to reveal the truth to the world.
Basically he would start with pretty common conspiracies (chemtrails, michael jackson death, etc.)
to end up in completely « wtf » conspiracies that we can even create for the sake of keeping the
game fun and humouristic (clouds are made of hydrophobic cotton, the moon is an egg, gravity is a
political opinion, black mesa exists, etc.). Everything should escalate in order to keep the fun
going in a satirical way to mock conspirationists.

-  Features
   -  Uses Tauri to build desktop & mobile apps
   -  Should be playable from computer -> distributed on Steam
   -  Should be mobile-friendly -> distributed on App Store & Play Store
   -  Should be controller-friendly -> can be played on Steam Deck
   -  Internationalized (English, French, possibility to let people help with translations)
   -  Autosave to the localStorage
   -  No server, no hashing mechanisms, no protection -> if people cheat, no problem
-  Resources
   -  Proofs
      -  Concept: Both actively & passively produced resource, either through clicks or through
         generators / technologies / achievements / etc.
   -  Followers
      -  Concept: Passively produced resource.
   -  Paranoïa
      -  Concept: Negative resource -> too much of it will prevent you from buying upgrades ; you’ll
         need to balance it.
-  Generators (IG name: « Ongoing Cases »)
   -  Name
   -  Category
   -  Resource generation per second
   -  Humouristic description
   -  Cost (price, available or not)
   -  Next level (new resource generation per second, increase difference)
   -  (Each generator is named after a more-or-less famous conspiracy theory. When a new conspiracy
      is unlocked, a notification pops. Not-yet unlocked conspiracies are hidden)
-  Click upgrades (IG name: « Metabolism »)
   -  Ideas of upgrades names
      -  Watch YouTube
      -  Practice penspinning
      -  Fold aluminum hats
      -  Read conspiracy books
      -  Browse 4chan archives
      -  Bookmark forum posts
      -  Cognitive dissonance resistance
   -  (Basically here you can improve your click-related abilities to increase the resources granted
      for each click)
-  Technologies Tree (IG name: « Researchs »)
   -  Name
   -  Description
   -  Category
   -  Tier
   -  Cost in resource(s)
   -  Prerequisites
   -  Research time
   -  Blocks other tech research while researching
   -  (Here user can buy upgrades to improve anything, really. Resetted after prestige.)
-  Prestige (IG name: « Archives »)
   -  Fully reset resources
   -  Grants a « Caffeine multiplier »
   -  Fields
      -  Current multiplier
      -  Required resource(s)
      -  Current resource(s)
      -  Progress bar
      -  New multiplier
      -  Multiplier increase
   -  (Thanks to all your efforts making followers, you gained some money from your activity,
      allowing you to buy lot of caffeine)
-  Achievements (IG name: « Revelations »)
   -  Name
   -  Icon
   -  Description
   -  Condition(s)
   -  Bonus: Grants +1% to global production (or something else, can be per-achievement basis)
   -  (Linked one-to-one to Steam achievements)
-  Statistics (IG name: « Statistics »)
   -  Time scales for the stats
      -  Since beginning of the game
      -  Since last prestige
   -  Stats available
      -  Time played
      -  Total clicks
      -  Total proofs generated
      -  Total followers generated
      -  Total paranoïa generated
      -  (A lot of it. Make it look cool and hacker/paranoïd style)
-  In-game bonuses
   -  Event-related bonuses
      -  Christmas (Dec. 24th - Dec. 25th)
      -  New year (Dec. 31st - Jan. 1st)
      -  Halloween (Oct. 31st)
      -  Valentine’s day (Feb. 14th)
      -  St Patrick’s day (Mar. 17th)
      -  Game anniversary (To be determined)
   -  Event-related maluses (linked to paranoïa critical threshold reached)
      -  Men in black visit
      -  Online trolls attack
   -  Daily reward (ordered by rarity)
      -  Raw amount of a specific resource
      -  Raw amount of all resources
      -  Multiply a specific resource
      -  Multiply all resources
      -  Temporary boost (+%age) of a resource
      -  Temporary boost (+%age) of all resources
      -  Game concept
         -  Name: Daily Signal Interception
         -  Details
            -  An interface resembling an old radio tuner or a signal strength meter appears.
            -  Clicking "Tune In" or "Intercept Signal" triggers audio/visual static and scanning
               effects.
            -  It randomly locks onto a "clear" signal – perhaps a short sequence of numbers (like a
               real numbers station) or a cryptic phrase appears on screen. This code corresponds to
               the daily reward. (e.g., "Broadcast Received: 4 8 15 16 23 42 - Reward: +X% Proofs
               for 1 hour").
            -  Visual Flair: Static effects, tuning dials, frequency displays, number sequences,
               possibly faint distorted voice snippets (optional).
   -  Mini-game event
      -  Description: from time to time (multiple hours between each) a button will pop and stay
         until the user clicks on it. This button will display a mini-game that will grant a
         substantial bonus if completed.
      -  Game ideas
         -  Memory game where you pair cards under a timer (cards should have conspiracy references
            on it)
         -  Click fast on conspiracy-related icons and avoid science-based icons
         -  Kind of a « Wordle » game where you need to find the conspiracy element (?)
-  Game mechanics
   -  Proofs (+flat) [For a given case ; For a category of cases ; For every case]
      -  Description: The fundamental amount of proofs an ongoing case produces per second (before
         multiplier).
      -  Base value: Depends on the ongoing case
   -  Proofs multiplier (+%age) [For a given case ; For a category of cases ; For every case]
      -  Description: Increases the output of the ongoing case
      -  Base value: 0%
   -  Speed (+%age)
      -  Description: Increases how often proofs are found for an ongoing case.
      -  Base value: 0%
   -  Chance of doubling production (+%age)
      -  Description: Chance for an ongoing case to produce double, triple or more the amount of
         proofs.
      -  Base value: 0%
      -  Note: Should have only 1 or 2 upgrades like this per generator. Only concerns THIS
         generator’s production.
   -  Cost (-%age)
      -  Description: Reduces the cost of purchasing ongoing case levels and upgrades.
      -  Base value: 0%
   -  Cost discount for x10 (-5%) ; x100 (-10%)
      -  Description: Reduces the cost per unit when buying multiple ongoing case levels at once
      -  Base value: None
      -  Note: There are basically only 2 discounts per ongoing case: -5% for x10 and -10% for x100.
         These can be unlocked or locked on a per-ongoing case basis.
   -  Click value (+flat)
      -  Description: Amount of proofs generated per manual click.
      -  Base value: 1
   -  Click multiplier (+%age)
      -  Description: Multiplies the value of each click.
      -  Base value: 0%
   -  Click critical chance (+%age)
      -  Description: Probability that a click will be a critical hit, yielding higher rewards.
      -  Base value: 0%
   -  Click critical magnitude (+%age)
      -  Description: How much more a critical click yields compared to a normal click.
      -  Base value: 100%
   -  Click combo (+%age)
      -  Description: Rewards for clicking rapidly without stopping, capped at +150%.
      -  Base value: 1% (<=> +1% click value for every click in the last second)
   -  Offline proofs finding (+%age)
      -  Description: Percentage of proofs production rate that you find while the game is closed.
      -  Base value: 50%
   -  Offline proofs finding multiplier (+%age)
      -  Description: A multiplier applied to the production calculated during the offline period.
      -  Base value: 0%
   -  Idle proofs finding bonus (+%age)
      -  Description: A bonus applied to production when the player hasn’t interacted for a set
         amount of time (1min).
      -  Base value: 0%
   -  Research speed (+%age)
      -  Description: Increases how fast new research are completed.
      -  Base value: 0%
   -  (Production, speed, cost & double production chance could be upgraded globally or for a
      specific building)
-  Extensibility
   -  One objective is to ensure ease to add new content, particularly:
      -  New conspiracies
      -  New mini-games
