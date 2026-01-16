
import { Status } from '../../../models/entities.dto';
import { STORAGE_KEYS } from '../../storageKeys';
import { IStatusRepository } from '../interfaces/status.repository';
import { LocalStorageBaseRepository } from './local-storage-base.repository';

const seedStatuses: Status[] = [
  { id: 1, name: 'جديد', color: 'blue' },
  { id: 2, name: 'قيد التنفيذ', color: 'yellow' },
  { id: 3, name: 'مكتمل', color: 'green' },
  { id: 4, name: 'ملغى', color: 'red' },
];

export class LocalStorageStatusRepository extends LocalStorageBaseRepository<Status> implements IStatusRepository {
  constructor() {
    super(STORAGE_KEYS.STATUSES, seedStatuses);
  }
}
