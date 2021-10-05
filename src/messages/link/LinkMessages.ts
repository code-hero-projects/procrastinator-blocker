import { Link } from 'entities';
import {
  IDeleteRequest,
  IDeleteResponse, IInsertRequest,
  IInsertResponse, IReadAllRequest,
  IReadAllResponse, IReadRequest,
  IReadResponse, IUpdateRequest,
  IUpdateResponse
} from 'messages/BaseMessages';

export class LinkMessages {
  static readonly INSERT_REQUEST = 'LINK_INSERT_REQUEST';
  static readonly INSERT_RESPONSE = 'LINK_INSERT_RESPONSE';

  static readonly READ_REQUEST = 'LINK_READ_REQUEST';
  static readonly READ_RESPONSE = 'LINK_READ_RESPONSE';

  static readonly READ_ALL_REQUEST = 'LINK_READ_ALL_REQUEST';
  static readonly READ_ALL_RESPONSE = 'LINK_READ_ALL_RESPONSE';

  static readonly READ_ALL_CONFIGURATION_REQUEST = 'LINK_READ_ALL_CONFIGURATION_REQUEST';
  static readonly READ_ALL_CONFIGURATION_RESPONSE = 'LINK_READ_ALL_CONFIGURATION_RESPONSE';

  static readonly UPDATE_REQUEST = 'LINK_UPDATE_REQUEST';
  static readonly UPDATE_RESPONSE = 'LINK_UPDATE_RESPONSE';
  
  static readonly DELETE_REQUEST = 'LINK_DELETE_REQUEST';
  static readonly DELETE_RESPONSE = 'LINK_DELETE_RESPONSE';
}

interface LinkInsertRequest extends IInsertRequest<Link> {
  type: 'LINK_INSERT_REQUEST';
}

interface LinkInsertResponse extends IInsertResponse<Link> {
  type: 'LINK_INSERT_RESPONSE';
}

interface LinkReadRequest extends IReadRequest {
  type: 'LINK_READ_REQUEST';
}

interface LinkReadResponse extends IReadResponse<Link> {
  type: 'LINK_READ_RESPONSE';
}

interface LinkReadAllRequest extends IReadAllRequest {
  type: 'LINK_READ_ALL_REQUEST';
}

interface LinkReadAllResponse extends IReadAllResponse<Link> {
  type: 'LINK_READ_ALL_RESPONSE';
}

interface LinkReadAllConfigurationRequest extends IReadAllRequest {
  type: 'LINK_READ_ALL_CONFIGURATION_REQUEST';
}

interface LinkReadAllConfigurationResponse extends IReadAllResponse<Link> {
  type: 'LINK_READ_ALL_CONFIGURATION_RESPONSE';
}

interface LinkUpdateRequest extends IUpdateRequest<Link> {
  type: 'LINK_UPDATE_REQUEST';
}

interface LinkUpdateResponse extends IUpdateResponse<Link> {
  type: 'LINK_UPDATE_RESPONSE';
}

interface LinkDeleteRequest extends IDeleteRequest {
  type: 'LINK_DELETE_REQUEST';
}

interface LinkDeleteResponse extends IDeleteResponse {
  type: 'LINK_DELETE_RESPONSE';
}

export type LinkMessageTypes = 
  LinkInsertRequest |
  LinkInsertResponse |
  LinkReadRequest |
  LinkReadResponse |
  LinkReadAllRequest |
  LinkReadAllResponse |
  LinkReadAllConfigurationRequest |
  LinkReadAllConfigurationResponse |
  LinkUpdateRequest |
  LinkUpdateResponse |
  LinkDeleteRequest |
  LinkDeleteResponse;
  