import type { CustomIcon } from '../components/core/Icons';
import type {
   Boost,
   Conditions,
   Cost,
   SerializedUpgradeData,
   Upgrade,
   UpgradeId,
} from '../types/upgrades';
import type { GameStore } from './GameStore';

import { makeAutoObservable } from 'mobx';

import { UPGRADES } from '../data/upgrades';

export class UpgradeStore {
   private _store: GameStore;

   public id!: UpgradeId;

   public name!: string;

   public description!: string;

   public icon!: CustomIcon;

   public cost!: Cost;

   public boosts!: Boost[];

   public conditions!: Conditions;

   public unlocked!: boolean;

   constructor(id: UpgradeId, store: GameStore) {
      makeAutoObservable(this);

      this._store = store;

      this._initialize(id);
   }

   public canBuy(proofs: number, followers: number): boolean {
      if (!this._store.checkConditions(this.conditions)) {
         return false;
      }

      return this.cost.proofs <= proofs && this.cost.followers <= followers;
   }

   public buy(): void {
      this.unlocked = true;
   }

   public reset(): void {
      this._initialize(this.id);
   }

   public serialize(): SerializedUpgradeData {
      return {
         id: this.id,
         unlocked: this.unlocked,
      };
   }

   public deserialize(data: SerializedUpgradeData): void {
      this.id = data.id;
      this.unlocked = data.unlocked;
   }

   /**
    * Get the full upgrade data for use in components
    */
   public get upgradeData(): Upgrade {
      return {
         id: this.id,
         name: this.name,
         description: this.description,
         icon: this.icon,
         cost: this.cost,
         boosts: this.boosts,
         conditions: this.conditions,
         unlocked: this.unlocked,
      };
   }

   private _initialize(id: UpgradeId): void {
      const data = UPGRADES.find((upgrade) => upgrade.id === id);

      if (data === undefined) {
         throw new Error(`No upgrade found with id: '${id}'`);
      }

      this.id = id;
      this.name = data.name;
      this.description = data.description;
      this.icon = data.icon;
      this.cost = { ...data.cost };
      this.boosts = [...data.boosts];
      this.conditions = { ...data.conditions };
      this.unlocked = data.unlocked;
   }
}
