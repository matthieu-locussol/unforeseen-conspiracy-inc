import type { Route } from '../types/routes';

import { makeAutoObservable } from 'mobx';

export class RoutingStore {
   public page: Route = 'launcher';

   constructor() {
      makeAutoObservable(this);
   }

   public setPage(page: Route): void {
      this.page = page;
   }
}
