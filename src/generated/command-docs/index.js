import { generatedDocsCommands as enCommands } from "./en.js";
import { generatedDocsCommands as frCommands } from "./fr.js";
import { generatedDocsCommands as thCommands } from "./th.js";
import { generatedDocsCommands as viCommands } from "./vi.js";

const commandDocsByLang = {
	en: enCommands,
	fr: frCommands,
	th: thCommands,
	vi: viCommands,
};

export function getGeneratedDocsCommands(lang) {
	return commandDocsByLang[lang] ?? viCommands;
}

export { commandDocsByLang };
