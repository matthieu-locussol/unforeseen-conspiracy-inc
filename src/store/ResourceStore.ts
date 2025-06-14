import type { CustomIcon } from '../components/core/Icons';

import { makeAutoObservable } from 'mobx';

import { RESOURCES } from '../data/resources';
import { type ResourceId, type SerializedResourceData } from '../types/resources';

export class ResourceStore {
   public id!: ResourceId;

   public icon!: CustomIcon;

   public baseProduction!: number;

   public productionMultiplier!: number;

   public isClickable!: boolean;

   public value!: number;

   constructor(id: ResourceId) {
      makeAutoObservable(this);

      this._initialize(id);
   }

   public get productionRate(): number {
      return this.baseProduction * this.productionMultiplier;
   }

   public add(amount: number): void {
      this.value += amount;
   }

   public remove(amount: number): boolean {
      if (this.value >= amount) {
         this.value -= amount;

         return true;
      }

      return false;
   }

   public reset(): void {
      this._initialize(this.id);
   }

   public tick(): void {
      const amount = this.productionRate;

      this.add(amount);
   }

   public click(baseClickValue: number, clickMultiplier: number): void {
      if (this.isClickable) {
         const amount = baseClickValue * clickMultiplier;

         this.add(amount);
      }
   }

   public serialize(): SerializedResourceData {
      return {
         id: this.id,
         value: this.value,
      };
   }

   public deserialize(data: SerializedResourceData): void {
      this.value = data.value;
   }

   private _initialize(id: ResourceId): void {
      const data = RESOURCES.find((resource) => resource.id === id);

      if (data === undefined) {
         throw new Error(`No resource found with id: '${id}'`);
      }

      this.id = id;

      this.icon = data.icon;
      this.baseProduction = data.baseProduction;
      this.productionMultiplier = data.productionMultiplier;
      this.isClickable = data.isClickable;

      this.value = 0;
   }
}
