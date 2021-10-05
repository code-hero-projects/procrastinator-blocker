import { Link } from 'entities';
import { openDB } from 'idb';
import { RANDOM } from 'pages';
import { IDatabase, IRepository, ISimpleRepository } from 'repositories/IDatabase';
import { DATABASE_NAME, DATABASE_VERSION } from './constants';
import { IndexedDbBaseEntityRepository } from './IndexedDbBaseEntityRepository';
import { IndexedDbBaseSimpleRepository } from './IndexedDbBaseSimpleRepository';

const LINK_OBJECT_STORE = 'link';
const PROCRASTINATE_OBJECT_STORE = 'procrastinate';
const SELECT_PAGE_OBJECT_STORE = 'select-page';

const LINK_PRIMARY_KEY = 'id';

const PROCRASTINATE_KEY = 'procrastinate';
const SELECT_PAGE_KEY = 'select-page';

const PROCRASTINATE_INITIAL_VALUE = false;
const SELECT_PAGE_INITIAL_VALUE = RANDOM;

export class IndexedDbDatabase implements IDatabase {
  private links: Link[] = [
    { url: 'youtube' },
    { url: 'instagram' },
    { url: 'facebook' }
  ];

  private linkRepository: IRepository<Link>;
  private procrastinateRepository: ISimpleRepository<boolean>;
  private selectPageRepository: ISimpleRepository<string>;

  constructor() {
    this.linkRepository = new IndexedDbBaseEntityRepository<Link>(LINK_OBJECT_STORE);
    this.procrastinateRepository = new IndexedDbBaseSimpleRepository<boolean>(PROCRASTINATE_OBJECT_STORE, PROCRASTINATE_KEY);
    this.selectPageRepository = new IndexedDbBaseSimpleRepository<string>(SELECT_PAGE_OBJECT_STORE, SELECT_PAGE_KEY);
    
  }

  getLinkRepository(): IRepository<Link> {
    return this.linkRepository;
  }
  
  getProcrastinateRepository(): ISimpleRepository<boolean> {
    return this.procrastinateRepository;
  }

  getSelectedPageRepository(): ISimpleRepository<string> {
    return this.selectPageRepository;
  }
  
  async setupData(): Promise<void> {
    const databaseContext = this;
    await openDB(DATABASE_NAME, DATABASE_VERSION, {
      upgrade(db) {
        const insertObjectStore = async (entity: string, objectStoreName: string, objectStoreOptions: any, insertData: () => void) => {
          if(!db.objectStoreNames.contains(objectStoreName)) {
            db.createObjectStore(objectStoreName, objectStoreOptions);
            console.log(`${entity} object store created`);
            await insertData();
          }
        };

        console.log('setting up data');
        
        insertObjectStore('link', LINK_OBJECT_STORE, { keyPath: LINK_PRIMARY_KEY, autoIncrement: true}, databaseContext.insertInitialLinks);
        insertObjectStore('procrastinate', PROCRASTINATE_OBJECT_STORE, { }, databaseContext.insertInitialProcrastinate);
        insertObjectStore('select page', SELECT_PAGE_OBJECT_STORE, { }, databaseContext.insertInitialSelectPage);
      }
    });
  }

  async resetData(): Promise<void> {
    this.linkRepository.readAll().then(async (links: Link[]) => {
      for (const link of links) {
        await this.linkRepository.delete(link.id!);
      }
      this.insertInitialLinks();
    })
    await this.insertInitialProcrastinate();
    await this.insertInitialSelectPage();
  }

  private insertInitialLinks = async () => {
    this.links.forEach(async link => {
      await this.linkRepository.insert(link);
      console.log('initial link inserted successfully');
    });
  };
  
  private insertInitialProcrastinate = async () => {
    await this.procrastinateRepository.set(PROCRASTINATE_INITIAL_VALUE);
    console.log('initial procrastinate inserted successfully');
  };

  private insertInitialSelectPage = async () => {
    await this.selectPageRepository.set(SELECT_PAGE_INITIAL_VALUE);
    console.log('initial select page inserted successfully');
  };
}