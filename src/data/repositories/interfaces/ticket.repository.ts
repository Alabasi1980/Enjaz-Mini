
import { Ticket } from '../../../dtos/entities.dto';
import { IBaseRepository } from './base.repository';

export interface ITicketRepository extends IBaseRepository<Ticket> {}
