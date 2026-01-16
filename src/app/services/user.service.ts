
import { Injectable } from '@angular/core';
import { User } from '../models/entities.dto';
import { repositoryFactory } from '../data-access/repository.factory';
import { IUserRepository } from '../data-access/repositories/interfaces/user.repository';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = repositoryFactory.user();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    return this.userRepository.create(userData);
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, userData);
  }

  async deleteUser(id: number): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
