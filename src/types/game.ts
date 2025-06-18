import type { StatisticsData } from '../store/StatisticsStore';
import type { SerializedClickerData } from './clicker';
import type { SerializedGeneratorData } from './generators';
import type { SerializedResourceData } from './resources';
import type { SerializedUpgradeData } from './upgrades';

export interface SerializedGameData {
   proofs: SerializedResourceData;
   followers: SerializedResourceData;
   paranoia: SerializedResourceData;
   generators: SerializedGeneratorData[];
   upgrades: SerializedUpgradeData[];
   clicker: SerializedClickerData;
   statistics: StatisticsData;
   lastUpdateTime: number;
   isRunning: boolean;
}
