
import { IBaseRepository } from '../interfaces/base.repository';

export abstract class LocalStorageBaseRepository<T extends { id: number }> implements IBaseRepository<T> {
  
  constructor(protected storageKey: string, private seedData: T[]) {
    this.seed();
  }

  private seed(): void {
    const data = localStorage.getItem(this.storageKey);
    if (!data || JSON.parse(data).length === 0) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.seedData));
    }
  }

  protected async getItems(): Promise<T[]> {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  protected async saveItems(items: T[]): Promise<void> {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  async getAll(): Promise<T[]> {
    return this.getItems();
  }

  async getById(id: number): Promise<T | null> {
    const items = await this.getItems();
    return items.find(item => item.id === id) || null;
  }

  async create(item: Omit<T, 'id'>): Promise<T> {
    const items = await this.getItems();
    const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
    const newItem = { ...item, id: newId } as T;
    items.push(newItem);
    await this.saveItems(items);
    return newItem;
  }

  async update(id: number, itemUpdate: Partial<T>): Promise<T | null> {
    const items = await this.getItems();
    const index = items.findIndex(item => item.id === id);
    if (index === -1) {
      return null;
    }
    items[index] = { ...items[index], ...itemUpdate };
    await this.saveItems(items);
    return items[index];
  }

  async delete(id: number): Promise<boolean> {
    let items = await this.getItems();
    const initialLength = items.length;
    items = items.filter(item => item.id !== id);
    if (items.length < initialLength) {
      await this.saveItems(items);
      return true;
    }
    return false;
  }
}
