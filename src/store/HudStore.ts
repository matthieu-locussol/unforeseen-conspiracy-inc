import Decimal from 'decimal.js';
import { makeAutoObservable } from 'mobx';

export class HudStore {
   public bulkBuy: Decimal = new Decimal(1);

   public isSettingsOpen: boolean = false;

   public isResetOpen: boolean = false;

   constructor() {
      makeAutoObservable(this);
   }

   public setBulkBuy(value: Decimal): void {
      this.bulkBuy = value;
   }

   public setIsSettingsOpen(value: boolean): void {
      this.isSettingsOpen = value;
   }

   public toggleSettings(): void {
      this.isSettingsOpen = !this.isSettingsOpen;
   }

   public setIsResetOpen(value: boolean): void {
      this.isResetOpen = value;
   }

   public toggleReset(): void {
      this.isResetOpen = !this.isResetOpen;
   }
}
