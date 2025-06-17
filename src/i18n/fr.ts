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
            "Les traînées blanches derrière les avions ne sont pas de la vapeur d'eau, ce sont des produits chimiques conçus pour contrôler la population !",
      },
      flat_earth: {
         name: 'Terre Plate',
         description:
            'Le mouvement de la Terre plate est un mouvement politique et social qui cherche à créer un monde où la population est distribuée de manière égale et les ressources sont distribuées de manière égale.',
      },
      michael_jackson: {
         name: 'Michael Jackson',
         description:
            'La mort du Roi de la Pop était un canular. Il est toujours vivant et vit dans un bunker secret avec Elvis Presley.',
      },
   },
   upgrades: {
      chemtrails_production_boost: {
         name: 'Analyse Chimique Améliorée',
         description:
            "Des techniques d'analyse améliorées révèlent plus de preuves. +50% de production de preuves pour Chemtrails.",
      },
      chemtrails_cost_reduction: {
         name: 'Collecte de Preuves Efficace',
         description:
            "Des processus rationalisés réduisent les coûts d'enquête. -25% de coût pour les améliorations Chemtrails.",
      },
      chemtrails_double_chance: {
         name: 'Découverte Critique',
         description:
            'Parfois vous trouvez des preuves irréfutables. 15% de chance de doubler la production Chemtrails.',
      },
      michael_jackson_media_boost: {
         name: 'Maîtrise de la Manipulation Médiatique',
         description:
            'Meilleure compréhension des techniques de manipulation médiatique. +75% de production de preuves pour les conspirations de manipulation médiatique.',
      },
      michael_jackson_speed_boost: {
         name: 'Enquête Rapide',
         description:
            'Techniques de collecte de preuves plus rapides. +30% de vitesse pour les enquêtes Michael Jackson.',
      },
      michael_jackson_bulk_discount: {
         name: "Économie d'Échelle",
         description:
            "Les opérations en volume deviennent plus efficaces. -10% de coût lors de l'achat de x100 niveaux Michael Jackson.",
      },
      flat_earth_global_boost: {
         name: 'Réseau de Conspirations',
         description:
            'Établir des connexions entre toutes les conspirations. +25% de production de preuves pour tous les générateurs.',
      },
      flat_earth_organization_boost: {
         name: 'Excellence Organisationnelle',
         description:
            "Meilleure coordination entre les conspirations organisées. +100% de production de preuves pour les conspirations d'organisation.",
      },
      flat_earth_production_flat: {
         name: 'Cache de Preuves Fondamentales',
         description:
            'Une collection fondamentale de preuves irréfutables. +2 de production de base de preuves pour Terre Plate.',
      },
   },
} satisfies Translation;
