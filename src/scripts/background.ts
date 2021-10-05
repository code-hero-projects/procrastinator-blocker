import { BrowserManager } from 'browserManager';
import { RepositoryFacade } from 'repositories';
import { messageHandlers } from './message-handlers';
import { IMessageHandler } from './message-handlers/IMessageHandler';

BrowserManager.onInstall(async details => {
  if(details.reason == 'install' || details.reason == 'update'){
    await RepositoryFacade.setupData();
  }
});

messageHandlers.forEach((messageHandler: IMessageHandler) => messageHandler.setup());
