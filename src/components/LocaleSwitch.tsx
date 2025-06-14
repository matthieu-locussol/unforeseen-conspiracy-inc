import { useI18n } from '../i18n/i18n';

import { Button } from './core/ui/button';

export const LocaleSwitch = () => {
   const i18n = useI18n();
   const currentLanguage = i18n.getLocale();

   return (
      <div className="flex w-full items-center gap-2">
         <Button
            aria-pressed={currentLanguage === 'en'}
            className="w-full"
            disabled={currentLanguage === 'en'}
            variant="secondary"
            onClick={() => i18n.setLocale('en')}
         >
            English
         </Button>
         <Button
            aria-pressed={currentLanguage === 'fr'}
            className="w-full"
            disabled={currentLanguage === 'fr'}
            variant="secondary"
            onClick={() => i18n.setLocale('fr')}
         >
            Français
         </Button>
      </div>
   );
};
