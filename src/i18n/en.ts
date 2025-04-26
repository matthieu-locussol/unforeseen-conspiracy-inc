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
      flat_earth: {
         name: 'Flat Earth',
         description:
            'The Flat Earth movement is a political and social movement that seeks to create a world where the population is equally distributed and resources are distributed equally.',
      },
      michael_jackson: {
         name: 'Michael Jackson',
         description:
            "The King of Pop's death was a hoax. He is still alive and living in a secret bunker with Elvis Presley.",
      },
   },
} satisfies Translation;
