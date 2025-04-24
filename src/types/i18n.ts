export type Locale = 'en' | 'fr';

export interface Translation {
   resources: {
      proofs: {
         name: string;
         description: string;
      };
      followers: {
         name: string;
         description: string;
      };
      paranoia: {
         name: string;
         description: string;
      };
   };
}
