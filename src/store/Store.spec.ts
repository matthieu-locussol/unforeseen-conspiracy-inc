import { beforeEach, describe, expect, it, vi } from 'vitest';

import { GameStore } from './GameStore';
import { Store } from './Store';

vi.mock('./GameStore', () => ({
   GameStore: vi.fn().mockImplementation(() => ({})),
}));

describe('Store', () => {
   let store: Store;

   beforeEach(() => {
      vi.clearAllMocks();

      store = new Store();
   });

   it('should initialize properly', () => {
      expect(store).toBeInstanceOf(Store);
   });

   it('should initialize gameStore with a new GameStore instance', () => {
      expect(GameStore).toHaveBeenCalledTimes(1);

      expect(store).toHaveProperty('gameStore');

      expect(store.gameStore).toBeDefined();
   });
});
