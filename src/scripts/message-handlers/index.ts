import { IMessageHandler } from './IMessageHandler';
import {
  LinkMessageHandler, ProcrastinateMessageHandler,
  ResetDataMessageHandler, SelectPageMessageHandler
} from './implementations';

export const messageHandlers: IMessageHandler[] = [
  new LinkMessageHandler(),
  new ProcrastinateMessageHandler(),
  new SelectPageMessageHandler(),
  new ResetDataMessageHandler(),
];
