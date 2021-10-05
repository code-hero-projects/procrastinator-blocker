import { ISimpleRepository } from 'repositories/IDatabase';
import { READ_ONLY, READ_WRITE } from './constants';
import { executeQuery } from './utils';

export class IndexedDbBaseSimpleRepository<T> implements ISimpleRepository<T> {
  private objectStoreName: string;
  private objectKey: string;

  constructor(objectStoreName: string, objectKey: string) {
    this.objectStoreName = objectStoreName;
    this.objectKey = objectKey;
  }
  
  set(entity: T): Promise<void> {
    return executeQuery(this.objectStoreName, READ_WRITE, store => store.put(entity, this.objectKey));
  }
  get(): Promise<T> {
    return executeQuery(this.objectStoreName, READ_ONLY, store => store.get(this.objectKey));
  }
}