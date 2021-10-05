import { IBaseEntity } from 'entities';
import { IRepository } from 'repositories/IDatabase';
import { READ_ONLY, READ_WRITE } from './constants';
import { executeQuery } from './utils';

export class IndexedDbBaseEntityRepository<T extends IBaseEntity> implements IRepository<T> {
  private objectStoreName: string;

  constructor(objectStoreName: string) {
    this.objectStoreName = objectStoreName;
  }

  async insert(entity: T): Promise<T> {
    return executeQuery(this.objectStoreName, READ_WRITE, store => store.add(entity));
  }

  async read(id: number): Promise<T> {
    return executeQuery(this.objectStoreName, READ_ONLY, store => store.get(id));
  }

  async readAll(): Promise<T[]> {
    return executeQuery(this.objectStoreName, READ_ONLY, store => store.getAll());
  }

  async update(entity: T): Promise<T> {
    await executeQuery(this.objectStoreName, READ_WRITE, store => store.put(entity));
    return entity;
  }

  async delete(id: number): Promise<number> {
    await executeQuery(this.objectStoreName, READ_WRITE, store => store.delete(id));
    return id;
  }
}