import type { InitOptions } from 'i18next';

export const FALLBACK_LOCALE = 'en-US';
export const supportedLocales = ['en-US', 'sv-SE', 'de-DE', 'nb-NO', 'fi-FI', 'da-DK'] as const;
export type Locales = (typeof supportedLocales)[number];

export const LANGUAGE_COOKIE = 'user-locale';

export function getOptions(lang = FALLBACK_LOCALE, ns: string | Array<string> = 'common'): InitOptions {
	return {
		// debug: true, // Set to true to see console logs
		load: 'currentOnly',
		supportedLngs: supportedLocales,
		fallbackLng: FALLBACK_LOCALE,
		lng: lang,
		ns,
		react: { transSupportBasicHtmlNodes: true },
	};
}
