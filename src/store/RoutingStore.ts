import type { Route } from '../types/routes';

import { makeAutoObservable } from 'mobx';

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
         this.page = page;
         this.fadingOut = false;
      }, TRANSITION_DURATION);
   }
}
