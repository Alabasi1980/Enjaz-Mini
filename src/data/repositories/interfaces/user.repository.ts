
import { User } from '../../../dtos/entities.dto';
import { IBaseRepository } from './base.repository';

export interface IUserRepository extends IBaseRepository<User> {
    findByEmail(email: string): Promise<User | null>;
}
