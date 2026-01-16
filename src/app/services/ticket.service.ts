
import { Injectable } from '@angular/core';
import { Ticket } from '../models/entities.dto';
import { repositoryFactory } from '../data-access/repository.factory';
import { ITicketRepository } from '../data-access/repositories/interfaces/ticket.repository';

@Injectable({ providedIn: 'root' })
export class TicketService {
  private ticketRepository: ITicketRepository;

  constructor() {
    this.ticketRepository = repositoryFactory.ticket();
  }

  async getAllTickets(): Promise<Ticket[]> {
    return this.ticketRepository.getAll();
  }

  async getTicketById(id: number): Promise<Ticket | null> {
    return this.ticketRepository.getById(id);
  }
  
  async createTicket(ticketData: Omit<Ticket, 'id'>): Promise<Ticket> {
    return this.ticketRepository.create(ticketData);
  }
}
