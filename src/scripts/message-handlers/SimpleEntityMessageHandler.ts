import { BrowserManager } from 'browserManager';
import { ISimpleRepository } from 'repositories/IDatabase';
import { IMessageHandler } from './IMessageHandler';

export class SimpleEntityMessageHandler<T> implements IMessageHandler {
  private setRequestConst: string;
  private setResponseConst: string;
  private getRequestConst: string;
  private getResponseConst: string;
  private repository: ISimpleRepository<T>;

  constructor(setRequestConst: string, setResponseConst: string, getRequestConst: string, getResponseConst: string, repository: ISimpleRepository<T>) {
    this.setRequestConst = setRequestConst;
    this.setResponseConst = setResponseConst;
    this.getRequestConst = getRequestConst;
    this.getResponseConst = getResponseConst;
    this.repository = repository;
  }

  setup() {
    BrowserManager.addMessageEventListener((message: any) => {
      switch (message.type) {
        case this.setRequestConst:
          this.repository.set(message.payload).then(() => BrowserManager.sendMessageToTabs({ type: this.setResponseConst, payload: message.payload }));
          break;
        case this.getRequestConst:
          this.repository.get().then(entity => BrowserManager.sendMessageToTabs({ type: this.getResponseConst, payload: entity }));
          break;
        default:
          break;
      }
    });
  }
}