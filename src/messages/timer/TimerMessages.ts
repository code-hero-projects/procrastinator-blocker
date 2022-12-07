import { Timer } from 'entities';
import { IInsertRequest, IInsertResponse, IReadRequest, IReadResponse } from 'messages/BaseMessages';

export class TimerMessages {
  static readonly SET_REQUEST = 'TIMER_SET_REQUEST';
  static readonly SET_RESPONSE = 'TIMER_SET_RESPONSE';
  static readonly START_REQUEST = 'TIMER_START_REQUEST';
  static readonly START_RESPONSE = 'TIMER_START_RESPONSE';
  static readonly READ_REQUEST_POPUP = 'TIMER_READ_REQUEST_POPUP';
  static readonly READ_RESPONSE_POPUP = 'TIMER_READ_RESPONSE_POPUP';
  static readonly READ_REQUEST_ACTIVE_TAB = 'TIMER_READ_REQUEST_ACTIVE_TAB';
  static readonly READ_RESPONSE_ACTIVE_TAB = 'TIMER_READ_RESPONSE_ACTIVE_TAB';
}

interface ITimerInsertRequest extends IInsertRequest<Timer> {
  type: 'TIMER_SET_REQUEST';
}

interface ITimerInsertResponse extends IInsertResponse<Timer> {
  type: 'TIMER_SET_RESPONSE';
}

interface ITimerStartRequest extends IInsertRequest<Timer> {
  type: 'TIMER_START_REQUEST';
}

interface ITimerStartResponse extends IInsertRequest<Timer> {
  type: 'TIMER_START_RESPONSE';
}

interface ITimerReadRequestPopUp extends IReadRequest {
  type: 'TIMER_READ_REQUEST_POPUP';
}

interface ITimerReadResponsePopUp extends IReadResponse<Timer> {
  type: 'TIMER_READ_RESPONSE_POPUP';
}

interface ITimerReadRequestActiveTab extends IReadRequest {
  type: 'TIMER_READ_REQUEST_ACTIVE_TAB';
}

interface ITimerReadResponseActiveTab extends IReadResponse<Timer> {
  type: 'TIMER_READ_RESPONSE_ACTIVE_TAB';
}

export type TimerMessagesTypes =
  ITimerInsertRequest | 
  ITimerInsertResponse |
  ITimerStartRequest |
  ITimerStartResponse |
  ITimerReadRequestPopUp |
  ITimerReadResponsePopUp |
  ITimerReadRequestActiveTab |
  ITimerReadResponseActiveTab;
