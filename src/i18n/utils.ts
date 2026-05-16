import { defaultLang, ui, type Lang } from "./ui";

export type { Lang } from "./ui";

export function isLang(lang: string | undefined): lang is Lang {
	return Boolean(lang && lang in ui);
}

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split("/");
	return isLang(lang) ? lang : defaultLang;
}

export function useTranslations(lang: Lang) {
	return ui[lang];
}

export function getLocalizedPath(lang: Lang, path = "") {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	return `/${lang}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function getPathWithoutLang(pathname: string) {
	const parts = pathname.split("/").filter(Boolean);
	if (isLang(parts[0])) {
		parts.shift();
	}

	return `/${parts.join("/")}`;
}
