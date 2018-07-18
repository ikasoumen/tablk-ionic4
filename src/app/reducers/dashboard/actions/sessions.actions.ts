import { Action } from "@ngrx/store";
import { Session } from "../../../http";

export enum SessionsActionTypes {
  GetAll = "[Sessions] GetAll",
  AddMany = "[Sessions] AddMany",
  SetQuery = "[Sessions] SetQuery"
}

export namespace SessionsAction {
  export type Union = GetAll | AddMany | SetQuery;

  export class GetAll implements Action {
    readonly type = SessionsActionTypes.GetAll;
  }

  export class AddMany implements Action {
    readonly type = SessionsActionTypes.AddMany;
    constructor(public payload: { sessions: Session[] }) {}
  }

  export class SetQuery implements Action {
    readonly type = SessionsActionTypes.SetQuery;
    constructor(public payload: { query: string }) {}
  }
}
