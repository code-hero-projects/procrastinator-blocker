import { IBaseMessage } from 'messages/BaseMessages';

export class ResetDataMessages {
  static readonly RESET_DATA_SET_REQUEST = 'RESET_DATA_SET_REQUEST';
  static readonly RESET_DATA_SET_RESPONSE = 'RESET_DATA_SET_RESPONSE';
}

interface IResetDataSetRequest extends IBaseMessage {
  type: 'RESET_DATA_SET_REQUEST';
}

interface IResetDataSetResponse extends IBaseMessage {
  type: 'RESET_DATA_SET_RESPONSE';
}

export type ResetDataMessageTypes = 
  IResetDataSetRequest |
  IResetDataSetResponse;
