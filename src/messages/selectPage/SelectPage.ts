import { IInsertRequest, IInsertResponse, IReadRequest, IReadResponse } from 'messages/BaseMessages';

export class SelectPageMessages {
  static readonly SET_REQUEST = 'SELECT_PAGE_INSERT_REQUEST';
  static readonly SET_RESPONSE = 'SELECT_PAGE_INSERT_RESPONSE';
  static readonly READ_REQUEST = 'SELECT_PAGE_READ_REQUEST';
  static readonly READ_RESPONSE = 'SELECT_PAGE_READ_RESPONSE';
}

interface ISelectPageInsertRequest extends IInsertRequest<string> {
  type: 'SELECT_PAGE_INSERT_REQUEST';
}

interface ISelectPageInsertResponse extends IInsertResponse<string> {
  type: 'SELECT_PAGE_INSERT_RESPONSE';
}

interface ISelectPageReadRequest extends IReadRequest {
  type: 'SELECT_PAGE_READ_REQUEST';
}

interface ISelectPageReadResponse extends IReadResponse<string> {
  type: 'SELECT_PAGE_READ_RESPONSE';
}

export type SelectPageMessageTypes = 
  ISelectPageInsertRequest |
  ISelectPageInsertResponse |
  ISelectPageReadRequest |
  ISelectPageReadResponse;
