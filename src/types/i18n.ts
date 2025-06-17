import type { GeneratorId, UpgradeId } from './generators';
import type { ResourceId } from './resources';

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
}
