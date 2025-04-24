import { describe, expect, it } from 'vitest';

import { GameStore } from './GameStore';

describe('GameStore', () => {
   it('should increment the count', () => {
      const gameStore = new GameStore();

      expect(gameStore.count).toBe(0);

      gameStore.increment();

      expect(gameStore.count).toBe(1);
   });
});
