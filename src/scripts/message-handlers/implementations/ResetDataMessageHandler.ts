import { BrowserManager } from 'browserManager';
import { ResetDataMessages, ResetDataMessageTypes } from 'messages';
import { RepositoryFacade } from 'repositories';
import { IMessageHandler } from 'scripts/message-handlers/IMessageHandler';

export class ResetDataMessageHandler implements IMessageHandler {
  setup(): void {
    BrowserManager.addMessageEventListener((message: ResetDataMessageTypes) => {
      switch (message.type) {
        case ResetDataMessages.RESET_DATA_SET_REQUEST:
          RepositoryFacade.resetData().then(() => BrowserManager.sendMessage({ type: ResetDataMessages.RESET_DATA_SET_RESPONSE }));
          break;
        default:
          break;
      }
    });
  }
}
