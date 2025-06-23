import { makeAutoObservable } from 'mobx';

import { GameStore } from './GameStore';
import { HudStore } from './HudStore';
import { RoutingStore } from './RoutingStore';
import { SaveStore } from './SaveStore';
import { UpdaterStore } from './UpdaterStore';

export class Store {
   public gameStore: GameStore;

   public hudStore: HudStore;

   public routingStore: RoutingStore;

   public saveStore: SaveStore;

   public updaterStore: UpdaterStore;

   constructor() {
      makeAutoObservable(this);

      this.gameStore = new GameStore();
      this.hudStore = new HudStore();
      this.routingStore = new RoutingStore();
      this.saveStore = new SaveStore(this.gameStore);
      this.updaterStore = new UpdaterStore();
   }
}

export const store = new Store();
