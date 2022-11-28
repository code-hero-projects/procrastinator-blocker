import { Link, Timer } from 'entities';

export interface IRepository<T> {
  insert(entity: T): Promise<T>;
  read(id: number): Promise<T>;
  readAll(): Promise<T[]>;
  update(entity: T): Promise<T>;
  delete(id: number): Promise<number>;
}

export interface ISimpleRepository<T> {
  set(entity: T): Promise<void>;
  get(): Promise<T>;
}

export interface IDatabase {
  getLinkRepository(): IRepository<Link>;
  getProcrastinateRepository(): ISimpleRepository<boolean>;
  getSelectedPageRepository(): ISimpleRepository<string>;
  getTimerRepository(): ISimpleRepository<Timer>;
  setupData(): void;
  resetData(): Promise<void>;
}