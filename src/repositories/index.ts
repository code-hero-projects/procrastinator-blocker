import { IDatabase } from './IDatabase';
import { IndexedDbDatabase } from './indexeddb';

const RepositoryFacade: IDatabase = new IndexedDbDatabase();

export { RepositoryFacade };
