import { openDB } from 'idb';
import { DATABASE_NAME, DATABASE_VERSION } from './constants';

export async function executeQuery<T>(objectStoreName: string, transactionMode: any, callback: (objectStore: any) => T): Promise<T> {
  const database = await openDB(DATABASE_NAME, DATABASE_VERSION);
  const transaction = database.transaction(objectStoreName, transactionMode);
  const objectStore = transaction.store;
  const entity = callback(objectStore);
  database.close();
  return entity;
}
