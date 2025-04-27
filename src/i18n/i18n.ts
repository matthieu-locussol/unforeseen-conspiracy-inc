import type { Locale, Translation } from '../types/i18n';

import { useEffect, useState } from 'react';

import { LOCALSTORAGE_I18N_KEY } from '../data/constants';
import { LOCALES, TRANSLATIONS } from '../data/i18n';

class I18nManager {
   private locale: Locale;
   private listeners: Array<() => void> = [];

   constructor() {
      this.locale = this.detectInitialLocale();
   }

   private detectInitialLocale(): Locale {
      try {
         // First check localStorage
         const savedLocale = localStorage.getItem(LOCALSTORAGE_I18N_KEY);

         if (savedLocale && this.isValidLocale(savedLocale)) {
            return savedLocale as Locale;
         }

         // Then try to detect from browser
         const browserLocales = navigator.languages || [navigator.language];

         // Look for exact matches first (en-US -> en-US)
         for (const locale of browserLocales) {
            const exactMatch = LOCALES.find((l) => l === locale);

            if (exactMatch) {
               return exactMatch;
            }
         }

         // Then look for locale base matches (en-US -> en)
         for (const locale of browserLocales) {
            const baseLocale = locale.split('-')[0].toLowerCase();
            const baseMatch = LOCALES.find((l) => l === baseLocale);

            if (baseMatch) {
               return baseMatch;
            }
         }

         return 'en';
      } catch (error) {
         console.warn('Failed to detect locale:', error);

         return 'en';
      }
   }

   private isValidLocale(locale: string): boolean {
      return LOCALES.includes(locale as Locale);
   }

   get t(): Translation {
      return TRANSLATIONS[this.locale];
   }

   public setLocale(locale: Locale): void {
      if (this.locale !== locale) {
         this.locale = locale;

         try {
            localStorage.setItem(LOCALSTORAGE_I18N_KEY, locale);
         } catch (error) {
            console.warn('Could not save locale preference:', error);
         }

         this.notifyListeners();
      }
   }

   public getLocale(): Locale {
      return this.locale;
   }

   public subscribe(listener: () => void): () => void {
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
