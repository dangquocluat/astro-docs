export const generatedDocsCommands = [
  {
    "slug": "8ball",
    "name": "8ball",
    "category": "fun",
    "categoryLabel": "fun",
    "description": "Hỏi quả cầu ma thuật 8-ball một câu hỏi",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "question",
        "description": "Câu hỏi bạn muốn hỏi quả cầu 8-ball",
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
    "description": "Chuyển đổi văn bản thành nghệ thuật ASCII",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "text",
        "description": "Văn bản để chuyển đổi (tối đa 10 ký tự)",
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
    "description": "Ban một thành viên khỏi server",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "Thành viên cần ban",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "reason",
        "description": "Lý do ban",
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
    "description": "Nhận một hình ảnh mèo ngẫu nhiên",
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
    "description": "Tung đồng xu - mặt ngửa hay mặt sấp?",
    "cooldown": 2,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "choice",
        "description": "Chọn mặt ngửa hoặc mặt sấp (tùy chọn)",
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
    "description": "Tung xúc xắc",
    "cooldown": 2,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "sides",
        "description": "Số mặt của xúc xắc (mặc định: 6)",
        "type": 4,
        "typeLabel": "INTEGER",
        "required": false,
        "minValue": 2,
        "maxValue": 100,
        "autocomplete": false
      },
      {
        "name": "count",
        "description": "Số lượng xúc xắc (mặc định: 1)",
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
    "description": "Nhận một hình ảnh chó ngẫu nhiên",
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
    "description": "Kick một thành viên khỏi server",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "Thành viên cần kick",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "reason",
        "description": "Lý do kick",
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
    "description": "Nhận một meme ngẫu nhiên",
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
    "description": "Đánh giá thứ gì đó trên thang điểm 1-10",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "thing",
        "description": "Bạn muốn đánh giá thứ gì?",
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
    "description": "Chơi kéo búa bao với bot",
    "cooldown": 2,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "choice",
        "description": "Chọn kéo, búa hoặc bao",
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
    "description": "Ghép đôi hai người và xem độ hợp nhau",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user1",
        "description": "Người đầu tiên",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "user2",
        "description": "Người thứ hai",
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
    "description": "Timeout một thành viên",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "Thành viên cần timeout",
        "type": 6,
        "typeLabel": "USER",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "duration",
        "description": "Thời lượng (vd: 10s, 5m, 1h, 7d). Tối đa 28 ngày.",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "reason",
        "description": "Lý do timeout",
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
    "description": "Báo lỗi hoặc sự cố",
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
    "description": "Gửi góp ý hoặc đề xuất",
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
    "description": "Hiển thị danh sách lệnh hoặc xem trợ giúp cho lệnh cụ thể",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "command",
        "description": "Tên lệnh cần xem trợ giúp",
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
    "description": "Đặt ngôn ngữ của bot cho server này",
    "contexts": [],
    "dmPermission": false,
    "defaultMemberPermissions": "32",
    "hidden": false,
    "options": [
      {
        "name": "language",
        "description": "Ngôn ngữ muốn sử dụng cho server",
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
    "description": "Kiểm tra độ trễ của bot",
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
    "description": "Sao chép emoji từ server khác",
    "cooldown": 10,
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "emoji",
        "description": "Emoji muốn sao chép (tối đa 25)",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "name",
        "description": "Tên cho emoji mới (tùy chọn, +1 +2 với nhiều emoji)",
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
    "description": "Tạo timestamp Discord <t:>",
    "cooldown": 3,
    "contexts": [],
    "dmPermission": true,
    "hidden": false,
    "options": [
      {
        "name": "date",
        "description": "Ngày (YYYY-MM-DD, epoch giây, hoặc ngôn ngữ tự nhiên)",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "time",
        "description": "Thời gian (HH:MM, mặc định 00:00)",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "style",
        "description": "Kiểu timestamp (mặc định: F)",
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
    "description": "Dịch văn bản bằng AI",
    "cooldown": 5,
    "contexts": [],
    "dmPermission": true,
    "hidden": false,
    "options": [
      {
        "name": "text",
        "description": "Đoạn văn bản cần dịch",
        "type": 3,
        "typeLabel": "STRING",
        "required": true,
        "autocomplete": false
      },
      {
        "name": "source",
        "description": "Ngôn ngữ gốc",
        "type": 3,
        "typeLabel": "STRING",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "target",
        "description": "Ngôn ngữ đích",
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
    "description": "Xem avatar của người dùng",
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "Người dùng để xem avatar",
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
    "description": "Xem banner người dùng",
    "cooldown": 5,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "user",
        "description": "Người dùng cần xem banner",
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
    "description": "Quản lý kênh",
    "cooldown": 3,
    "contexts": [],
    "dmPermission": false,
    "defaultMemberPermissions": "16",
    "hidden": false,
    "options": [
      {
        "name": "info",
        "description": "Xem thông tin kênh",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Kênh cần xem thông tin",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "create",
        "description": "Tạo kênh mới",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "type",
            "description": "Loại kênh",
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
            "description": "Tên kênh",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "category",
            "description": "Danh mục cha",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "topic",
            "description": "Chủ đề kênh",
            "type": 3,
            "typeLabel": "STRING",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "delete",
        "description": "Xoá kênh",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Kênh cần xoá (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "rename",
        "description": "Đổi tên kênh",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "name",
            "description": "Tên kênh mới",
            "type": 3,
            "typeLabel": "STRING",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Kênh cần đổi tên (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "clone",
        "description": "Sao chép kênh",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Kênh cần sao chép (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "move",
        "description": "Di chuyển kênh đến vị trí khác",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "position",
            "description": "Vị trí mới (bắt đầu từ 0)",
            "type": 4,
            "typeLabel": "INTEGER",
            "required": true,
            "minValue": 0,
            "maxValue": 500,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Kênh cần di chuyển (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "category",
            "description": "Chuyển vào danh mục khác",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "nsfw",
        "description": "Bật/tắt NSFW cho kênh",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "enabled",
            "description": "Bật hoặc tắt NSFW",
            "type": 5,
            "typeLabel": "BOOLEAN",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Kênh cần thay đổi (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "slowmode",
        "description": "Đặt slowmode cho kênh",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "seconds",
            "description": "Thời gian slowmode (giây) (0 = tắt, tối đa 21600)",
            "type": 4,
            "typeLabel": "INTEGER",
            "required": true,
            "minValue": 0,
            "maxValue": 21600,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Kênh cần thay đổi (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "lock",
        "description": "Khoá kênh — chặn @everyone gửi tin nhắn",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Kênh cần khoá (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "unlock",
        "description": "Mở khoá kênh — cho phép @everyone gửi tin nhắn",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Kênh cần mở khoá (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "viewlock",
        "description": "Ẩn kênh khỏi @everyone",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Kênh cần ẩn (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "setperm",
        "description": "Đặt quyền cho role/user trong kênh",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "permission",
            "description": "Quyền cần đặt",
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
            "description": "Cho phép, từ chối hoặc đặt lại quyền",
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
            "description": "Role cần đặt quyền",
            "type": 8,
            "typeLabel": "ROLE",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "user",
            "description": "User cần đặt quyền",
            "type": 6,
            "typeLabel": "USER",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Kênh cần thay đổi (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "sync",
        "description": "Đồng bộ quyền kênh với danh mục cha",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Kênh cần đồng bộ (mặc định là kênh hiện tại)",
            "type": 7,
            "typeLabel": "CHANNEL",
            "required": false,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "resetperm",
        "description": "Xoá tất cả quyền ghi đè cho role/user",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "role",
            "description": "Role cần xoá quyền",
            "type": 8,
            "typeLabel": "ROLE",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "user",
            "description": "User cần xoá quyền",
            "type": 6,
            "typeLabel": "USER",
            "required": false,
            "autocomplete": false
          },
          {
            "name": "target",
            "description": "Kênh cần thay đổi (mặc định là kênh hiện tại)",
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
    "description": "Xem số lượng thành viên của máy chủ",
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
    "description": "Quản lý hoặc xem thông tin vai trò",
    "cooldown": 5,
    "contexts": [],
    "dmPermission": false,
    "defaultMemberPermissions": "32",
    "hidden": false,
    "options": [
      {
        "name": "info",
        "description": "Xem thông tin vai trò",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "target",
            "description": "Vai trò cần xem thông tin",
            "type": 8,
            "typeLabel": "ROLE",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "add",
        "description": "Thêm vai trò cho người dùng",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "user",
            "description": "Người dùng mục tiêu",
            "type": 6,
            "typeLabel": "USER",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "role",
            "description": "Vai trò cần thêm",
            "type": 8,
            "typeLabel": "ROLE",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "temprole",
        "description": "Quản lý vai trò tạm thời",
        "type": 2,
        "typeLabel": "SUB_COMMAND_GROUP",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "add",
            "description": "Gán vai trò tạm thời cho người dùng",
            "type": 1,
            "typeLabel": "SUB_COMMAND",
            "required": false,
            "autocomplete": false,
            "options": [
              {
                "name": "user",
                "description": "Người dùng mục tiêu",
                "type": 6,
                "typeLabel": "USER",
                "required": true,
                "autocomplete": false
              },
              {
                "name": "role",
                "description": "Vai trò cần gán",
                "type": 8,
                "typeLabel": "ROLE",
                "required": true,
                "autocomplete": false
              },
              {
                "name": "duration",
                "description": "Thời hạn, ví dụ: 30m, 2h, 7d, 2w, 1mo",
                "type": 3,
                "typeLabel": "STRING",
                "required": true,
                "autocomplete": false
              }
            ]
          },
          {
            "name": "remove",
            "description": "Gỡ vai trò tạm thời trước thời hạn",
            "type": 1,
            "typeLabel": "SUB_COMMAND",
            "required": false,
            "autocomplete": false,
            "options": [
              {
                "name": "user",
                "description": "Người dùng mục tiêu",
                "type": 6,
                "typeLabel": "USER",
                "required": true,
                "autocomplete": false
              },
              {
                "name": "role",
                "description": "Vai trò cần gỡ",
                "type": 8,
                "typeLabel": "ROLE",
                "required": true,
                "autocomplete": false
              }
            ]
          },
          {
            "name": "extend",
            "description": "Gia hạn vai trò tạm thời đang hoạt động",
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
            "description": "Xem danh sách vai trò tạm thời đang hoạt động",
            "type": 1,
            "typeLabel": "SUB_COMMAND",
            "required": false,
            "autocomplete": false,
            "options": [
              {
                "name": "user",
                "description": "Lọc theo người dùng",
                "type": 6,
                "typeLabel": "USER",
                "required": false,
                "autocomplete": false
              }
            ]
          },
          {
            "name": "info",
            "description": "Xem thông tin vai trò tạm thời",
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
        "description": "Xóa vai trò khỏi người dùng",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false,
        "options": [
          {
            "name": "user",
            "description": "Người dùng mục tiêu",
            "type": 6,
            "typeLabel": "USER",
            "required": true,
            "autocomplete": false
          },
          {
            "name": "role",
            "description": "Vai trò cần xóa",
            "type": 8,
            "typeLabel": "ROLE",
            "required": true,
            "autocomplete": false
          }
        ]
      },
      {
        "name": "list",
        "description": "Xem danh sách vai trò của máy chủ",
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
    "description": "Xem thông tin máy chủ",
    "cooldown": 10,
    "contexts": [],
    "dmPermission": false,
    "hidden": false,
    "options": [
      {
        "name": "info",
        "description": "Xem thông tin chung về máy chủ",
        "type": 1,
        "typeLabel": "SUB_COMMAND",
        "required": false,
        "autocomplete": false
      },
      {
        "name": "premium",
        "description": "Kiểm tra trạng thái premium của máy chủ",
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
    "description": "Xem thông tin người dùng",
    "cooldown": 5,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "Người dùng cần xem thông tin",
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
    "description": "Đập ai đó",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "Người cần đập",
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
    "description": "Khóc",
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
    "description": "Ôm ai đó",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "Người cần ôm",
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
    "description": "Vui vẻ",
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
    "description": "Chạm tay cao với ai đó",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "Người cần chạm tay cao",
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
    "description": "Ôm ai đó một cái ấm áp",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "Người cần ôm",
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
    "description": "Hôn ai đó một cái ngọt ngào",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "Người cần hôn",
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
    "description": "Liếm ai đó",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "Người cần liếm",
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
    "description": "Vuốt tay trên đầu ai đó",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "Người cần vuốt",
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
    "description": "Chọc ai đó",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "Người cần chọc",
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
    "description": "Thể hiện sự buồn bã",
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
    "description": "Tát ai đó một cái đùa giỡn",
    "cooldown": 3,
    "contexts": [],
    "hidden": false,
    "options": [
      {
        "name": "target",
        "description": "Người cần tát",
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
    "description": "Mỉm cười",
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
    "description": "Thể hiện sự suy nghĩ",
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
