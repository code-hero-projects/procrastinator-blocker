import { SelectPageMessages } from 'messages';
import { RepositoryFacade } from 'repositories';
import { SimpleEntityMessageHandler } from 'scripts/message-handlers/SimpleEntityMessageHandler';

export class SelectPageMessageHandler extends SimpleEntityMessageHandler<string> {
  constructor() {
    super(SelectPageMessages.SET_REQUEST, SelectPageMessages.SET_RESPONSE, SelectPageMessages.READ_REQUEST,
      SelectPageMessages.READ_RESPONSE, RepositoryFacade.getSelectedPageRepository());
  }
}