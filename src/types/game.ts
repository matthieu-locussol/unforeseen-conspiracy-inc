import type { ClickManagerData } from '../store/ClickerStore';
import type { StatisticsData } from '../store/StatisticsStore';
import type { SerializedGeneratorData } from './generators';
import type { SerializedResourceData } from './resources';

export interface SerializedGameData {
   proofs: SerializedResourceData;
   followers: SerializedResourceData;
   paranoia: SerializedResourceData;
   generators: SerializedGeneratorData[];
   clickManager: ClickManagerData;
   statistics: StatisticsData;
   lastUpdateTime: number;
   isRunning: boolean;
}
