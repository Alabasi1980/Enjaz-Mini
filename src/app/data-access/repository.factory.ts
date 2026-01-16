
import { LocalStorageStatusRepository } from './repositories/implementations/local-storage-status.repository';
import { LocalStorageTicketRepository } from './repositories/implementations/local-storage-ticket.repository';
import { LocalStorageUserRepository } from './repositories/implementations/local-storage-user.repository';
import { IStatusRepository } from './repositories/interfaces/status.repository';
import { ITicketRepository } from './repositories/interfaces/ticket.repository';
import { IUserRepository } from './repositories/interfaces/user.repository';

// This factory is the switchboard for data providers.
// To switch to a real API, you would create Api repositories
// and instantiate them here instead of the LocalStorage ones.

export const repositoryFactory = {
  user: (): IUserRepository => new LocalStorageUserRepository(),
  ticket: (): ITicketRepository => new LocalStorageTicketRepository(),
  status: (): IStatusRepository => new LocalStorageStatusRepository()
  // Add other repositories here
};
