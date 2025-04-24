import type { Translation } from '../types/i18n';

export const FR = {
   resources: {
      proofs: {
         name: 'Preuves',
         description:
            "Téléchargées directement depuis le 'Hidden WikiLeaks' hébergé sur une page Geocities que quelqu'un a mis en miroir. Source..? Mec, crois-moi.",
      },
      followers: {
         name: 'Abonnés',
         description:
            'Ton audience croissante. Ils rejoignent passivement ta cause, offrant biais de confirmation et réduisant ta Paranoïa. Mieux vaut ne pas lire leurs commentaires, cependant.',
      },
      paranoia: {
         name: 'Paranoïa',
         description:
            "Ce sentiment constant, oppressant d'être observé... ou est-ce juste toi? Entrave ton avancement en rendant les choses plus difficiles et en bloquant certains progrès.",
      },
   },
} satisfies Translation;
