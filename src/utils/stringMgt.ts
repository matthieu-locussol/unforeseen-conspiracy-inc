import type { I18nManager } from '../i18n/i18n';
import type { Boost } from '../types/upgrades';

export const toUpperCaseFirst = (str: string | undefined): string => {
   if (str === undefined) {
      return '';
   }

   return str.charAt(0).toUpperCase() + str.slice(1);
};

export const interpolate = (
   template: string,
   variables: Record<string, string | number>,
): string => {
   return template.replace(/\{(\w+)\}/g, (match, key) => {
      return variables[key]?.toString() || match;
   });
};

export const stringifyStatsBoost = (boost: Boost, i18n: I18nManager): string => {
   const valueStr =
      boost.type.includes('multiplier') ||
      boost.type.includes('chance') ||
      boost.type.includes('reduction')
         ? `+${(boost.value.toNumber() * 100).toFixed(0)}%`
         : `+${boost.value}`;

   const targetStr =
      boost.target.type === 'generator'
         ? i18n.t.ui.boostTypes.thisGenerator
         : boost.target.type === 'all_generators'
         ? i18n.t.ui.boostTypes.allGenerators
         : boost.target.type === 'category'
         ? i18n.t.ui.boostTypes.categoryGenerators.replace('{category}', boost.target.id)
         : i18n.t.ui.boostTypes.global;

   const typeStr = boost.type.includes('multiplier')
      ? i18n.t.ui.boostTypes.productionMultiplier
      : boost.type.includes('flat')
      ? i18n.t.ui.boostTypes.productionFlat
      : boost.type.includes('speed')
      ? i18n.t.ui.boostTypes.speedMultiplier
      : boost.type.includes('reduction')
      ? i18n.t.ui.boostTypes.costReduction
      : boost.type.includes('chance')
      ? i18n.t.ui.boostTypes.doubleChance
      : boost.type.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());

   const resourceStr = boost.resource ? ` ${boost.resource}` : '';

   return `${valueStr} ${typeStr}${resourceStr} for ${targetStr}`;
};
