import { BrowserManager } from 'browserManager';
import { Link } from 'entities';
import { LinkMessages } from 'messages';
import { RepositoryFacade } from 'repositories';
import { BaseEntityMessageHandler } from 'scripts/message-handlers/BaseEntityMessageHandler';

export class LinkMessageHandler extends BaseEntityMessageHandler<Link> {
  constructor() {
    super(LinkMessages.INSERT_REQUEST, LinkMessages.INSERT_RESPONSE, LinkMessages.READ_ALL_REQUEST, LinkMessages.READ_ALL_RESPONSE,
          LinkMessages.READ_REQUEST, LinkMessages.READ_RESPONSE, LinkMessages.UPDATE_REQUEST, LinkMessages.UPDATE_RESPONSE,
          LinkMessages.DELETE_REQUEST, LinkMessages.DELETE_RESPONSE, RepositoryFacade.getLinkRepository());
  }

  setup() {
    super.setup();

    BrowserManager.addMessageEventListener((message: any) => {
      switch (message.type) {
        case LinkMessages.READ_ALL_CONFIGURATION_REQUEST:
          this.repository.readAll().then(entities => BrowserManager.sendMessageToTabs({ type: LinkMessages.READ_ALL_CONFIGURATION_RESPONSE, payload: entities }));
          break;
        default:
          break;
      }
    });
  }
}
