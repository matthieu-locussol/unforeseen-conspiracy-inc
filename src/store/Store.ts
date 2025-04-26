import { makeAutoObservable } from 'mobx';

import { GameStore } from './GameStore';
import { SaveStore } from './SaveStore';

export class Store {
   public gameStore: GameStore;

   public saveStore: SaveStore;

   constructor() {
      makeAutoObservable(this);

      this.gameStore = new GameStore();
      this.saveStore = new SaveStore(this.gameStore);
   }
}

export const store = new Store();
