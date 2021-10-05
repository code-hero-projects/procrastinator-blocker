import { BrowserManager } from 'browserManager';
import { ProcrastinateMessages } from 'messages';
import { RepositoryFacade } from 'repositories';
import { ISimpleRepository } from 'repositories/IDatabase';
import { IMessageHandler } from 'scripts/message-handlers/IMessageHandler';

export class ProcrastinateMessageHandler implements IMessageHandler {
  private procrastinateRepository: ISimpleRepository<boolean>;

  constructor() {
    this.procrastinateRepository = RepositoryFacade.getProcrastinateRepository();
  }
  
  setup() {
    BrowserManager.addMessageEventListener((message: any) => {
      switch (message.type) {
        case ProcrastinateMessages.SET_REQUEST:
          this.procrastinateRepository.set(message.payload).then(() => {
            const messageToSend = { type: ProcrastinateMessages.SET_RESPONSE, payload: message.payload};
            BrowserManager.sendMessage(messageToSend);
          });
          break;
        case ProcrastinateMessages.READ_REQUEST_POPUP:
          this.procrastinateRepository.get().then(entity => {
            const messageToSend = { type: ProcrastinateMessages.READ_RESPONSE_POPUP, payload: entity};
            BrowserManager.sendMessageToPopUp(messageToSend)
          });
          break;
        case ProcrastinateMessages.READ_REQUEST_ACTIVE_TAB:
          this.procrastinateRepository.get().then(entity => {
            const messageToSend = { type: ProcrastinateMessages.READ_RESPONSE_ACTIVE_TAB, payload: entity};
            BrowserManager.sendMessageToTabs(messageToSend);
          });
          break;
        default:
          break;
      }
    });
  }
}
