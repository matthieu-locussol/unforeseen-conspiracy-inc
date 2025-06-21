import type { Clicker } from '../types/clicker';

import Decimal from 'decimal.js';

export const CLICKERS: Clicker[] = [
   {
      id: 'default',
      baseClickValue: new Decimal(1),
      clickMultiplier: new Decimal(1),
      criticalChance: new Decimal(0.0),
      criticalMultiplier: new Decimal(2),
      comboMultiplier: new Decimal(1),
      maxComboMultiplier: new Decimal(1.5),
      comboTimeWindow: 1000,
      lastClickTime: 0,
      clickCount: new Decimal(0),
   },
];
