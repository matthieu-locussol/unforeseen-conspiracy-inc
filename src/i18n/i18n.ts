import type { Locale, Translation } from '../types/i18n';

import { useEffect, useState } from 'react';

import { LOCALSTORAGE_I18N_KEY } from '../data/constants';
import { LOCALES, TRANSLATIONS } from '../data/i18n';

class I18nManager {
   private language: Locale;
   private listeners: Array<() => void> = [];

   constructor() {
      this.language = this.detectInitialLanguage();
   }

   private detectInitialLanguage(): Locale {
      try {
         // First check localStorage
         const savedLanguage = localStorage.getItem(LOCALSTORAGE_I18N_KEY);

         if (savedLanguage && this.isValidLanguage(savedLanguage)) {
            return savedLanguage as Locale;
         }

         // Then try to detect from browser
         const browserLanguages = navigator.languages || [navigator.language];

         // Look for exact matches first (en-US -> en-US)
         for (const lang of browserLanguages) {
            const exactMatch = LOCALES.find((l) => l === lang);

            if (exactMatch) {
               return exactMatch;
            }
         }

         // Then look for language base matches (en-US -> en)
         for (const lang of browserLanguages) {
            const baseLanguage = lang.split('-')[0].toLowerCase();
            const baseMatch = LOCALES.find((l) => l === baseLanguage);

            if (baseMatch) {
               return baseMatch;
            }
         }

         return 'en';
      } catch (error) {
         console.warn('Failed to detect language:', error);

         return 'en';
      }
   }

   private isValidLanguage(lang: string): boolean {
      return LOCALES.includes(lang as Locale);
   }

   get t(): Translation {
      return TRANSLATIONS[this.language];
   }

   setLanguage(lang: Locale): void {
      if (this.language !== lang) {
         this.language = lang;

         try {
            localStorage.setItem(LOCALSTORAGE_I18N_KEY, lang);
         } catch (error) {
            console.warn('Could not save language preference:', error);
         }

         this.notifyListeners();
      }
   }

   getLanguage(): Locale {
      return this.language;
   }

   subscribe(listener: () => void): () => void {
      this.listeners.push(listener);

      return () => {
         this.listeners = this.listeners.filter((l) => l !== listener);
      };
   }

   private notifyListeners(): void {
      this.listeners.forEach((listener) => listener());
   }
}

const i18n = new I18nManager();

export const useI18n = () => {
   const [, setUpdate] = useState(0);

   useEffect(() => {
      const unsubscribe = i18n.subscribe(() => {
         setUpdate((prev) => prev + 1);
      });

      return unsubscribe;
   }, []);

   return i18n;
};
