import { useI18n } from '../../i18n/i18n';

export const About = () => {
   const { t } = useI18n();

   return (
      <div className="space-y-4 text-gray-300">
         <p>{t.launcher.aboutText.paragraph1}</p>
         <p dangerouslySetInnerHTML={{ __html: t.launcher.aboutText.paragraph2 }} />
         <p>{t.launcher.aboutText.paragraph3}</p>
         <p className="italic">{t.launcher.aboutText.paragraph4}</p>
      </div>
   );
};
