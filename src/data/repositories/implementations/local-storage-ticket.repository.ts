
import { Ticket } from '../../../dtos/entities.dto';
import { STORAGE_KEYS } from '../../storageKeys';
import { ITicketRepository } from '../interfaces/ticket.repository';
import { LocalStorageBaseRepository } from './local-storage-base.repository';

const seedTickets: Ticket[] = [
  { id: 1, title: 'عطل في المضخة الرئيسية', description: 'المضخة في الموقع أ توقفت عن العمل', statusId: 1, priorityId: 3, createdBy: 3, createdAt: new Date().toISOString(), assignedToId: 2 },
  { id: 2, title: 'طلب مواد بناء إضافية', description: 'نحتاج إلى 100 كيس أسمنت للموقع ب', statusId: 2, priorityId: 2, createdBy: 3, createdAt: new Date().toISOString(), assignedToId: 2 },
  { id: 3, title: 'مراجعة مخططات المرحلة الثانية', description: 'المخططات الهندسية جاهزة للمراجعة', statusId: 3, priorityId: 1, createdBy: 2, createdAt: new Date().toISOString(), assignedToId: 1 },
];

export class LocalStorageTicketRepository extends LocalStorageBaseRepository<Ticket> implements ITicketRepository {
  constructor() {
    super(STORAGE_KEYS.TICKETS, seedTickets);
  }
}
