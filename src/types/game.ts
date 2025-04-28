import type { StatisticsData } from '../store/StatisticsStore';
import type { SerializedClickerData } from './clicker';
import type { SerializedGeneratorData } from './generators';
import type { SerializedResourceData } from './resources';

export interface SerializedGameData {
   proofs: SerializedResourceData;
   followers: SerializedResourceData;
   paranoia: SerializedResourceData;
   generators: SerializedGeneratorData[];
   clicker: SerializedClickerData;
   statistics: StatisticsData;
   lastUpdateTime: number;
   isRunning: boolean;
}
