import type { Store } from './Store';

import { useContext } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { StoreContext, useStore } from './StoreContext';

vi.mock('react', async () => {
   const actual = await vi.importActual('react');

   return {
      ...actual,
      useContext: vi.fn(),
   };
});

vi.mock('./Store', () => ({
   store: {
      mockStoreProperty: 'testValue',
   },
   Store: class MockStore {},
}));

describe('StoreContext', () => {
   const useContextMock = vi.mocked(useContext);

   beforeEach(() => {
      vi.clearAllMocks();
   });

   describe('useStore', () => {
      it('should return store from context when available', () => {
         const mockStore = { mockProperty: 'test' } as unknown as Store;

         useContextMock.mockReturnValueOnce({ store: mockStore });

         const result = useStore();

         expect(useContextMock).toHaveBeenCalledWith(StoreContext);

         expect(result).toBe(mockStore);
      });

      it('should throw an error when store is not available', () => {
         useContextMock.mockReturnValueOnce({ store: undefined });

         expect(() => useStore()).toThrow('useStore must be used within a StoreProvider.');
      });

      it('should throw an error when store is null', () => {
         useContextMock.mockReturnValueOnce({ store: null as unknown as Store });

         expect(() => useStore()).toThrow('useStore must be used within a StoreProvider.');
      });
   });
});
