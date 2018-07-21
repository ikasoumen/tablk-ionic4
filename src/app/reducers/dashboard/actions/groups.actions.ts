import { Action } from "@ngrx/store";
import { Group } from "../../../http";

export enum GroupsActionTypes {
  AddMany = "[Groups] AddMany"
}

export namespace GroupsAction {
  export type Union = AddMany;

  export class AddMany implements Action {
    readonly type = GroupsActionTypes.AddMany;
    constructor(public payload: { groups: Group[] }) {}
  }
}
