import { Action } from "@ngrx/store";
import { Session } from "../http";

export enum ChatSessionsActionTypes {
  GetAll = "[Chat/Sessions] GetAll",
  AddMany = "[Chat/Sessions] AddMany",
  SetQuery = "[Chat/Sessions] SetQuery"
}

export namespace ChatSessionsAction {
  export type Union = GetAll | AddMany | SetQuery;

  export class GetAll implements Action {
    readonly type = ChatSessionsActionTypes.GetAll;
  }

  export class AddMany implements Action {
    readonly type = ChatSessionsActionTypes.AddMany;
    constructor(public payload: { sessions: Session[] }) {}
  }

  export class SetQuery implements Action {
    readonly type = ChatSessionsActionTypes.SetQuery;
    constructor(public payload: { query: string }) {}
  }
}
