import type Decimal from 'decimal.js';

export type ClickerId = 'default';

export interface ClickData {
   value: Decimal;
   isCritical: boolean;
   combo: Decimal;
}

export interface Clicker {
   id: ClickerId;
   baseClickValue: Decimal;
   clickMultiplier: Decimal;
   criticalChance: Decimal;
   criticalMultiplier: Decimal;
   comboMultiplier: Decimal;
   maxComboMultiplier: Decimal;
   comboTimeWindow: number;
   lastClickTime: number;
   clickCount: Decimal;
}

export interface SerializedClickerData {
   id: ClickerId;
   baseClickValue: string;
   clickMultiplier: string;
   criticalChance: string;
   criticalMultiplier: string;
   comboMultiplier: string;
   maxComboMultiplier: string;
   comboTimeWindow: number;
   lastClickTime: number;
   clickCount: string;
}
