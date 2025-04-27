import { useI18n } from '../i18n/i18n';

export const LocaleSwitch = () => {
   const i18n = useI18n();
   const currentLanguage = i18n.getLocale();

   return (
      <div>
         <button
            aria-pressed={currentLanguage === 'en'}
            disabled={currentLanguage === 'en'}
            onClick={() => i18n.setLocale('en')}
         >
            English
         </button>
         <button
            aria-pressed={currentLanguage === 'fr'}
            disabled={currentLanguage === 'fr'}
            onClick={() => i18n.setLocale('fr')}
         >
            Français
         </button>
      </div>
   );
};
