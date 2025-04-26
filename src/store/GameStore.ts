import type { SerializedGameData } from '../types/game';
import type { GeneratorId } from '../types/generators';

import { makeAutoObservable } from 'mobx';

import { GENERATORS } from '../data/generators';

import { ClickerStore } from './ClickerStore';
import { GeneratorStore } from './GeneratorStore';
import { ResourceStore } from './ResourceStore';
import { StatisticsStore } from './StatisticsStore';

export class GameStore {
   // Main game resources
   public proofs: ResourceStore;
   public followers: ResourceStore;
   public paranoia: ResourceStore;

   // Game systems
   public generators: GeneratorStore[];
   public clicker: ClickerStore;
   public statistics: StatisticsStore;

   // Game state
   public lastUpdateTime: number;
   public isRunning: boolean = true;

   constructor() {
      makeAutoObservable(this);

      // Initialize resources - only proofs are clickable
      this.proofs = new ResourceStore('proofs');
      this.followers = new ResourceStore('followers');
      this.paranoia = new ResourceStore('paranoia');

      // Initialize game systems
      this.generators = [];
      this.clicker = new ClickerStore('default');
      this.statistics = new StatisticsStore();

      // Load initial game data
      this.initializeGenerators();

      this.lastUpdateTime = Date.now();
   }

   private initializeGenerators(): void {
      GENERATORS.forEach((generator) => {
         this.generators.push(new GeneratorStore(generator.id));
      });
   }

   public tick(): void {
      if (!this.isRunning) {
         return;
      }

      this.lastUpdateTime = Date.now();

      const previousProofs = this.proofs.value;
      const previousFollowers = this.followers.value;
      const previousParanoia = this.paranoia.value;

      this.generators.forEach((generator) => {
         this.proofs.add(generator.effectiveProduction.proofs);
         this.followers.add(generator.effectiveProduction.followers);
         this.paranoia.add(generator.effectiveProduction.paranoia);
      });

      this.proofs.tick();
      this.followers.tick();
      this.paranoia.tick();

      this.statistics.trackResourceGeneration(
         this.proofs.value - previousProofs,
         this.followers.value - previousFollowers,
         this.paranoia.value - previousParanoia,
      );
   }

   public buyGenerator(id: GeneratorId, amount: number): boolean {
      const generatorStore = this.generators.find((generator) => generator.id === id);

      if (!generatorStore) {
         return false;
      }

      const cost = generatorStore.getCost(amount);

      const successProofs = this.proofs.remove(cost.proofs);
      const successFollowers = this.followers.remove(cost.followers);

      if (!successProofs || !successFollowers) {
         return false;
      }

      generatorStore.buy(amount);

      return true;
   }

   public clickProofs(): number {
      const value = this.clicker.click();

      this.proofs.add(value);
      this.statistics.trackClicks(1);

      return value;
   }

   public start(): void {
      if (this.isRunning) {
         return;
      }

      this.isRunning = true;
      this.lastUpdateTime = Date.now(); // TODO: Might not be needed?
   }

   public stop(): void {
      if (!this.isRunning) {
         return;
      }

      this.isRunning = false;
   }

   public serialize(): SerializedGameData {
      return {
         proofs: this.proofs.serialize(),
         followers: this.followers.serialize(),
         paranoia: this.paranoia.serialize(),
         generators: this.generators.map((generator) => generator.serialize()),
         clickManager: this.clicker.serialize(),
         statistics: this.statistics.serialize(),
         lastUpdateTime: this.lastUpdateTime,
         isRunning: this.isRunning,
      };
   }

   public deserialize(data: SerializedGameData): void {
      this.proofs.deserialize(data.proofs);
      this.followers.deserialize(data.followers);
      this.paranoia.deserialize(data.paranoia);

      this.generators = data.generators.map((generatorData) => {
         const generator = new GeneratorStore(generatorData.id);

         generator.deserialize(generatorData);

         return generator;
      });

      this.clicker.deserialize(data.clickManager);
      this.statistics.deserialize(data.statistics);

      this.lastUpdateTime = data.lastUpdateTime ?? Date.now();
      this.isRunning = data.isRunning ?? true;
   }
}
