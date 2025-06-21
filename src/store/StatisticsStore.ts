import Decimal from 'decimal.js';
import { makeAutoObservable } from 'mobx';

export interface StatisticsData {
   startTime: number;
   lastPrestigeTime: number;
   totalPlayTime: number;
   totalProofsGenerated: string;
   totalFollowersGenerated: string;
   totalParanoiaGenerated: string;
   totalClicks: string;
   totalGeneratorsPurchased: Record<string, number>;
   totalGeneratorsUnlocked: number;
   totalPrestiges: string;
}

export class StatisticsStore {
   // Time tracking
   public startTime: number;
   public lastPrestigeTime: number;
   public totalPlayTime: number = 0;

   // Resource tracking
   public totalProofsGenerated: Decimal = new Decimal(0);
   public totalFollowersGenerated: Decimal = new Decimal(0);
   public totalParanoiaGenerated: Decimal = new Decimal(0);

   // Click tracking
   public totalClicks: Decimal = new Decimal(0);

   // Generator tracking
   public totalGeneratorsPurchased: Record<string, number> = {};
   public totalGeneratorsUnlocked: number = 0;

   // Prestige tracking
   public totalPrestiges: Decimal = new Decimal(0);

   constructor() {
      makeAutoObservable(this);

      const now = Date.now();

      this.startTime = now;
      this.lastPrestigeTime = now;
   }

   public updatePlayTime(): void {
      const now = Date.now();
      const delta = now - this.startTime;

      this.totalPlayTime += delta / 1000;
      this.startTime = now;
   }

   public trackResourceGeneration(proofs: Decimal, followers: Decimal, paranoia: Decimal): void {
      this.totalProofsGenerated = this.totalProofsGenerated.add(proofs);
      this.totalFollowersGenerated = this.totalFollowersGenerated.add(followers);
      this.totalParanoiaGenerated = this.totalParanoiaGenerated.add(paranoia);
   }

   public trackClicks(count: Decimal): void {
      this.totalClicks = this.totalClicks.add(count);
   }

   public trackGeneratorPurchase(generatorId: string, count: number): void {
      if (!this.totalGeneratorsPurchased[generatorId]) {
         this.totalGeneratorsPurchased[generatorId] = 0;
      }

      this.totalGeneratorsPurchased[generatorId] += count;
   }

   public trackGeneratorUnlock(): void {
      this.totalGeneratorsUnlocked++;
   }

   public trackPrestige(): void {
      this.totalPrestiges = this.totalPrestiges.add(1);
      this.lastPrestigeTime = Date.now();
   }

   public getTimeSinceStart(): number {
      return this.totalPlayTime + (Date.now() - this.startTime) / 1000;
   }

   public getTimeSinceLastPrestige(): number {
      return (Date.now() - this.lastPrestigeTime) / 1000;
   }

   public resetForPrestige(): void {
      this.trackPrestige();
      this.updatePlayTime();

      this.lastPrestigeTime = Date.now();
   }

   public serialize(): StatisticsData {
      this.updatePlayTime();

      return {
         startTime: this.startTime,
         lastPrestigeTime: this.lastPrestigeTime,
         totalPlayTime: this.totalPlayTime,
         totalProofsGenerated: this.totalProofsGenerated.toString(),
         totalFollowersGenerated: this.totalFollowersGenerated.toString(),
         totalParanoiaGenerated: this.totalParanoiaGenerated.toString(),
         totalClicks: this.totalClicks.toString(),
         totalGeneratorsPurchased: { ...this.totalGeneratorsPurchased },
         totalGeneratorsUnlocked: this.totalGeneratorsUnlocked,
         totalPrestiges: this.totalPrestiges.toString(),
      };
   }

   public deserialize(data: StatisticsData): void {
      if (data) {
         // Time tracking
         this.startTime = Date.now(); // Reset start time to now
         this.lastPrestigeTime = data.lastPrestigeTime;
         this.totalPlayTime = data.totalPlayTime;

         // Resource tracking
         this.totalProofsGenerated = new Decimal(data.totalProofsGenerated);
         this.totalFollowersGenerated = new Decimal(data.totalFollowersGenerated);
         this.totalParanoiaGenerated = new Decimal(data.totalParanoiaGenerated);

         // Click tracking
         this.totalClicks = new Decimal(data.totalClicks);

         // Generator tracking
         this.totalGeneratorsPurchased = { ...data.totalGeneratorsPurchased };
         this.totalGeneratorsUnlocked = data.totalGeneratorsUnlocked;

         // Prestige tracking
         this.totalPrestiges = new Decimal(data.totalPrestiges);
      }
   }
}
