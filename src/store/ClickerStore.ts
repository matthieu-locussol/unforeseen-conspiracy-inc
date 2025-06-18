import type { ClickData, ClickerId, SerializedClickerData } from '../types/clicker';

import { makeAutoObservable } from 'mobx';

import { CLICKERS } from '../data/clicker';

export class ClickerStore {
   public id!: ClickerId;

   public baseClickValue!: number;

   public clickMultiplier!: number;

   public criticalChance!: number;

   public criticalMultiplier!: number;

   public comboMultiplier!: number;

   public maxComboMultiplier!: number;

   public comboTimeWindow!: number;

   public lastClickTime!: number;

   public clickCount!: number;

   constructor(id: ClickerId) {
      makeAutoObservable(this);

      this._initialize(id);
   }

   public click(): ClickData {
      this.updateCombo();

      let value = this.baseClickValue * this.clickMultiplier * this.comboMultiplier;

      const isCritical = Math.random() < this.criticalChance;

      if (isCritical) {
         value *= this.criticalMultiplier;
      }

      return { value, isCritical, combo: this.comboMultiplier };
   }

   private updateCombo(): void {
      const now = Date.now();
      const delta = now - this.lastClickTime;

      if (delta < this.comboTimeWindow) {
         this.clickCount++;
         this.comboMultiplier = 1 + Math.min(this.clickCount * 0.1, this.maxComboMultiplier);
      } else {
         this.clickCount = 1;
         this.comboMultiplier = 1;
      }

      this.lastClickTime = now;
   }

   public getEffectiveClickValue(): number {
      return this.baseClickValue * this.clickMultiplier * (1 + this.comboMultiplier);
   }

   public upgradeBaseClickValue(amount: number): void {
      this.baseClickValue += amount;
   }

   public upgradeClickMultiplier(amount: number): void {
      this.clickMultiplier += amount;
   }

   public upgradeCriticalChance(amount: number): void {
      this.criticalChance += amount;

      if (this.criticalChance > 1) {
         this.criticalChance = 1;
      }
   }

   public upgradeCriticalMultiplier(amount: number): void {
      this.criticalMultiplier += amount;
   }

   public serialize(): SerializedClickerData {
      return {
         id: this.id,
         baseClickValue: this.baseClickValue,
         clickMultiplier: this.clickMultiplier,
         criticalChance: this.criticalChance,
         criticalMultiplier: this.criticalMultiplier,
         comboMultiplier: this.comboMultiplier,
         maxComboMultiplier: this.maxComboMultiplier,
         comboTimeWindow: this.comboTimeWindow,
         lastClickTime: this.lastClickTime,
         clickCount: this.clickCount,
      };
   }

   public deserialize(data: SerializedClickerData): void {
      this.baseClickValue = data.baseClickValue;
      this.clickMultiplier = data.clickMultiplier;
      this.criticalChance = data.criticalChance;
      this.criticalMultiplier = data.criticalMultiplier;
      this.comboMultiplier = data.comboMultiplier;
      this.maxComboMultiplier = data.maxComboMultiplier;
      this.comboTimeWindow = data.comboTimeWindow;
      this.lastClickTime = data.lastClickTime;
      this.clickCount = data.clickCount;
   }

   private _initialize(id: ClickerId): void {
      const data = CLICKERS.find((clicker) => clicker.id === id);

      if (data === undefined) {
         throw new Error(`No clicker found with id: '${id}'`);
      }

      this.id = id;

      this.baseClickValue = data.baseClickValue;
      this.clickMultiplier = data.clickMultiplier;
      this.criticalChance = data.criticalChance;
      this.criticalMultiplier = data.criticalMultiplier;
      this.comboMultiplier = data.comboMultiplier;
      this.maxComboMultiplier = data.maxComboMultiplier;
      this.comboTimeWindow = data.comboTimeWindow;
      this.lastClickTime = data.lastClickTime;
      this.clickCount = data.clickCount;
   }
}
