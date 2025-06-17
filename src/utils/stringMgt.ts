import type { I18nManager } from '../i18n/i18n';
import type { Boost } from '../types/upgrades';

export const toUpperCaseFirst = (str: string | undefined): string => {
   if (str === undefined) {
      return '';
   }

   return str.charAt(0).toUpperCase() + str.slice(1);
};

export const stringifyStatsBoost = (boost: Boost, _i18n: I18nManager): string => {
   const valueStr =
      boost.type.includes('multiplier') ||
      boost.type.includes('chance') ||
      boost.type.includes('reduction')
         ? `+${(boost.value * 100).toFixed(0)}%`
         : `+${boost.value}`;

   const targetStr =
      boost.target.type === 'generator'
         ? 'this generator'
         : boost.target.type === 'all_generators'
         ? 'all generators'
         : boost.target.type === 'category'
         ? `${boost.target.id} generators`
         : 'global';

   const typeStr = boost.type.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());

   const resourceStr = boost.resource ? ` ${boost.resource}` : '';

   return `${valueStr} ${typeStr}${resourceStr} for ${targetStr}`;
};
