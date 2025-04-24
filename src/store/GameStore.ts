import { makeAutoObservable } from 'mobx';

export class GameStore {
   public count = 0;

   constructor() {
      makeAutoObservable(this);
   }

   public increment() {
      this.count++;
   }
}
