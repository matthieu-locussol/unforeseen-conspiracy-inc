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
   generators: {
      chemtrails: {
         name: 'Chemtrails',
         description:
            "Les traces blanches derrière les avions ne sont pas de vapeur d'eau, c'est des produits chimiques conçus pour contrôler la population!",
      },
      flat_earth: {
         name: 'Flat Earth',
         description:
            'La mouvement Flat Earth est un mouvement politique et social qui cherche à créer un monde où la population et les ressources sont également distribuées.',
      },
      michael_jackson: {
         name: 'Michael Jackson',
         description:
            'La mort du roi de Pop est un complot. Il est toujours vivant et se trouve dans un bunker secret avec Elvis Presley.',
      },
   },
} satisfies Translation;
