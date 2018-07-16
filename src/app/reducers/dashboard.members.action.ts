import { Action } from "@ngrx/store";
import { Member } from "../http";

export enum DashboardMembersActionTypes {
  AddMany = "[Dashboard/Members] AddMany"
}

export namespace DashboardMembersAction {
  export type Union = AddMany;

  export class AddMany implements Action {
    readonly type = DashboardMembersActionTypes.AddMany;
    constructor(public payload: { members: Member[] }) {}
  }
}
