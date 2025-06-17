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
            'Better understanding of media manipulation techniques. +75% proof production for media-manipulation conspiracies.',
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
} satisfies Translation;
