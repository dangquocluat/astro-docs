export const generatedDocsCommands = [
  {
    "slug": "8ball",
    "name": "8ball",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Posez une question à la boule magique",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "question",
        "description": "La question que vous voulez poser à la boule magique",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/8ball question:\"text\""
    ],
    "sourcePath": "hono/src/commands/fun/8ball.ts"
  },
  {
    "slug": "ascii",
    "name": "ascii",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Convertissez du texte en art ASCII",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "text",
        "description": "Le texte à convertir (max 10 caractères)",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "minLength": 1,
        "maxLength": 10,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/ascii text:\"text\""
    ],
    "sourcePath": "hono/src/commands/fun/ascii.ts"
  },
  {
    "slug": "ban",
    "name": "ban",
    "category": "moderation",
    "categoryLabel": "moderation",
    "description": "Bannir un membre du serveur",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "Le membre à bannir",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "reason",
        "description": "Raison du bannissement",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/ban user:@user [reason:\"text\"]"
    ],
    "sourcePath": "hono/src/commands/moderation/ban.ts"
  },
  {
    "slug": "cat",
    "name": "cat",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Obtenez une image de chat aléatoire",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/cat"
    ],
    "sourcePath": "hono/src/commands/fun/cat.ts"
  },
  {
    "slug": "coinflip",
    "name": "coinflip",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Lancez une pièce - pile ou face ?",
    "cooldown": 2,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "choice",
        "description": "Choisissez pile ou face (optionnel)",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false,
        "choices": [
          {
            "name": "Heads",
            "value": "heads"
          },
          {
            "name": "Tails",
            "value": "tails"
          }
        ]
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/coinflip [choice:\"text\"]"
    ],
    "sourcePath": "hono/src/commands/fun/coinflip.ts"
  },
  {
    "slug": "dice",
    "name": "dice",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Lancez un ou plusieurs dés",
    "cooldown": 2,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "sides",
        "description": "Nombre de faces du dé (par défaut: 6)",
        "type": 4,
        "typeLabel": "INTEGER",
        "required": false,
        "minValue": 2,
        "maxValue": 100,
        "autocomplete": false
      },
      {
        "name": "count",
        "description": "Nombre de dés à lancer (par défaut: 1)",
        "type": 4,
        "typeLabel": "INTEGER",
        "required": false,
        "minValue": 1,
        "maxValue": 10,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/dice [sides:123] [count:123]"
    ],
    "sourcePath": "hono/src/commands/fun/dice.ts"
  },
  {
    "slug": "dog",
    "name": "dog",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Obtenez une image de chien aléatoire",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/dog"
    ],
    "sourcePath": "hono/src/commands/fun/dog.ts"
  },
  {
    "slug": "kick",
    "name": "kick",
    "category": "moderation",
    "categoryLabel": "moderation",
    "description": "Expulser un membre du serveur",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "Le membre à expulser",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "reason",
        "description": "Raison de l'expulsion",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/kick user:@user [reason:\"text\"]"
    ],
    "sourcePath": "hono/src/commands/moderation/kick.ts"
  },
  {
    "slug": "meme",
    "name": "meme",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Obtenez un meme aléatoire",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/meme"
    ],
    "sourcePath": "hono/src/commands/fun/meme.ts"
  },
  {
    "slug": "rate",
    "name": "rate",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Évaluez quelque chose sur une échelle de 1 à 10",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "thing",
        "description": "Que voulez-vous évaluer ?",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/rate thing:\"text\""
    ],
    "sourcePath": "hono/src/commands/fun/rate.ts"
  },
  {
    "slug": "rps",
    "name": "rps",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Jouez à Pierre Feuille Ciseaux contre le bot",
    "cooldown": 2,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "choice",
        "description": "Choisissez pierre, feuille ou ciseaux",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false,
        "choices": [
          {
            "name": "Rock 🪨",
            "value": "rock"
          },
          {
            "name": "Paper 📄",
            "value": "paper"
          },
          {
            "name": "Scissors ✂️",
            "value": "scissors"
          }
        ]
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/rps choice:\"text\""
    ],
    "sourcePath": "hono/src/commands/fun/rps.ts"
  },
  {
    "slug": "ship",
    "name": "ship",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Associez deux personnes et voyez leur compatibilité",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user1",
        "description": "La première personne",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "user2",
        "description": "La deuxième personne",
        "type": 6,
        "typeLabel": "USER",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/ship user1:@user [user2:@user]"
    ],
    "sourcePath": "hono/src/commands/fun/ship.ts"
  },
  {
    "slug": "timeout",
    "name": "timeout",
    "category": "moderation",
    "categoryLabel": "moderation",
    "description": "Mettre un membre en timeout",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "Le membre à mettre en timeout",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "duration",
        "description": "Durée (ex: 10s, 5m, 1h, 7d). Max 28 jours.",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "reason",
        "description": "Raison du timeout",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/timeout user:@user duration:\"text\" [reason:\"text\"]"
    ],
    "sourcePath": "hono/src/commands/moderation/timeout.ts"
  },
  {
    "slug": "bug",
    "name": "bug",
    "category": "util",
    "categoryLabel": "Utility",
    "description": "Report a bug or incident",
    "cooldown": 30,
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/bug"
    ],
    "sourcePath": "hono/src/commands/util/report.ts"
  },
  {
    "slug": "feedback",
    "name": "feedback",
    "category": "util",
    "categoryLabel": "Utility",
    "description": "Send feedback or a suggestion",
    "cooldown": 30,
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/feedback"
    ],
    "sourcePath": "hono/src/commands/util/report.ts"
  },
  {
    "slug": "help",
    "name": "help",
    "category": "util",
    "categoryLabel": "Utility",
    "description": "Lister toutes les commandes ou obtenir de l'aide pour une commande spécifique",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "command",
        "description": "La commande pour laquelle obtenir de l'aide",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/help [command:\"text\"]"
    ],
    "sourcePath": "hono/src/commands/util/help.ts"
  },
  {
    "slug": "language",
    "name": "language",
    "category": "util",
    "categoryLabel": "Utility",
    "description": "Définir la langue du bot pour ce serveur",
    "contexts": [],
    "dmPermission": false,
    "defaultMemberPermissions": "32",
    "hidden": false,
    "options": [
      {
        "name": "language",
        "description": "Langue à utiliser pour ce serveur",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false,
        "choices": [
          {
            "name": "Tiếng Việt",
            "value": "vi"
          },
          {
            "name": "English (US)",
            "value": "en-US"
          },
          {
            "name": "Français",
            "value": "fr"
          },
          {
            "name": "ภาษาไทย",
            "value": "th"
          },
          {
            "name": "Reset (Discord default)",
            "value": "reset"
          }
        ]
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/language language:\"text\""
    ],
    "sourcePath": "hono/src/commands/util/language.ts"
  },
  {
    "slug": "ping",
    "name": "ping",
    "category": "util",
    "categoryLabel": "Utility",
    "description": "Vérifier la latence du bot",
    "cooldown": 5,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/ping"
    ],
    "sourcePath": "hono/src/commands/util/ping.ts"
  },
  {
    "slug": "steal",
    "name": "steal",
    "category": "util",
    "categoryLabel": "Utility",
    "description": "Voler un emoji d'un autre serveur",
    "cooldown": 10,
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "emoji",
        "description": "Les emojis à voler (max 25)",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "name",
        "description": "Nom pour le nouvel emoji (optionnel, +1 +2 pour plusieurs)",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/steal emoji:\"text\" [name:\"text\"]"
    ],
    "sourcePath": "hono/src/commands/util/steal.ts"
  },
  {
    "slug": "timestamp",
    "name": "timestamp",
    "category": "util",
    "categoryLabel": "Utility",
    "description": "Générer un timestamp Discord <t:>",
    "cooldown": 3,
    "contexts": [],
    "dmPermission": true,
    "hidden": false,
    "options": [
      {
        "name": "date",
        "description": "Date (YYYY-MM-DD, epoch secondes, ou langage naturel)",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "time",
        "description": "Heure (HH:MM, par défaut 00:00)",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "style",
        "description": "Style de timestamp (défaut: F)",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/timestamp date:\"text\" [time:\"text\"] [style:\"text\"]"
    ],
    "sourcePath": "hono/src/commands/util/timestamp.ts"
  },
  {
    "slug": "translate",
    "name": "translate",
    "category": "util",
    "categoryLabel": "Utility",
    "description": "Traduire du texte avec l'IA",
    "cooldown": 5,
    "contexts": [],
    "dmPermission": true,
    "hidden": false,
    "options": [
      {
        "name": "text",
        "description": "Texte à traduire",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "source",
        "description": "Langue source",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "target",
        "description": "Langue cible",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/translate text:\"text\" [source:\"text\"] [target:\"text\"]"
    ],
    "sourcePath": "hono/src/commands/util/translate.ts"
  },
  {
    "slug": "Translate",
    "name": "Translate",
    "category": "util",
    "categoryLabel": "Utility",
    "description": "Translate a selected message using AI",
    "cooldown": 5,
    "contexts": [],
    "dmPermission": true,
    "hidden": true,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/Translate"
    ],
    "sourcePath": "hono/src/commands/util/translate.ts"
  },
  {
    "slug": "avatar",
    "name": "avatar",
    "category": "info",
    "categoryLabel": "Info",
    "description": "Voir l'avatar d'un utilisateur",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "L'utilisateur dont vous souhaitez voir l'avatar",
        "type": 6,
        "typeLabel": "USER",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/avatar [user:@user]"
    ],
    "sourcePath": "hono/src/commands/info/avatar.ts"
  },
  {
    "slug": "Avatar",
    "name": "Avatar",
    "category": "info",
    "categoryLabel": "Info",
    "description": "View a user's avatar",
    "cooldown": 5,
    "contexts": [],
    "dmPermission": true,
    "hidden": true,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/Avatar"
    ],
    "sourcePath": "hono/src/commands/info/avatar.ts"
  },
  {
    "slug": "banner",
    "name": "banner",
    "category": "info",
    "categoryLabel": "Info",
    "description": "Voir la bannière d'un utilisateur",
    "cooldown": 5,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "L'utilisateur dont vous souhaitez voir la bannière",
        "type": 6,
        "typeLabel": "USER",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/banner [user:@user]"
    ],
    "sourcePath": "hono/src/commands/info/banner.ts"
  },
  {
    "slug": "channel",
    "name": "channel",
    "category": "info",
    "categoryLabel": "Info",
    "description": "Gérer les salons",
    "cooldown": 3,
    "contexts": [],
    "dmPermission": false,
    "defaultMemberPermissions": "16",
    "hidden": false,
    "options": [
      {
        "name": "info",
        "description": "Obtenir des informations sur un salon",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Le salon dont vous souhaitez obtenir des informations",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "create",
        "description": "Créer un nouveau salon",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "type",
            "description": "Type de salon",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": false,
            "choices": [
              {
                "name": "Text",
                "value": "text"
              },
              {
                "name": "Voice",
                "value": "voice"
              },
              {
                "name": "Forum",
                "value": "forum"
              },
              {
                "name": "Category",
                "value": "category"
              }
            ]
          },
          {
            "name": "name",
            "description": "Nom du salon",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "category",
            "description": "Catégorie parente",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "topic",
            "description": "Sujet du salon",
            "type": 3,
            "typeLabel": "STRING",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "delete",
        "description": "Supprimer un salon",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Salon à supprimer (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "rename",
        "description": "Renommer un salon",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "name",
            "description": "Nouveau nom du salon",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Salon à renommer (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "clone",
        "description": "Cloner un salon",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Salon à cloner (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "move",
        "description": "Déplacer un salon à une autre position",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "position",
            "description": "Nouvelle position (à partir de 0)",
            "type": 4,
            "typeLabel": "INTEGER",
            "required": true,
            "minValue": 0,
            "maxValue": 500,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Salon à déplacer (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "category",
            "description": "Déplacer dans une autre catégorie",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "nsfw",
        "description": "Activer/désactiver NSFW sur un salon",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "enabled",
            "description": "Activer ou désactiver NSFW",
            "type": 5,
            "typeLabel": "BOOLEAN",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Salon à modifier (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "slowmode",
        "description": "Définir le mode lent d'un salon",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "seconds",
            "description": "Délai du mode lent en secondes (0 = désactivé, max 21600)",
            "type": 4,
            "typeLabel": "INTEGER",
            "required": true,
            "minValue": 0,
            "maxValue": 21600,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Salon à modifier (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "lock",
        "description": "Verrouiller un salon — empêcher @everyone d'envoyer des messages",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Salon à verrouiller (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "unlock",
        "description": "Déverrouiller un salon — restaurer l'envoi de messages pour @everyone",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Salon à déverrouiller (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "viewlock",
        "description": "Masquer un salon à @everyone",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Salon à masquer (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "setperm",
        "description": "Définir une permission pour un rôle ou utilisateur dans un salon",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "permission",
            "description": "Permission à définir",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": false,
            "choices": [
              {
                "name": "View Channel",
                "value": "view_channel"
              },
              {
                "name": "Send Messages",
                "value": "send_messages"
              },
              {
                "name": "Manage Messages",
                "value": "manage_messages"
              },
              {
                "name": "Attach Files",
                "value": "attach_files"
              },
              {
                "name": "Embed Links",
                "value": "embed_links"
              },
              {
                "name": "Read Message History",
                "value": "read_message_history"
              },
              {
                "name": "Mention Everyone",
                "value": "mention_everyone"
              },
              {
                "name": "Connect",
                "value": "connect"
              },
              {
                "name": "Speak",
                "value": "speak"
              },
              {
                "name": "Manage Channel",
                "value": "manage_channels"
              }
            ]
          },
          {
            "name": "action",
            "description": "Autoriser, refuser ou réinitialiser la permission",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": false,
            "choices": [
              {
                "name": "Allow",
                "value": "allow"
              },
              {
                "name": "Deny",
                "value": "deny"
              },
              {
                "name": "Reset (neutral)",
                "value": "reset"
              }
            ]
          },
          {
            "name": "role",
            "description": "Rôle pour lequel définir la permission",
            "type": 8,
            "typeLabel": "ROLE",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "user",
            "description": "Utilisateur pour lequel définir la permission",
            "type": 6,
            "typeLabel": "USER",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Salon à modifier (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "sync",
        "description": "Synchroniser les permissions du salon avec sa catégorie parente",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Salon à synchroniser (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "resetperm",
        "description": "Supprimer toutes les permissions d'un rôle ou utilisateur",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "role",
            "description": "Rôle dont réinitialiser les permissions",
            "type": 8,
            "typeLabel": "ROLE",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "user",
            "description": "Utilisateur dont réinitialiser les permissions",
            "type": 6,
            "typeLabel": "USER",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Salon à modifier (défaut: salon actuel)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      }
    ],
    "hasSubcommands": true,
    "usageExamples": [
      "/channel info [target:#channel]",
      "/channel create type:\"text\" name:\"text\" [category:#channel] [topic:\"text\"]",
      "/channel delete [target:#channel]",
      "/channel rename name:\"text\" [target:#channel]",
      "/channel clone [target:#channel]",
      "/channel move position:123 [target:#channel] [category:#channel]",
      "/channel nsfw enabled:true [target:#channel]",
      "/channel slowmode seconds:123 [target:#channel]",
      "/channel lock [target:#channel]",
      "/channel unlock [target:#channel]",
      "/channel viewlock [target:#channel]",
      "/channel setperm permission:\"text\" action:\"text\" [role:@role] [user:@user] [target:#channel]",
      "/channel sync [target:#channel]",
      "/channel resetperm [role:@role] [user:@user] [target:#channel]"
    ],
    "sourcePath": "hono/src/commands/info/channel.ts"
  },
  {
    "slug": "membercount",
    "name": "membercount",
    "category": "info",
    "categoryLabel": "Info",
    "description": "Voir le nombre de membres du serveur",
    "cooldown": 10,
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/membercount"
    ],
    "sourcePath": "hono/src/commands/info/membercount.ts"
  },
  {
    "slug": "role",
    "name": "role",
    "category": "info",
    "categoryLabel": "Info",
    "description": "Gérer ou obtenir des informations sur les rôles",
    "cooldown": 5,
    "contexts": [],
    "dmPermission": false,
    "defaultMemberPermissions": "32",
    "hidden": false,
    "options": [
      {
        "name": "info",
        "description": "Obtenir des informations sur un rôle",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Le rôle dont vous souhaitez obtenir des informations",
            "type": 8,
            "typeLabel": "ROLE",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "add",
        "description": "Ajouter un rôle à un utilisateur",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "user",
            "description": "L'utilisateur cible",
            "type": 6,
            "typeLabel": "USER",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "role",
            "description": "Rôle à ajouter",
            "type": 8,
            "typeLabel": "ROLE",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "temprole",
        "description": "Gérer les rôles temporaires",
        "type": 2,
        "typeLabel": "SUB_COMMAND_GROUP",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "add",
            "description": "Assigner temporairement un rôle à un utilisateur",
            "type": 1,
            "typeLabel": "SUB_COMMAND",
            "required": false,
            "autocomplete": false,
            "options": [
              {
                "name": "user",
                "description": "Target user",
                "type": 6,
                "typeLabel": "USER",
                "required": true,
                "autocomplete": false
              },
              {
                "name": "role",
                "description": "Role to assign",
                "type": 8,
                "typeLabel": "ROLE",
                "required": true,
                "autocomplete": false
              },
              {
                "name": "duration",
                "description": "Duration e.g. 30m, 2h, 7d, 2w, 1mo",
                "type": 3,
                "typeLabel": "STRING",
                "required": true,
                "autocomplete": false
              }
            ]
          },
          {
            "name": "remove",
            "description": "Remove a temporary role early",
            "type": 1,
            "typeLabel": "SUB_COMMAND",
            "required": false,
            "autocomplete": false,
            "options": [
              {
                "name": "user",
                "description": "Target user",
                "type": 6,
                "typeLabel": "USER",
                "required": true,
                "autocomplete": false
              },
              {
                "name": "role",
                "description": "Role to remove",
                "type": 8,
                "typeLabel": "ROLE",
                "required": true,
                "autocomplete": false
              }
            ]
          },
          {
            "name": "extend",
            "description": "Extend an active temporary role",
            "type": 1,
            "typeLabel": "SUB_COMMAND",
            "required": false,
            "autocomplete": false,
            "options": [
              {
                "name": "user",
                "description": "Target user",
                "type": 6,
                "typeLabel": "USER",
                "required": true,
                "autocomplete": false
              },
              {
                "name": "role",
                "description": "Role to extend",
                "type": 8,
                "typeLabel": "ROLE",
                "required": true,
                "autocomplete": false
              },
              {
                "name": "duration",
                "description": "Additional duration e.g. 30m, 2h, 7d",
                "type": 3,
                "typeLabel": "STRING",
                "required": true,
                "autocomplete": false
              }
            ]
          },
          {
            "name": "list",
            "description": "List active temporary roles",
            "type": 1,
            "typeLabel": "SUB_COMMAND",
            "required": false,
            "autocomplete": false,
            "options": [
              {
                "name": "user",
                "description": "Filter by user",
                "type": 6,
                "typeLabel": "USER",
                "required": false,
                "autocomplete": false
              }
            ]
          },
          {
            "name": "info",
            "description": "Show an active temporary role",
            "type": 1,
            "typeLabel": "SUB_COMMAND",
            "required": false,
            "autocomplete": false,
            "options": [
              {
                "name": "user",
                "description": "Target user",
                "type": 6,
                "typeLabel": "USER",
                "required": true,
                "autocomplete": false
              },
              {
                "name": "role",
                "description": "Temporary role",
                "type": 8,
                "typeLabel": "ROLE",
                "required": true,
                "autocomplete": false
              }
            ]
          }
        ]
      },
      {
        "name": "remove",
        "description": "Retirer un rôle d'un utilisateur",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "user",
            "description": "L'utilisateur cible",
            "type": 6,
            "typeLabel": "USER",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "role",
            "description": "Rôle à retirer",
            "type": 8,
            "typeLabel": "ROLE",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "list",
        "description": "Lister tous les rôles dans ce serveur",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": []
      }
    ],
    "hasSubcommands": true,
    "usageExamples": [
      "/role info target:@role",
      "/role add user:@user role:@role",
      "/role temprole add user:@user role:@role duration:\"text\"",
      "/role temprole remove user:@user role:@role",
      "/role temprole extend user:@user role:@role duration:\"text\"",
      "/role temprole list [user:@user]",
      "/role temprole info user:@user role:@role",
      "/role remove user:@user role:@role",
      "/role list"
    ],
    "sourcePath": "hono/src/commands/info/role.ts"
  },
  {
    "slug": "server",
    "name": "server",
    "category": "info",
    "categoryLabel": "Info",
    "description": "Obtenir des informations sur le serveur",
    "cooldown": 10,
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "info",
        "description": "Obtenir des informations générales sur le serveur",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "premium",
        "description": "Vérifier le statut premium du serveur",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": true,
    "usageExamples": [
      "/server info",
      "/server premium"
    ],
    "sourcePath": "hono/src/commands/info/server.ts"
  },
  {
    "slug": "user",
    "name": "user",
    "category": "info",
    "categoryLabel": "Info",
    "description": "Obtenir des informations sur un utilisateur",
    "cooldown": 5,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "L'utilisateur sur lequel obtenir des informations",
        "type": 6,
        "typeLabel": "USER",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/user [target:@user]"
    ],
    "sourcePath": "hono/src/commands/info/user.ts"
  },
  {
    "slug": "End Giveaway",
    "name": "End Giveaway",
    "category": "giveaway",
    "categoryLabel": "Giveaway",
    "description": "End a giveaway from the selected message",
    "contexts": [],
    "dmPermission": false,
    "hidden": true,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/End Giveaway"
    ],
    "sourcePath": "hono/src/commands/giveaway/gend.ts"
  },
  {
    "slug": "gblacklist",
    "name": "gblacklist",
    "category": "giveaway",
    "categoryLabel": "Giveaway",
    "description": "Manage giveaway blacklisted roles",
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "add",
        "description": "Block a role from joining giveaways",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "role",
            "description": "Role to block from giveaways",
            "type": 8,
            "typeLabel": "ROLE",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "remove",
        "description": "Remove a role from the giveaway blacklist",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "role",
            "description": "Blacklisted role to remove",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": true
          }
        ]
      },
      {
        "name": "list",
        "description": "List giveaway blacklisted roles",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": true,
    "usageExamples": [
      "/gblacklist add role:@role",
      "/gblacklist remove role:\"text\"",
      "/gblacklist list"
    ],
    "sourcePath": "hono/src/commands/giveaway/gblacklist.ts"
  },
  {
    "slug": "gcreate",
    "name": "gcreate",
    "category": "giveaway",
    "categoryLabel": "Giveaway",
    "description": "Create a new giveaway",
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "duration",
        "description": "Duration like 10m, 2h, or 3d",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "winners",
        "description": "Number of winners to draw",
        "type": 4,
        "typeLabel": "INTEGER",
        "required": true,
        "minValue": 1,
        "maxValue": 25,
        "autocomplete": false
      },
      {
        "name": "prize",
        "description": "Prize for the giveaway",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "channel",
        "description": "Channel where the giveaway will be posted",
        "type": 7,
        "typeLabel": "CHANNEL",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "emoji",
        "description": "Emoji to use for the giveaway button/reaction and result message",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "entry_mode",
        "description": "How users enter the giveaway",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false,
        "choices": [
          {
            "name": "Button",
            "value": "button"
          },
          {
            "name": "Reaction emoji",
            "value": "reaction"
          }
        ]
      },
      {
        "name": "template",
        "description": "Saved giveaway template to use",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": true
      },
      {
        "name": "count",
        "description": "How many giveaways to create in sequence",
        "type": 4,
        "typeLabel": "INTEGER",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "delay_seconds",
        "description": "Delay between batch giveaways in seconds",
        "type": 4,
        "typeLabel": "INTEGER",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/gcreate duration:\"text\" winners:123 prize:\"text\" [channel:#channel] [emoji:\"text\"] [entry_mode:\"text\"] [template:\"text\"] [count:123] [delay_seconds:123]"
    ],
    "sourcePath": "hono/src/commands/giveaway/gcreate.ts"
  },
  {
    "slug": "gduplicate",
    "name": "gduplicate",
    "category": "giveaway",
    "categoryLabel": "Giveaway",
    "description": "Duplicate an existing giveaway",
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "id",
        "description": "Message ID of the giveaway to duplicate",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/gduplicate id:\"text\""
    ],
    "sourcePath": "hono/src/commands/giveaway/gduplicate.ts"
  },
  {
    "slug": "gend",
    "name": "gend",
    "category": "giveaway",
    "categoryLabel": "Giveaway",
    "description": "End a giveaway immediately",
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "message_id",
        "description": "Message ID of the giveaway",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/gend message_id:\"text\""
    ],
    "sourcePath": "hono/src/commands/giveaway/gend.ts"
  },
  {
    "slug": "ginfo",
    "name": "ginfo",
    "category": "giveaway",
    "categoryLabel": "Giveaway",
    "description": "Show giveaway information",
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "message_id",
        "description": "Message ID of the giveaway",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/ginfo message_id:\"text\""
    ],
    "sourcePath": "hono/src/commands/giveaway/ginfo.ts"
  },
  {
    "slug": "greroll",
    "name": "greroll",
    "category": "giveaway",
    "categoryLabel": "Giveaway",
    "description": "Reroll winners for an ended giveaway",
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "message_id",
        "description": "Message ID of the giveaway",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/greroll message_id:\"text\""
    ],
    "sourcePath": "hono/src/commands/giveaway/greroll.ts"
  },
  {
    "slug": "gtemplate",
    "name": "gtemplate",
    "category": "giveaway",
    "categoryLabel": "Giveaway",
    "description": "Manage giveaway templates",
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "create",
        "description": "Create a giveaway template",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "name",
            "description": "Template name",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "maxLength": 100,
            "autocomplete": false
          },
          {
            "name": "emoji",
            "description": "Giveaway button emoji",
            "type": 3,
            "typeLabel": "STRING",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "edit",
        "description": "Edit a giveaway template",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "name",
            "description": "Template to edit",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": true
          },
          {
            "name": "emoji",
            "description": "Giveaway button emoji",
            "type": 3,
            "typeLabel": "STRING",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "delete",
        "description": "Delete a giveaway template",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "name",
            "description": "Template to delete",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": true
          }
        ]
      },
      {
        "name": "list",
        "description": "List giveaway templates",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "variables",
        "description": "List available giveaway template variables",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "set-default",
        "description": "Set the server default giveaway template",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "template",
            "description": "Template to use by default",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": true
          }
        ]
      },
      {
        "name": "reset",
        "description": "Reset the server default giveaway template",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false
      }
    ],
    "hasSubcommands": true,
    "usageExamples": [
      "/gtemplate create name:\"text\" [emoji:\"text\"]",
      "/gtemplate edit name:\"text\" [emoji:\"text\"]",
      "/gtemplate delete name:\"text\"",
      "/gtemplate list",
      "/gtemplate variables",
      "/gtemplate set-default template:\"text\"",
      "/gtemplate reset"
    ],
    "sourcePath": "hono/src/commands/giveaway/gtemplate.ts"
  },
  {
    "slug": "Reroll Giveaway",
    "name": "Reroll Giveaway",
    "category": "giveaway",
    "categoryLabel": "Giveaway",
    "description": "Reroll a giveaway from the selected message",
    "contexts": [],
    "dmPermission": false,
    "hidden": true,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/Reroll Giveaway"
    ],
    "sourcePath": "hono/src/commands/giveaway/greroll.ts"
  },
  {
    "slug": "blush",
    "name": "blush",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Show blushing",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/blush"
    ],
    "sourcePath": "hono/src/commands/social/blush.ts"
  },
  {
    "slug": "bonk",
    "name": "bonk",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Frapper quelqu'un",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "L'utilisateur à frapper",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/bonk target:@user"
    ],
    "sourcePath": "hono/src/commands/social/bonk.ts"
  },
  {
    "slug": "confused",
    "name": "confused",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Express confusion",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/confused"
    ],
    "sourcePath": "hono/src/commands/social/confused.ts"
  },
  {
    "slug": "cry",
    "name": "cry",
    "category": "social",
    "categoryLabel": "Social",
    "description": "pleurer",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/cry"
    ],
    "sourcePath": "hono/src/commands/social/cry.ts"
  },
  {
    "slug": "cuddle",
    "name": "cuddle",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Câliner quelqu'un",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "L'utilisateur à câliner",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/cuddle target:@user"
    ],
    "sourcePath": "hono/src/commands/social/cuddle.ts"
  },
  {
    "slug": "happy",
    "name": "happy",
    "category": "social",
    "categoryLabel": "Social",
    "description": "heureux",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/happy"
    ],
    "sourcePath": "hono/src/commands/social/happy.ts"
  },
  {
    "slug": "highfive",
    "name": "highfive",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Faire un high five avec quelqu'un",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "L'utilisateur pour le high five",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/highfive target:@user"
    ],
    "sourcePath": "hono/src/commands/social/highfive.ts"
  },
  {
    "slug": "hug",
    "name": "hug",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Donnez chaleureusement une étreinte à quelqu'un",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "L'utilisateur à étreindre",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/hug target:@user"
    ],
    "sourcePath": "hono/src/commands/social/hug.ts"
  },
  {
    "slug": "kiss",
    "name": "kiss",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Embrasser quelqu'un sur la joue",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "L'utilisateur à embrasser",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/kiss target:@user"
    ],
    "sourcePath": "hono/src/commands/social/kiss.ts"
  },
  {
    "slug": "lick",
    "name": "lick",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Lécher quelqu'un",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "L'utilisateur à lécher",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/lick target:@user"
    ],
    "sourcePath": "hono/src/commands/social/lick.ts"
  },
  {
    "slug": "pat",
    "name": "pat",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Caresser quelqu'un",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "L'utilisateur à caresser",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/pat target:@user"
    ],
    "sourcePath": "hono/src/commands/social/pat.ts"
  },
  {
    "slug": "poke",
    "name": "poke",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Piquer quelqu'un",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "L'utilisateur à piquer",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/poke target:@user"
    ],
    "sourcePath": "hono/src/commands/social/poke.ts"
  },
  {
    "slug": "sad",
    "name": "sad",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Exprimer la tristesse",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/sad"
    ],
    "sourcePath": "hono/src/commands/social/sad.ts"
  },
  {
    "slug": "slap",
    "name": "slap",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Giffer quelqu'un de manière ludique",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "L'utilisateur à gifler",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      }
    ],
    "hasSubcommands": false,
    "usageExamples": [
      "/slap target:@user"
    ],
    "sourcePath": "hono/src/commands/social/slap.ts"
  },
  {
    "slug": "smile",
    "name": "smile",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Sourire",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/smile"
    ],
    "sourcePath": "hono/src/commands/social/smile.ts"
  },
  {
    "slug": "think",
    "name": "think",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Exprimer la pensée",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/think"
    ],
    "sourcePath": "hono/src/commands/social/think.ts"
  },
  {
    "slug": "wink",
    "name": "wink",
    "category": "social",
    "categoryLabel": "Social",
    "description": "Give a wink",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [],
    "hasSubcommands": false,
    "usageExamples": [
      "/wink"
    ],
    "sourcePath": "hono/src/commands/social/wink.ts"
  },
  {
    "slug": "ticket",
    "name": "ticket",
    "category": "settings",
    "categoryLabel": "Settings",
    "description": "Quản lý ticket",
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "close",
        "description": "Đóng ticket",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "channel",
            "description": "Ticket đang mở cần đóng",
            "type": 3,
            "typeLabel": "STRING",
            "required": false,
            "autocomplete": true
          }
        ]
      },
      {
        "name": "add",
        "description": "Thêm người dùng vào ticket hiện tại",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "user",
            "description": "Người dùng cần thêm vào ticket",
            "type": 6,
            "typeLabel": "USER",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "remove",
        "description": "Xóa người dùng khỏi ticket hiện tại",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "user",
            "description": "Người dùng cần xóa khỏi ticket",
            "type": 6,
            "typeLabel": "USER",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "claim",
        "description": "Nhận ticket hiện tại (chỉ dành cho staff)",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "rename",
        "description": "Đổi tên kênh ticket hiện tại",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "name",
            "description": "Tên mới cho kênh ticket",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": false
          }
        ]
      }
    ],
    "hasSubcommands": true,
    "usageExamples": [
      "/ticket close [channel:\"text\"]",
      "/ticket add user:@user",
      "/ticket remove user:@user",
      "/ticket claim",
      "/ticket rename name:\"text\""
    ],
    "sourcePath": "hono/src/commands/settings/ticket.ts"
  }
];
