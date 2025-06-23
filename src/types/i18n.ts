import type { GeneratorId } from './generators';
import type { ResourceId } from './resources';
import type { CategoryId, UpgradeId } from './upgrades';

export type Locale = 'en' | 'fr';

export interface Translation {
   resources: Record<
      ResourceId,
      {
         name: string;
         description: string;
      }
   >;
   generators: Record<
      GeneratorId,
      {
         name: string;
         description: string;
      }
   >;
   upgrades: Record<
      UpgradeId,
      {
         name: string;
         description: string;
      }
   >;
   categories: Record<CategoryId, string>;
   ui: {
      // Common actions
      close: string;
      cancel: string;
      settings: string;
      launch: string;
      update: string;
      ready: string;
      updating: string;
      version: string;
      status: string;

      // Game specific
      extractProofs: string;
      upgradeMultiplier: string;

      // Bootloader
      bootloader: string;
      classified: string;
      security: string;
      database: string;
      encryption: string;
      quantum: string;
      active: string;
      connected: string;
      warning: string;
      nominal: string;

      // Settings menu
      settingsTitle: string;
      settingsDescription: string;

      // Reset menu
      resetData: string;
      resetDescription: string;
      resetCountdown: string;
      resetSuccess: string;

      // System status
      systemStatus: string;
      checkingUpdates: string;
      noUpdatesAvailable: string;
      updatesAvailable: string;
      readyToLaunch: string;
      fetchingUpdates: string;
      lastUpdated: string;
      securityLevel: string;
      outOfDate: string;
      updateNeeded: string;

      // Tabs
      changelog: string;
      about: string;

      // Generator card
      level: string;
      cost: string;
      nextLevel: string;
      youNeedToDigDeeper: string;
      insufficientResources: string;
      unlock: string;
      unlocked: string;

      // Upgrade card
      effects: string;

      // Bulk buy
      bulkBuy: string;

      // Boost types
      boostTypes: {
         thisGenerator: string;
         allGenerators: string;
         categoryGenerators: string;
         global: string;
         productionMultiplier: string;
         productionFlat: string;
         speedMultiplier: string;
         costReduction: string;
         doubleChance: string;
      };

      // Language names
      english: string;
      french: string;
   };
   bootloader: {
      loadingMessages: string[];
      errorMessages: string[];
      terminalMessages: {
         bootloaderHeader: string;
         initializingSystem: string;
         checkingSecurity: string;
         phase1Complete: string;
         neuralInterfaceCalibration: string;
         phase2Complete: string;
         establishingConnections: string;
         phase3Complete: string;
         finalizingSystem: string;
         applyingCountermeasures: string;
         countermeasuresSuccessful: string;
         bootloaderComplete: string;
         launchingConspiracy: string;
      };
      footer: {
         initializingProtocols: string;
         securityClearance: string;
      };
   };
   launcher: {
      title: string;
      warningMessage: string;
      aboutText: {
         paragraph1: string;
         paragraph2: string;
         paragraph3: string;
         paragraph4: string;
      };
      footer: {
         copyright: string;
         disclaimer: string;
      };
   };
   game: {
      title: string;
      classifiedFooter: string;
      projectFooter: string;
   };
}
