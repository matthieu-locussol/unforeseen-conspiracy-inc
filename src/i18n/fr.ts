import type { Translation } from '../types/i18n';

export const FR = {
   resources: {
      proofs: {
         name: 'Preuves',
         description:
            "Téléchargées directement depuis le 'Hidden WikiLeaks' hébergé sur une page Geocities que quelqu'un a mise en miroir. Source..? Mec, crois-moi.",
      },
      followers: {
         name: 'Abonnés',
         description:
            "Ton audience croissante. Ils rejoignent passivement ta cause, t'offrant du biais de confirmation et réduisant ta Paranoïa. Mieux vaut ne pas lire leurs commentaires, cependant.",
      },
      paranoia: {
         name: 'Paranoïa',
         description:
            "Ce sentiment constant, oppressant d'être observé... ou est-ce juste toi ? Entrave ton avancement en rendant les choses plus difficiles et en bloquant certains progrès.",
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
            "La Terre n'est pas ronde, c'est évident ! Une immense conspiration mondiale cache la vérité sur notre planète plate. Les bords ? Gardés par la NASA, bien sûr.",
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
            'Parfois tu tombes sur des preuves irréfutables. 15% de chance de doubler la production Chemtrails.',
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
   ui: {
      // Common actions
      close: 'Fermer',
      cancel: 'Annuler',
      settings: 'Paramètres',
      launch: 'LANCER',
      ready: 'PRÊT',
      updating: 'MISE À JOUR',
      version: 'Version',
      status: 'Statut',

      // Game specific
      extractProofs: 'Extraire des preuves',
      upgradeMultiplier: 'Améliorer ×{multiplier}',

      // Bootloader
      bootloader: 'BOOTLOADER',
      classified: 'CLASSIFIÉ',
      security: 'Sécurité',
      database: 'Base de données',
      encryption: 'Chiffrement',
      quantum: 'QUANTIQUE',
      active: 'ACTIF',
      connected: 'CONNECTÉ',
      warning: 'ATTENTION',
      nominal: 'NOMINAL',

      // Settings menu
      settingsTitle: 'Paramètres',
      settingsDescription: 'Modifiez vos paramètres ici.',

      // Reset menu
      resetData: 'Réinitialiser',
      resetDescription:
         '<b>Attention !</b> Ceci réinitialisera tous tes progrès et supprimera toutes tes données. Es-tu sûr de vouloir continuer ?',
      resetCountdown: 'Réinitialisation dans {seconds} secondes...',
      resetSuccess: 'Ta sauvegarde a été réinitialisée avec succès.',

      // System status
      systemStatus: 'ÉTAT DU SYSTÈME',
      noUpdatesAvailable: 'Aucune mise à jour disponible',
      readyToLaunch: 'Prêt à lancer',
      lastUpdated: 'Dernière mise à jour',
      securityLevel: 'Niveau de sécurité',

      // Tabs
      changelog: 'CHANGELOG',
      about: 'À PROPOS',

      // Generator card
      level: 'NIV',
      cost: 'Coût :',
      nextLevel: 'Niveau suivant :',
      youNeedToDigDeeper: 'Tu dois creuser plus profond...',
      insufficientResources: 'RESSOURCES INSUFFISANTES',
      unlock: 'DÉBLOQUER',
      unlocked: 'Débloqué !',

      // Upgrade card
      effects: 'Effets :',

      // Bulk buy
      bulkBuy: 'Achat en gros',

      // Boost types
      boostTypes: {
         thisGenerator: 'ce générateur',
         allGenerators: 'tous les générateurs',
         categoryGenerators: 'générateurs {category}',
         global: 'global',
         productionMultiplier: 'Multiplicateur de Production',
         productionFlat: 'Production Fixe',
         speedMultiplier: 'Multiplicateur de Vitesse',
         costReduction: 'Réduction de Coût',
         doubleChance: 'Chance de Doublement',
      },

      // Language names
      english: 'English',
      french: 'Français',
   },
   bootloader: {
      loadingMessages: [
         'Établissement du tunnel quantique sécurisé...',
         'Contournement des protocoles de surveillance NSA...',
         'Décryptage de technologie alien classifiée...',
         'Scan des dispositifs de surveillance gouvernementaux...',
         "Initialisation de l'interface neurale...",
         'Désactivation des systèmes de surveillance FBI...',
         'Connexion au réseau fantôme...',
         "Vérification du niveau d'autorisation conspirationniste...",
         'Chargement des contre-mesures de contrôle mental...',
         "Triangulation des positions d'hélicoptères noirs...",
         'Activation de la couche de protection en papier alu...',
         'Nettoyage des données chemtrails des serveurs...',
         'Analyse des motifs de communication des crop circles...',
         'Décodage des symboles Illuminati...',
         'Calibrage des algorithmes de détection des reptiliens...',
         'Établissement de connexion au mainframe de la Zone 51...',
         'Contournement des mesures de sécurité terre plate...',
         'Chargement de la base de données des sociétés secrètes...',
         'Initialisation des protocoles de défense MK-Ultra...',
         'Scan des micropuces cachées...',
         "Vérification des données de simulation d'alunissage...",
         "Établissement de connexion sécurisée vers l'État profond...",
         'Contournement des filtres de réalité...',
         'Chargement des théories du complot : 73% vérifiées...',
         'Initialisation du moteur de paranoïa...',
         'Scan des dispositifs de surveillance des pensées...',
         "Établissement d'intrication quantique avec des univers parallèles...",
         'Décryptage des fichiers de projets budgets noirs...',
         "Initialisation du simulateur d'opérations sous faux drapeau...",
      ],
      errorMessages: [
         'ERREUR : Accès non autorisé détecté',
         'ATTENTION : Contre-mesures de surveillance activées',
         'ALERTE : Brèche de sécurité dans le secteur 7G',
         'CRITIQUE : Interface neurale instable',
         'ATTENTION : Champ de distorsion de réalité détecté',
         'ERREUR : Fluctuation quantique en cours',
         'ALERTE : Anomalie temporelle détectée',
         "ATTENTION : Corruption d'implant mémoire détectée",
      ],
      terminalMessages: {
         bootloaderHeader: '> UNFORESEEN CONSPIRACY BOOTLOADER v3.7.2',
         initializingSystem: '> INITIALISATION DU SYSTÈME...',
         checkingSecurity: '> VÉRIFICATION DES PROTOCOLES DE SÉCURITÉ...',
         phase1Complete: '> PHASE 1 TERMINÉE',
         neuralInterfaceCalibration: "> DÉBUT DU CALIBRAGE DE L'INTERFACE NEURALE...",
         phase2Complete: '> PHASE 2 TERMINÉE',
         establishingConnections: '> ÉTABLISSEMENT DES CONNEXIONS SÉCURISÉES...',
         phase3Complete: '> PHASE 3 TERMINÉE',
         finalizingSystem: "> FINALISATION DE L'INITIALISATION DU SYSTÈME...",
         applyingCountermeasures: '> APPLICATION DES CONTRE-MESURES...',
         countermeasuresSuccessful: '> CONTRE-MESURES RÉUSSIES',
         bootloaderComplete: '> SÉQUENCE DE CHARGEMENT TERMINÉE',
         launchingConspiracy: "> LANCEMENT D'UNFORESEEN CONSPIRACY...",
      },
      footer: {
         initializingProtocols: 'INITIALISATION DES PROTOCOLES DE CONSPIRATION...',
         securityClearance: "Autorisation de sécurité requise. L'accès non autorisé sera terminé.",
      },
   },
   launcher: {
      title: 'UNFORESEEN CONSPIRACY INC.',
      warningMessage:
         "ATTENTION : Cette simulation contient des informations classifiées sur les opérations secrètes, les gouvernements fantômes et la manipulation quantique. L'accès non autorisé sera surveillé.",
      aboutText: {
         paragraph1:
            'Bienvenue, chercheur de vérité. Tu penses savoir ce qui se passe vraiment ? Eh bien, détrompe-toi.',
         paragraph2:
            'Clique à travers des couches de mensonges, générant des <span class="text-green-400 font-bold">Preuves</span> indéniables qui exposent tout – des chemtrails aux "retraites" suspectes de célébrités. Récolte des <span class="text-green-400 font-bold">Preuves</span>, amasse des <span class="text-green-400 font-bold">Abonnés</span> qui comprennent, et gère cette <span class="text-red-400 font-bold">Paranoïa</span> rampante (est-ce que ta webcam... te regarde ?).',
         paragraph3:
            "Démêle des conspirations à la fois banales et monstrueuses, des dissimulations gouvernementales à pourquoi les pigeons semblent si... louches. Clique en avant, le terrier du lapin t'attend !",
         paragraph4: "Et n'oublie pas de regarder derrière toi de temps en temps...",
      },
      footer: {
         copyright: '© {year} Unforeseen Conspiracy Inc. Tous droits réservés.',
         disclaimer:
            'Cette simulation est à des fins de divertissement uniquement. Toute ressemblance avec de vraies conspirations est purement... fortuite.',
      },
   },
   game: {
      title: 'Unforeseen Conspiracy Inc.',
      classifiedFooter:
         'INFORMATIONS CLASSIFIÉES - ACCÈS AUTORISÉ SEULEMENT - AUTORISATION NIVEAU 1 REQUISE',
      projectFooter: 'COMITÉ DE SURVEILLANCE MAJESTIC-12 - PROJET QUANTIQUE',
   },
} satisfies Translation;
