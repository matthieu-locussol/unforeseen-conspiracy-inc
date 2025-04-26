import type { Clicker } from '../types/clicker';

export const CLICKERS: Clicker[] = [
   {
      id: 'default',
      baseClickValue: 1,
      clickMultiplier: 1,
      criticalChance: 0.0,
      criticalMultiplier: 2,
      comboMultiplier: 0,
      maxComboMultiplier: 1.5,
      comboTimeWindow: 1000,
      lastClickTime: 0,
      clickCount: 0,
   },
];
