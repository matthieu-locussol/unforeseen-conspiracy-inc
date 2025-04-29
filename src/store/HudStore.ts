import { makeAutoObservable } from 'mobx';

export class HudStore {
   public bulkBuy: number = 1;

   constructor() {
      makeAutoObservable(this);
   }

   public setBulkBuy(value: number): void {
      this.bulkBuy = value;
   }
}
