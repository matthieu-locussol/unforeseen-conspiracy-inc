export type ClickerId = 'default';

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
