import type { Translation } from '../types/i18n';

export const EN = {
   resources: {
      proofs: {
         name: 'Proofs',
         description:
            "Directly downloaded from the 'Hidden WikiLeaks' hosted on a Geocities page. Source..? Meh, I guess.",
      },
      followers: {
         name: 'Followers',
         description:
            'Growing audience. They join passively to your cause, offering biased confirmation and reducing your Paranoia. Better not to read their comments, however.',
      },
      paranoia: {
         name: 'Paranoia',
         description:
            'This constant feeling of being observed... or is it just you? It advances your progress by making things more difficult and blocking some progress.',
      },
   },
   generators: {
      chemtrails: {
         name: 'Chemtrails',
         description:
            "The white trails behind airplanes aren't water vapor, they're chemicals designed to control the population!",
      },
   },
} satisfies Translation;
