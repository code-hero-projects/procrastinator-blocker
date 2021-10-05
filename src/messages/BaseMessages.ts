export interface IBaseMessage {
  type: string;
}

export interface IInsertRequest<T> extends IBaseMessage {
  payload: T;
}

export interface IInsertResponse<T>  extends IBaseMessage {
  payload: T;
}

export interface IReadRequest extends IBaseMessage {
  payload: number;
}

export interface IReadResponse<T> extends IBaseMessage {
  payload: T;
}

export interface IReadAllRequest extends IBaseMessage {
  payload: number;
}

export interface IReadAllResponse<T> extends IBaseMessage {
  payload: T[];
}

export interface IUpdateRequest<T> extends IBaseMessage {
  payload: T;
}

export interface IUpdateResponse<T> extends IBaseMessage {
  payload: T;
}

export interface IDeleteRequest extends IBaseMessage {
  payload: number;
}

export interface IDeleteResponse extends IBaseMessage {
  payload: number;
}
