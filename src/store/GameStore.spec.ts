import { describe, expect, it } from 'vitest';

import { GameStore } from './GameStore';

describe('GameStore', () => {
   it('should toggle the play state', () => {
      const gameStore = new GameStore();

      expect(gameStore.isRunning).toBe(true);

      gameStore.togglePlay();

      expect(gameStore.isRunning).toBe(false);

      gameStore.togglePlay();

      expect(gameStore.isRunning).toBe(true);
   });
});
