export type ClickerId = 'default';

export interface ClickData {
   value: number;
   isCritical: boolean;
   combo: number;
}

export interface Clicker {
   id: ClickerId;
   baseClickValue: number;
   clickMultiplier: number;
   criticalChance: number;
   criticalMultiplier: number;
   comboMultiplier: number;
   maxComboMultiplier: number;
   comboTimeWindow: number;
   lastClickTime: number;
   clickCount: number;
}

export interface SerializedClickerData {
   id: ClickerId;
   baseClickValue: number;
   clickMultiplier: number;
   criticalChance: number;
   criticalMultiplier: number;
   comboMultiplier: number;
   maxComboMultiplier: number;
   comboTimeWindow: number;
   lastClickTime: number;
   clickCount: number;
}
