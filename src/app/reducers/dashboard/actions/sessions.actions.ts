import { Action } from "@ngrx/store";
import { Session } from "../../../http";

export enum SessionsActionTypes {
  GetAll = "[Sessions] GetAll",
  AddMany = "[Sessions] AddMany",
  SelectChat = "[Sessions] SelectChat",
  SetQuery = "[Sessions] SetQuery"
}

export namespace SessionsAction {
  export type Union = GetAll | AddMany | SetQuery | SelectChat;

  export class GetAll implements Action {
    readonly type = SessionsActionTypes.GetAll;
  }

  export class AddMany implements Action {
    readonly type = SessionsActionTypes.AddMany;
    constructor(public payload: { sessions: Session[] }) {}
  }

  export class SelectChat implements Action {
    readonly type = SessionsActionTypes.SelectChat;
    constructor(public payload: { sessionId: string }) {}
  }

  export class SetQuery implements Action {
    readonly type = SessionsActionTypes.SetQuery;
    constructor(public payload: { query: string }) {}
  }
}
