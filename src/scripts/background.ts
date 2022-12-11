import { BrowserManager } from 'browserManager';
import { RepositoryFacade } from 'repositories';
import { messageHandlers } from './message-handlers';
import { IMessageHandler } from './message-handlers/IMessageHandler';

console.log('starting background');

BrowserManager.onInstall(async details => {
  if(details.reason == 'install' || details.reason == 'update'){
    await RepositoryFacade.setupData();
  }
});

console.log('setting up handlers background');

messageHandlers.forEach((messageHandler: IMessageHandler) => messageHandler.setup());

console.log('finish background script');