import { IInsertRequest, IInsertResponse, IReadRequest, IReadResponse } from 'messages/BaseMessages';

export class ProcrastinateMessages {
  static readonly SET_REQUEST = 'PROCRASTINATE_SET_REQUEST';
  static readonly SET_RESPONSE = 'PROCRASTINATE_SET_RESPONSE';
  static readonly READ_REQUEST_POPUP = 'PROCRASTINATE_READ_REQUEST_POPUP';
  static readonly READ_RESPONSE_POPUP = 'PROCRASTINATE_READ_RESPONSE_POPUP';
  static readonly READ_REQUEST_ACTIVE_TAB = 'PROCRASTINATE_READ_REQUEST_ACTIVE_TAB';
  static readonly READ_RESPONSE_ACTIVE_TAB = 'PROCRASTINATE_READ_RESPONSE_ACTIVE_TAB';
}

interface IProcrastinateInsertRequest extends IInsertRequest<boolean> {
  type: 'PROCRASTINATE_SET_REQUEST';
}

interface IProcrastinateInsertResponse extends IInsertResponse<boolean> {
  type: 'PROCRASTINATE_SET_RESPONSE';
}

interface IProcrastinateReadRequestPopUp extends IReadRequest {
  type: 'PROCRASTINATE_READ_REQUEST_POPUP';
}

interface IProcrastinateReadResponsePopUp extends IReadResponse<boolean> {
  type: 'PROCRASTINATE_READ_RESPONSE_POPUP';
}

interface IProcrastinateReadRequestActiveTab extends IReadRequest {
  type: 'PROCRASTINATE_READ_REQUEST_ACTIVE_TAB';
}

interface IProcrastinateReadResponseActiveTab extends IReadResponse<boolean> {
  type: 'PROCRASTINATE_READ_RESPONSE_ACTIVE_TAB';
}

export type ProcrastinateMessageTypes = 
  IProcrastinateInsertRequest |
  IProcrastinateInsertResponse |
  IProcrastinateReadRequestPopUp |
  IProcrastinateReadResponsePopUp |
  IProcrastinateReadRequestActiveTab |
  IProcrastinateReadResponseActiveTab;
