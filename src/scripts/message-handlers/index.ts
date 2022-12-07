import { IMessageHandler } from './IMessageHandler';
import {
  LinkMessageHandler, ProcrastinateMessageHandler,
  ResetDataMessageHandler, SelectPageMessageHandler
} from './implementations';
import { TimerMessageHandler } from './implementations/TimerMessageHandler';

export const messageHandlers: IMessageHandler[] = [
  new LinkMessageHandler(),
  new ProcrastinateMessageHandler(),
  new SelectPageMessageHandler(),
  new ResetDataMessageHandler(),
  new TimerMessageHandler()
];
