export const languages = {
	vi: "Tieng Viet",
	en: "English",
};

export const defaultLang = "vi";

export const ui = {
	vi: {
		meta: {
			title: "Tài liệu lệnh Luryon",
			description: "Tra cứu nhanh các lệnh Discord của Luryon theo danh mục, quyền hạn và cách sử dụng.",
		},
			home: {
			badge: "Command docs",
			title: "Tài liệu lệnh Luryon",
			searchLabel: "Tìm lệnh",
			searchPlaceholder: "Nhập tên hoặc mô tả lệnh...",
			noSearchResults: "Không tìm thấy lệnh phù hợp.",
			categoriesTitle: "Danh mục",
			allCategories: "Tất cả",
			commandsTitle: "Danh sách lệnh",
			commandsCount: "lệnh",
			optionsLabel: "Tuỳ chọn",
			examplesLabel: "Ví dụ",
			cooldownLabel: "Cooldown",
			requiredLabel: "Bắt buộc",
			optionalLabel: "Không bắt buộc",
			emptyOptions: "Không có tuỳ chọn.",
		},
	},
	en: {
		meta: {
			title: "Luryon Command Docs",
			description: "Quickly browse Luryon Discord commands by category, permissions, and usage.",
		},
			home: {
			badge: "Command docs",
			title: "Luryon command documentation",
			searchLabel: "Search commands",
			searchPlaceholder: "Type a command name or description...",
			noSearchResults: "No matching commands found.",
			categoriesTitle: "Categories",
			allCategories: "All",
			commandsTitle: "Commands",
			commandsCount: "commands",
			optionsLabel: "Options",
			examplesLabel: "Examples",
			cooldownLabel: "Cooldown",
			requiredLabel: "Required",
			optionalLabel: "Optional",
			emptyOptions: "No options.",
		},
	},
} as const;

export type Lang = keyof typeof languages;
