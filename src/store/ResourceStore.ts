import type { CustomIcon } from '../components/core/Icons';

import Decimal from 'decimal.js';
import { makeAutoObservable } from 'mobx';

import { RESOURCES } from '../data/resources';
import { type ResourceId, type SerializedResourceData } from '../types/resources';

export class ResourceStore {
   public id!: ResourceId;

   public icon!: CustomIcon;

   public baseProduction!: Decimal;

   public productionMultiplier!: Decimal;

   public isClickable!: boolean;

   public value!: Decimal;

   constructor(id: ResourceId) {
      makeAutoObservable(this);

      this._initialize(id);
   }

   public get productionRate(): Decimal {
      return this.baseProduction.mul(this.productionMultiplier);
   }

   public add(amount: Decimal): void {
      this.value = this.value.add(amount);
   }

   public remove(amount: Decimal): boolean {
      if (this.value.greaterThanOrEqualTo(amount)) {
         this.value = this.value.sub(amount);

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

   public click(baseClickValue: Decimal, clickMultiplier: Decimal): void {
      if (this.isClickable) {
         const amount = baseClickValue.mul(clickMultiplier);

         this.add(amount);
      }
   }

   public serialize(): SerializedResourceData {
      return {
         id: this.id,
         value: this.value.toString(),
      };
   }

   public deserialize(data: SerializedResourceData): void {
      this.value = new Decimal(data.value);
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

      this.value = new Decimal(0);
   }
}
