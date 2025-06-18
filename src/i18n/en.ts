import type { Translation } from '../types/i18n';

export const EN = {
   resources: {
      proofs: {
         name: 'Proofs',
         description:
            "Directly downloaded from the 'Hidden WikiLeaks' hosted on a Geocities page. Source...? Meh, who cares.",
      },
      followers: {
         name: 'Followers',
         description:
            "Your growing audience. They passively join your cause, offering biased confirmation and reducing your Paranoia. But you'd better not read their comments.",
      },
      paranoia: {
         name: 'Paranoia',
         description:
            'This constant feeling of being observed... or is it just you? It drives your progress by making things harder and blocking further advancement.',
      },
   },
   generators: {
      chemtrails: {
         name: 'Chemtrails',
         description:
            "The white trails behind airplanes aren't water vapor, they're chemicals designed to control the population!",
      },
      flat_earth: {
         name: 'Flat Earth',
         description:
            'The Earth is obviously flat – just look around! NASA and the global elite have been lying to us for centuries to hide the ice wall and control our minds.',
      },
      michael_jackson: {
         name: 'Michael Jackson',
         description:
            "The King of Pop's death was a hoax. He's still alive and living in a secret bunker with Elvis Presley.",
      },
   },
   upgrades: {
      chemtrails_production_boost: {
         name: 'Enhanced Chemical Analysis',
         description:
            'Improved analysis techniques reveal more evidence. +50% proof production for Chemtrails.',
      },
      chemtrails_cost_reduction: {
         name: 'Efficient Evidence Gathering',
         description:
            'Streamlined processes reduce investigation costs. -25% cost for Chemtrails upgrades.',
      },
      chemtrails_double_chance: {
         name: 'Critical Discovery',
         description:
            'Sometimes you find smoking gun evidence. 15% chance to double Chemtrails production.',
      },
      michael_jackson_media_boost: {
         name: 'Media Manipulation Mastery',
         description:
            'Better understanding of media manipulation techniques. +75% proof production for media manipulation conspiracies.',
      },
      michael_jackson_speed_boost: {
         name: 'Rapid Investigation',
         description:
            'Faster evidence collection techniques. +30% speed for Michael Jackson investigations.',
      },
      michael_jackson_bulk_discount: {
         name: 'Economy of Scale',
         description:
            'Bulk operations become more efficient. -10% cost when buying x100 Michael Jackson levels.',
      },
      flat_earth_global_boost: {
         name: 'Conspiracy Network',
         description:
            'Establish connections between all conspiracies. +25% proof production for all generators.',
      },
      flat_earth_organization_boost: {
         name: 'Organizational Excellence',
         description:
            'Better coordination among organized conspiracies. +100% proof production for organization conspiracies.',
      },
      flat_earth_production_flat: {
         name: 'Core Evidence Cache',
         description:
            'A fundamental collection of irrefutable evidence. +2 base proof production for Flat Earth.',
      },
   },
   ui: {
      // Common actions
      close: 'Close',
      cancel: 'Cancel',
      settings: 'Settings',
      launch: 'LAUNCH',
      ready: 'READY',
      updating: 'UPDATING',
      version: 'Version',
      status: 'Status',

      // Game specific
      extractProofs: 'Extract proofs',
      upgradeMultiplier: 'Upgrade ×{multiplier}',

      // Bootloader
      bootloader: 'BOOTLOADER',
      classified: 'CLASSIFIED',
      security: 'Security',
      database: 'Database',
      encryption: 'Encryption',
      quantum: 'QUANTUM',
      active: 'ACTIVE',
      connected: 'CONNECTED',
      warning: 'WARNING',
      nominal: 'NOMINAL',

      // Settings menu
      settingsTitle: 'Settings',
      settingsDescription: 'Make changes to your settings here.',

      // Reset menu
      resetData: 'Reset data',
      resetDescription:
         '<b>Be careful!</b> This will reset all your progress and delete all your data. Are you sure you want to proceed?',
      resetCountdown: 'Reset in {seconds} seconds...',
      resetSuccess: 'Your save has been reset successfully.',

      // System status
      systemStatus: 'SYSTEM STATUS',
      noUpdatesAvailable: 'No updates available',
      readyToLaunch: 'Ready to Launch',
      lastUpdated: 'Last Updated',
      securityLevel: 'Security Level',

      // Tabs
      changelog: 'CHANGELOG',
      about: 'ABOUT',

      // Generator card
      level: 'LVL',
      cost: 'Cost:',
      nextLevel: 'Next level:',
      youNeedToDigDeeper: 'You need to dig deeper...',
      insufficientResources: 'INSUFFICIENT RESOURCES',
      unlock: 'UNLOCK',
      unlocked: 'Unlocked!',

      // Upgrade card
      effects: 'Effects:',

      // Bulk buy
      bulkBuy: 'Bulk Buy',

      // Boost types
      boostTypes: {
         thisGenerator: 'this generator',
         allGenerators: 'all generators',
         categoryGenerators: '{category} generators',
         global: 'global',
         productionMultiplier: 'Production Multiplier',
         productionFlat: 'Production Flat',
         speedMultiplier: 'Speed Multiplier',
         costReduction: 'Cost Reduction',
         doubleChance: 'Double Chance',
      },

      // Language names
      english: 'English',
      french: 'Français',
   },
   bootloader: {
      loadingMessages: [
         'Establishing secure quantum tunnel...',
         'Bypassing NSA surveillance protocols...',
         'Decrypting classified alien technology...',
         'Scanning for government tracking devices...',
         'Initializing neural interface...',
         'Disabling FBI monitoring systems...',
         'Connecting to shadow network...',
         'Verifying conspiracy clearance level...',
         'Loading mind control countermeasures...',
         'Triangulating black helicopter positions...',
         'Activating tinfoil hat protection layer...',
         'Scrubbing chemtrail data from servers...',
         'Analyzing crop circle communication patterns...',
         'Decoding Illuminati symbols...',
         'Calibrating lizard people detection algorithms...',
         'Establishing connection to Area 51 mainframe...',
         'Bypassing flat earth security measures...',
         'Loading secret society database...',
         'Initializing MK-Ultra defense protocols...',
         'Scanning for hidden microchips...',
         'Verifying moon landing simulation data...',
         'Establishing secure connection to deep state...',
         'Bypassing reality filters...',
         'Loading conspiracy theories: 73% verified...',
         'Initializing paranoia engine...',
         'Scanning for thought-monitoring devices...',
         'Establishing quantum entanglement with parallel universes...',
         'Decrypting black budget project files...',
         'Initializing false flag operation simulator...',
      ],
      errorMessages: [
         'ERROR: Unauthorized access detected',
         'WARNING: Surveillance countermeasures activated',
         'ALERT: Security breach in sector 7G',
         'CRITICAL: Neural interface unstable',
         'WARNING: Reality distortion field detected',
         'ERROR: Quantum fluctuation in progress',
         'ALERT: Temporal anomaly detected',
         'WARNING: Memory implant corruption detected',
      ],
      terminalMessages: {
         bootloaderHeader: '> UNFORESEEN CONSPIRACY BOOTLOADER v3.7.2',
         initializingSystem: '> INITIALIZING SYSTEM...',
         checkingSecurity: '> CHECKING SECURITY PROTOCOLS...',
         phase1Complete: '> PHASE 1 COMPLETE',
         neuralInterfaceCalibration: '> BEGINNING NEURAL INTERFACE CALIBRATION...',
         phase2Complete: '> PHASE 2 COMPLETE',
         establishingConnections: '> ESTABLISHING SECURE CONNECTIONS...',
         phase3Complete: '> PHASE 3 COMPLETE',
         finalizingSystem: '> FINALIZING SYSTEM INITIALIZATION...',
         applyingCountermeasures: '> APPLYING COUNTERMEASURES...',
         countermeasuresSuccessful: '> COUNTERMEASURES SUCCESSFUL',
         bootloaderComplete: '> BOOTLOADER SEQUENCE COMPLETE',
         launchingConspiracy: '> LAUNCHING UNFORESEEN CONSPIRACY...',
      },
      footer: {
         initializingProtocols: 'INITIALIZING CONSPIRACY PROTOCOLS...',
         securityClearance: 'Security clearance required. Unauthorized access will be terminated.',
      },
   },
   launcher: {
      title: 'UNFORESEEN CONSPIRACY INC.',
      warningMessage:
         'WARNING: This simulation contains classified information about covert operations, shadow governments, and quantum manipulation. Unauthorized access will be monitored.',
      aboutText: {
         paragraph1:
            "Welcome, truth-seeker. Think you know what's really going on? Well, think again.",
         paragraph2:
            'Click your way through layers of lies, generating undeniable <span class="text-green-400 font-bold">Proofs</span> that expose everything—from chemtrails to questionable celebrity "retirements." Gather <span class="text-green-400 font-bold">Proofs</span>, amass <span class="text-green-400 font-bold">Followers</span> who understand, and manage that creeping <span class="text-red-400 font-bold">Paranoia</span> (is your webcam... watching you?).',
         paragraph3:
            'Unravel conspiracies both mundane and monstrous, from government cover-ups to why pigeons seem so... shifty. Click onward, the rabbit hole awaits!',
         paragraph4: "And don't forget to check behind you from time to time...",
      },
      footer: {
         copyright: '© {year} Unforeseen Conspiracy Inc. All rights reserved.',
         disclaimer:
            'This simulation is for entertainment purposes only. Any resemblance to actual conspiracies is purely... coincidental.',
      },
   },
   game: {
      title: 'Unforeseen Conspiracy Inc.',
      classifiedFooter:
         'CLASSIFIED INFORMATION - AUTHORIZED ACCESS ONLY - LEVEL 1 CLEARANCE REQUIRED',
      projectFooter: 'MAJESTIC-12 OVERSIGHT COMMITTEE - PROJECT QUANTUM',
   },
} satisfies Translation;
