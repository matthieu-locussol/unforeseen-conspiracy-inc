import { makeAutoObservable } from 'mobx';

export class HudStore {
   public bulkBuy: number = 1;

   public isSettingsOpen: boolean = false;

   constructor() {
      makeAutoObservable(this);
   }

   public setBulkBuy(value: number): void {
      this.bulkBuy = value;
   }

   public setIsSettingsOpen(value: boolean): void {
      this.isSettingsOpen = value;
   }

   public toggleSettings(): void {
      this.isSettingsOpen = !this.isSettingsOpen;
   }
}
