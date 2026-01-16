
import { User } from '../../../models/entities.dto';
import { STORAGE_KEYS } from '../../storageKeys';
import { IUserRepository } from '../interfaces/user.repository';
import { LocalStorageBaseRepository } from './local-storage-base.repository';

const seedUsers: User[] = [
  { id: 1, name: 'علي الأحمد', email: 'admin@enjaz.com', role: 'Admin', departmentId: 1 },
  { id: 2, name: 'فاطمة الزهراء', email: 'manager@enjaz.com', role: 'Manager', departmentId: 2 },
  { id: 3, name: 'خالد عبدالله', email: 'employee@enjaz.com', role: 'Employee', departmentId: 3 },
];

export class LocalStorageUserRepository extends LocalStorageBaseRepository<User> implements IUserRepository {
  constructor() {
    super(STORAGE_KEYS.USERS, seedUsers);
  }

  async findByEmail(email: string): Promise<User | null> {
    const users = await this.getItems();
    return users.find(user => user.email.toLowerCase() === email.toLowerCase()) || null;
  }
}
