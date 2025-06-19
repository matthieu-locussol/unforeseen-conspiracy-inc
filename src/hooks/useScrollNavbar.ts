import { useEffect, useRef, useState } from 'react';

export const useScrollNavbar = (thresholdElementId: string) => {
   const [isNavbarVisible, setIsNavbarVisible] = useState(false);
   const observerRef = useRef<IntersectionObserver | null>(null);

   useEffect(() => {
      const thresholdElement = document.getElementById(thresholdElementId);

      if (!thresholdElement) {
         console.warn(`Element with id "${thresholdElementId}" not found`);

         return;
      }

      observerRef.current = new IntersectionObserver(
         ([entry]) => {
            setIsNavbarVisible(!entry.isIntersecting);
         },
         {
            threshold: 0,
            rootMargin: '0px 0px -1px 0px',
         },
      );

      observerRef.current.observe(thresholdElement);

      return () => {
         if (observerRef.current) {
            observerRef.current.disconnect();
         }
      };
   }, [thresholdElementId]);

   return isNavbarVisible;
};
