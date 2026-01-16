
import { Injectable, signal } from '@angular/core';
import { User } from '../dtos/entities.dto';
import { repositoryFactory } from '../data/repository.factory';
import { IUserRepository } from '../data/repositories/interfaces/user.repository';
import { STORAGE_KEYS } from '../data/storageKeys';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userRepository: IUserRepository;
  currentUser = signal<User | null>(this.getInitialUser());

  constructor() {
    this.userRepository = repositoryFactory.user();
  }

  private getInitialUser(): User | null {
    try {
      const userJson = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      return userJson ? JSON.parse(userJson) : null;
    } catch (e) {
      return null;
    }
  }

  async login(email: string): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      this.currentUser.set(user);
      return true;
    }
    this.currentUser.set(null);
    return false;
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    this.currentUser.set(null);
  }
}
