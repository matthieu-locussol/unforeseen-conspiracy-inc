import type { SerializedGameData } from '../types/game';
import type { GameStore } from './GameStore';

import { makeAutoObservable } from 'mobx';

import { LOCALSTORAGE_SAVE_INTERVAL, LOCALSTORAGE_SAVE_KEY } from '../data/constants';

export class SaveStore {
   private _gameStore: GameStore;

   private _autosaveInterval: number | null = null;

   constructor(gameStore: GameStore) {
      makeAutoObservable(this);

      this._gameStore = gameStore;
   }

   public startAutosave(): void {
      if (this._autosaveInterval !== null) {
         return;
      }

      this._autosaveInterval = window.setInterval(() => {
         this.save();
      }, LOCALSTORAGE_SAVE_INTERVAL);

      window.addEventListener('beforeunload', () => {
         this.save();
      });
   }

   public stopAutosave(): void {
      if (this._autosaveInterval !== null) {
         clearInterval(this._autosaveInterval);
         this._autosaveInterval = null;
      }
   }

   public save(): void {
      try {
         const saveData = this._gameStore.serialize();

         localStorage.setItem(LOCALSTORAGE_SAVE_KEY, JSON.stringify(saveData));
      } catch (error) {
         console.error('Failed to save game:', error);
      }
   }

   public load(): boolean {
      try {
         const saveDataStr = localStorage.getItem(LOCALSTORAGE_SAVE_KEY);

         if (!saveDataStr) {
            return false;
         }

         const saveData = JSON.parse(saveDataStr) as SerializedGameData;

         this._gameStore.deserialize(saveData);

         return true;
      } catch (error) {
         console.error('Failed to load game:', error);

         return false;
      }
   }

   public deleteSave(): void {
      try {
         localStorage.removeItem(LOCALSTORAGE_SAVE_KEY);
      } catch (error) {
         console.error('Failed to delete save game:', error);
      }
   }

   public hasSave(): boolean {
      return localStorage.getItem(LOCALSTORAGE_SAVE_KEY) !== null;
   }

   public exportSave(): string {
      const saveData = this._gameStore.serialize();

      return btoa(JSON.stringify(saveData));
   }

   public importSave(saveString: string): boolean {
      try {
         const saveData = JSON.parse(atob(saveString)) as SerializedGameData;

         this._gameStore.deserialize(saveData);

         return true;
      } catch (error) {
         console.error('Failed to import save:', error);

         return false;
      }
   }
}
