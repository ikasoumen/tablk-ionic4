import { Action } from "@ngrx/store";
import { Session } from "../http";

export enum DashboardSessionsActionTypes {
  GetAll = "[Dashboard/Sessions] GetAll",
  AddMany = "[Dashboard/Sessions] AddMany",
  SetQuery = "[Dashboard/Sessions] SetQuery"
}

export namespace DashboardSessionsAction {
  export type Union = GetAll | AddMany | SetQuery;

  export class GetAll implements Action {
    readonly type = DashboardSessionsActionTypes.GetAll;
  }

  export class AddMany implements Action {
    readonly type = DashboardSessionsActionTypes.AddMany;
    constructor(public payload: { sessions: Session[] }) {}
  }

  export class SetQuery implements Action {
    readonly type = DashboardSessionsActionTypes.SetQuery;
    constructor(public payload: { query: string }) {}
  }
}
