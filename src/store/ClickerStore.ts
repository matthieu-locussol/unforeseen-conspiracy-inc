import type { ClickData, ClickerId, SerializedClickerData } from '../types/clicker';
import type { GameStore } from './GameStore';

import { Decimal } from 'decimal.js';
import { makeAutoObservable } from 'mobx';

import { CLICKERS } from '../data/clicker';

export class ClickerStore {
   private _store: GameStore;

   public id!: ClickerId;

   public baseClickValue!: Decimal;

   public clickMultiplier!: Decimal;

   public criticalChance!: Decimal;

   public criticalMultiplier!: Decimal;

   public comboMultiplier!: Decimal;

   public maxComboMultiplier!: Decimal;

   public comboTimeWindow!: number;

   public lastClickTime!: number;

   public clickCount!: Decimal;

   constructor(id: ClickerId, gameStore: GameStore) {
      makeAutoObservable(this);

      this._store = gameStore;

      this._initialize(id);
   }

   public click(): ClickData {
      this.updateCombo();

      let value = this.getEffectiveClickValue.add(this._store.getClickScalingValue('proofs'));

      const effectiveCriticalChance = this._store.getClickCriticalChance();
      const effectiveCriticalMultiplier = this._store.getClickCriticalMultiplier();

      const isCritical = Decimal.random().lessThan(effectiveCriticalChance);

      if (isCritical) {
         value = value.mul(effectiveCriticalMultiplier);
      }

      return { value, isCritical, combo: this.comboMultiplier };
   }

   private updateCombo(): void {
      const now = Date.now();
      const delta = now - this.lastClickTime;

      if (delta < this.comboTimeWindow) {
         this.clickCount = this.clickCount.add(1);
         this.comboMultiplier = Decimal(1).add(
            Decimal.min(this.clickCount.mul(0.1), this.maxComboMultiplier),
         );
      } else {
         this.clickCount = new Decimal(1);
         this.comboMultiplier = new Decimal(1);
      }

      this.lastClickTime = now;
   }

   public get getEffectiveClickValue(): Decimal {
      return this.baseClickValue.mul(this.clickMultiplier).mul(this.comboMultiplier);
   }

   public serialize(): SerializedClickerData {
      return {
         id: this.id,
         baseClickValue: this.baseClickValue.toString(),
         clickMultiplier: this.clickMultiplier.toString(),
         criticalChance: this.criticalChance.toString(),
         criticalMultiplier: this.criticalMultiplier.toString(),
         comboMultiplier: this.comboMultiplier.toString(),
         maxComboMultiplier: this.maxComboMultiplier.toString(),
         comboTimeWindow: this.comboTimeWindow,
         lastClickTime: this.lastClickTime,
         clickCount: this.clickCount.toString(),
      };
   }

   public deserialize(data: SerializedClickerData): void {
      this.baseClickValue = new Decimal(data.baseClickValue);
      this.clickMultiplier = new Decimal(data.clickMultiplier);
      this.criticalChance = new Decimal(data.criticalChance);
      this.criticalMultiplier = new Decimal(data.criticalMultiplier);
      this.comboMultiplier = new Decimal(data.comboMultiplier);
      this.maxComboMultiplier = new Decimal(data.maxComboMultiplier);
      this.comboTimeWindow = data.comboTimeWindow;
      this.lastClickTime = data.lastClickTime;
      this.clickCount = new Decimal(data.clickCount);
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
