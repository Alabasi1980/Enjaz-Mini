
import { Injectable } from '@angular/core';
import { Status } from '../models/entities.dto';
import { repositoryFactory } from '../data-access/repository.factory';
import { IStatusRepository } from '../data-access/repositories/interfaces/status.repository';

@Injectable({ providedIn: 'root' })
export class StatusService {
  private statusRepository: IStatusRepository;

  constructor() {
    this.statusRepository = repositoryFactory.status();
  }

  async getAllStatuses(): Promise<Status[]> {
    return this.statusRepository.getAll();
  }
  
  async createStatus(statusData: Omit<Status, 'id'>): Promise<Status> {
    return this.statusRepository.create(statusData);
  }

  async deleteStatus(id: number): Promise<boolean> {
    return this.statusRepository.delete(id);
  }
}
