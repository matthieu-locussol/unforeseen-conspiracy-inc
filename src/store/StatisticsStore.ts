import { makeAutoObservable } from 'mobx';

export interface StatisticsData {
   startTime: number;
   lastPrestigeTime: number;
   totalPlayTime: number;
   totalProofsGenerated: number;
   totalFollowersGenerated: number;
   totalParanoiaGenerated: number;
   totalClicks: number;
   totalGeneratorsPurchased: Record<string, number>;
   totalGeneratorsUnlocked: number;
   totalPrestiges: number;
}

export class StatisticsStore {
   // Time tracking
   public startTime: number;
   public lastPrestigeTime: number;
   public totalPlayTime: number = 0;

   // Resource tracking
   public totalProofsGenerated: number = 0;
   public totalFollowersGenerated: number = 0;
   public totalParanoiaGenerated: number = 0;

   // Click tracking
   public totalClicks: number = 0;

   // Generator tracking
   public totalGeneratorsPurchased: Record<string, number> = {};
   public totalGeneratorsUnlocked: number = 0;

   // Prestige tracking
   public totalPrestiges: number = 0;

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

   public trackResourceGeneration(proofs: number, followers: number, paranoia: number): void {
      this.totalProofsGenerated += proofs;
      this.totalFollowersGenerated += followers;
      this.totalParanoiaGenerated += paranoia;
   }

   public trackClicks(count: number): void {
      this.totalClicks += count;
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
      this.totalPrestiges++;
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
         totalProofsGenerated: this.totalProofsGenerated,
         totalFollowersGenerated: this.totalFollowersGenerated,
         totalParanoiaGenerated: this.totalParanoiaGenerated,
         totalClicks: this.totalClicks,
         totalGeneratorsPurchased: { ...this.totalGeneratorsPurchased },
         totalGeneratorsUnlocked: this.totalGeneratorsUnlocked,
         totalPrestiges: this.totalPrestiges,
      };
   }

   public deserialize(data: StatisticsData): void {
      if (data) {
         // Time tracking
         this.startTime = Date.now(); // Reset start time to now
         this.lastPrestigeTime = data.lastPrestigeTime;
         this.totalPlayTime = data.totalPlayTime;

         // Resource tracking
         this.totalProofsGenerated = data.totalProofsGenerated;
         this.totalFollowersGenerated = data.totalFollowersGenerated;
         this.totalParanoiaGenerated = data.totalParanoiaGenerated;

         // Click tracking
         this.totalClicks = data.totalClicks;

         // Generator tracking
         this.totalGeneratorsPurchased = { ...data.totalGeneratorsPurchased };
         this.totalGeneratorsUnlocked = data.totalGeneratorsUnlocked;

         // Prestige tracking
         this.totalPrestiges = data.totalPrestiges;
      }
   }
}
