import type { Route } from '../types/routes';

import { makeAutoObservable, runInAction } from 'mobx';

import { TRANSITION_DURATION } from '../data/constants';

export class RoutingStore {
   public page: Route = 'launcher';

   public fadingOut: boolean = false;

   constructor() {
      makeAutoObservable(this);
   }

   public transition(page: Route): void {
      this.fadingOut = true;

      setTimeout(() => {
         runInAction(() => {
            this.page = page;
            this.fadingOut = false;
         });
      }, TRANSITION_DURATION);
   }
}
