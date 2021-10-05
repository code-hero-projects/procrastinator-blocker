import { BrowserManager } from 'browserManager';
import { IRepository } from 'repositories/IDatabase';
import { IMessageHandler } from './IMessageHandler';

export class BaseEntityMessageHandler<T> implements IMessageHandler {
  private insertRequestConst: string;
  private insertResponseConst: string;
  
  private readAllRequestConst: string;
  private readAllResponseConst: string;

  private readRequestConst: string;
  private readResponseConst: string;

  private updateRequestConst: string;
  private updateResponseConst: string;

  private deleteRequestConst: string;
  private deleteResponseConst: string;

  protected repository: IRepository<T>;

  constructor(insertRequestConst: string, insertResponseConst: string, readAllRequestConst: string, readAllResponseConst: string, 
              readRequestConst: string, readResponseConst: string, updateRequestConst: string, updateResponseConst: string,
              deleteRequestConst: string, deleteResponseConst: string, repository: IRepository<T>) {

    this.insertRequestConst = insertRequestConst;
    this.insertResponseConst = insertResponseConst;

    this.readAllRequestConst = readAllRequestConst;
    this.readAllResponseConst = readAllResponseConst;

    this.readRequestConst = readRequestConst;
    this.readResponseConst = readResponseConst;

    this.updateRequestConst = updateRequestConst;
    this.updateResponseConst = updateResponseConst;

    this.deleteRequestConst = deleteRequestConst;
    this.deleteResponseConst = deleteResponseConst;

    this.repository = repository;
  }

  setup() {
    BrowserManager.addMessageEventListener((message: any) => {
      switch (message.type) {
        case this.insertRequestConst:
          this.repository.insert(message.payload).then(entity => BrowserManager.sendMessageToTabs({ type: this.insertResponseConst, payload: entity }));
          break;
        case this.readRequestConst:
          this.repository.read(message.payload).then(entity => BrowserManager.sendMessageToTabs({ type: this.readResponseConst, payload: entity }));
          break;
        case this.readAllRequestConst:
          this.repository.readAll().then(entities => BrowserManager.sendMessageToTabs({ type: this.readAllResponseConst, payload: entities }));
          break;
        case this.deleteRequestConst:
          this.repository.delete(message.payload).then(id => BrowserManager.sendMessageToTabs({ type: this.deleteResponseConst, payload: id }));
        default:
          break;
      }
    });
  }
}