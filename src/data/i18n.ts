import type { Locale, Translation } from '../types/i18n';

import { EN } from '../i18n/en';
import { FR } from '../i18n/fr';

export const LOCALES: Locale[] = ['en', 'fr'];

export const TRANSLATIONS: Record<Locale, Translation> = {
   en: EN,
   fr: FR,
};
