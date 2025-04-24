import type { Translation } from './i18n';

export interface Resource {
   i18nKey: keyof Translation['resources'];
   initialValue: number;
}
