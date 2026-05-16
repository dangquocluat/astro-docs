export const generatedDocsCommands = [
  {
    "slug": "8ball",
    "name": "8ball",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Ask the magic 8-ball a question",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "question",
        "description": "The question you want to ask the 8-ball",
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
    "description": "Convert text to ASCII art",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "text",
        "description": "The text to convert to ASCII art (max 10 characters)",
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
    "description": "Ban a member from the server",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "The member to ban",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "reason",
        "description": "Reason for the ban",
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
    "description": "Get a random cat picture",
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
    "description": "Flip a coin - heads or tails?",
    "cooldown": 2,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "choice",
        "description": "Choose heads or tails (optional, leave empty to just flip)",
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
    "description": "Roll one or more dice",
    "cooldown": 2,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "sides",
        "description": "Number of sides on the dice (default: 6)",
        "type": 4,
        "typeLabel": "INTEGER",
        "required": false,
        "minValue": 2,
        "maxValue": 100,
        "autocomplete": false
      },
      {
        "name": "count",
        "description": "Number of dice to roll (default: 1)",
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
    "description": "Get a random dog picture",
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
    "description": "Kick a member from the server",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "The member to kick",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "reason",
        "description": "Reason for the kick",
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
    "description": "Get a random meme",
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
    "description": "Rate something on a scale of 1-10",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "thing",
        "description": "What do you want to rate?",
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
    "description": "Play Rock Paper Scissors against the bot",
    "cooldown": 2,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "choice",
        "description": "Choose rock, paper, or scissors",
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
    "description": "Ship two people and see their compatibility",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user1",
        "description": "The first person to ship",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "user2",
        "description": "The second person to ship",
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
    "description": "Timeout a member",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "The member to timeout",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "duration",
        "description": "Duration (e.g. 10s, 5m, 1h, 7d). Max 28 days.",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "reason",
        "description": "Reason for the timeout",
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
    "description": "List all commands or get help for a specific command",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "command",
        "description": "The command to get help for",
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
    "description": "Set the bot language for this server",
    "contexts": [],
    "dmPermission": false,
    "defaultMemberPermissions": "32",
    "hidden": false,
    "options": [
      {
        "name": "language",
        "description": "Language to use for this server",
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
    "description": "Check bot latency",
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
    "description": "Steal emojis from another server",
    "cooldown": 10,
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "emoji",
        "description": "The emojis to steal (up to 25)",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "name",
        "description": "Name for the new emoji (optional, +1 +2 for multiple)",
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
    "description": "Generate a Discord <t:> timestamp",
    "cooldown": 3,
    "contexts": [],
    "dmPermission": true,
    "hidden": false,
    "options": [
      {
        "name": "date",
        "description": "Date (YYYY-MM-DD, epoch seconds, or natural language)",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "time",
        "description": "Time (HH:MM, defaults to 00:00)",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "style",
        "description": "Timestamp style (default: F)",
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
    "description": "Translate text using AI",
    "cooldown": 5,
    "contexts": [],
    "dmPermission": true,
    "hidden": false,
    "options": [
      {
        "name": "text",
        "description": "Text to translate",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "source",
        "description": "Source language",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "target",
        "description": "Target language",
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
    "description": "View a user's avatar",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "The user to view the avatar of",
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
    "description": "View a user's banner",
    "cooldown": 5,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "The user to view the banner of",
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
    "description": "Manage channels",
    "cooldown": 3,
    "contexts": [],
    "dmPermission": false,
    "defaultMemberPermissions": "16",
    "hidden": false,
    "options": [
      {
        "name": "info",
        "description": "Get information about a channel",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "The channel to get information about",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "create",
        "description": "Create a new channel",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "type",
            "description": "Channel type",
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
            "description": "Channel name",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "category",
            "description": "Parent category",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "topic",
            "description": "Channel topic",
            "type": 3,
            "typeLabel": "STRING",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "delete",
        "description": "Delete a channel",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Channel to delete (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "rename",
        "description": "Rename a channel",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "name",
            "description": "New channel name",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Channel to rename (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "clone",
        "description": "Clone a channel",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Channel to clone (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "move",
        "description": "Move a channel to a different position",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "position",
            "description": "New position (0-based)",
            "type": 4,
            "typeLabel": "INTEGER",
            "required": true,
            "minValue": 0,
            "maxValue": 500,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Channel to move (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "category",
            "description": "Move into a different category",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "nsfw",
        "description": "Toggle NSFW on a channel",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "enabled",
            "description": "Enable or disable NSFW",
            "type": 5,
            "typeLabel": "BOOLEAN",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Channel to modify (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "slowmode",
        "description": "Set slowmode on a channel",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "seconds",
            "description": "Slowmode delay in seconds (0 = off, max 21600)",
            "type": 4,
            "typeLabel": "INTEGER",
            "required": true,
            "minValue": 0,
            "maxValue": 21600,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Channel to modify (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "lock",
        "description": "Lock a channel — deny @everyone from sending messages",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Channel to lock (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "unlock",
        "description": "Unlock a channel — restore @everyone send messages",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Channel to unlock (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "viewlock",
        "description": "Hide a channel from @everyone",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Channel to hide (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "setperm",
        "description": "Set a permission for a role or user in a channel",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "permission",
            "description": "Permission to set",
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
            "description": "Allow, deny, or reset the permission",
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
            "description": "Role to set permission for",
            "type": 8,
            "typeLabel": "ROLE",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "user",
            "description": "User to set permission for",
            "type": 6,
            "typeLabel": "USER",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Channel to modify (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "sync",
        "description": "Sync channel permissions with its parent category",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Channel to sync (defaults to current)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "resetperm",
        "description": "Remove all permission overwrites for a role or user",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "role",
            "description": "Role to reset permissions for",
            "type": 8,
            "typeLabel": "ROLE",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "user",
            "description": "User to reset permissions for",
            "type": 6,
            "typeLabel": "USER",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Channel to modify (defaults to current)",
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
    "description": "Get the member count of the server",
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
    "description": "Manage or get information about roles",
    "cooldown": 5,
    "contexts": [],
    "dmPermission": false,
    "defaultMemberPermissions": "32",
    "hidden": false,
    "options": [
      {
        "name": "info",
        "description": "Get information about a role",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "The role to get information about",
            "type": 8,
            "typeLabel": "ROLE",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "add",
        "description": "Add a role to a user",
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
            "description": "Role to add",
            "type": 8,
            "typeLabel": "ROLE",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "temprole",
        "description": "Manage temporary roles",
        "type": 2,
        "typeLabel": "SUB_COMMAND_GROUP",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "add",
            "description": "Temporarily assign a role to a user",
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
        "description": "Remove a role from a user",
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
        "name": "list",
        "description": "List all roles in this server",
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
    "description": "Get information about the server",
    "cooldown": 10,
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "info",
        "description": "Get general information about the server",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "premium",
        "description": "Check the bot premium subscription status of this server",
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
    "description": "Get information about a user",
    "cooldown": 5,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "The user to get information about",
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
    "description": "Bonk someone",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "The user to bonk",
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
    "description": "cry",
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
    "description": "Cuddle someone",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "The user to cuddle",
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
    "description": "happy",
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
    "description": "Give a high five",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "The user to high five",
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
    "description": "Give someone a warm hug",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "The user to hug",
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
    "description": "Give someone a sweet kiss",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "The user to kiss",
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
    "description": "Lick someone",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "The user to lick",
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
    "description": "Pat someone",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "The user to pat",
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
    "description": "Poke someone",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "The user to poke",
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
    "description": "Express sadness",
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
    "description": "Give someone a playful slap",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "The user to slap",
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
    "description": "Smile",
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
    "description": "Express thinking",
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
