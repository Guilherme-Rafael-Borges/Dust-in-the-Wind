import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiCommandoService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {

  }

  private async ensureStorageReady() {
    if (!this._storage) {
      const storage = await this.storage.create();
      this._storage = storage;
    }
  }

  public async set(key: string, value: string) {
    await this.ensureStorageReady();
    const result = await this._storage!.set(key, value);
    console.log('Set:', result);
  }

  public async get(key: string) {
    await this.ensureStorageReady();
    const result = await this._storage!.get(key);
    console.log('Get:', result);
    return result;
  }

  public async remove(key: string) {
    await this.ensureStorageReady();
    await this._storage!.remove(key);
    console.log('Removed');
  }

  public async clear() {
    await this.ensureStorageReady();
    await this._storage!.clear();
    console.log('Cleared');
  }
}
