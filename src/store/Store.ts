import { makeAutoObservable } from 'mobx';

import { GameStore } from './GameStore';
import { HudStore } from './HudStore';
import { RoutingStore } from './RoutingStore';
import { SaveStore } from './SaveStore';

export class Store {
   public gameStore: GameStore;

   public hudStore: HudStore;

   public routingStore: RoutingStore;

   public saveStore: SaveStore;

   constructor() {
      makeAutoObservable(this);

      this.gameStore = new GameStore();
      this.hudStore = new HudStore();
      this.routingStore = new RoutingStore();
      this.saveStore = new SaveStore(this.gameStore);
   }
}

export const store = new Store();
