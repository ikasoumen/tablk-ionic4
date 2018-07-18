import { Action } from "@ngrx/store";
import { Member } from "../../../http";

export enum MembersActionTypes {
  AddMany = "[Chat/Members] AddMany"
}

export namespace MembersAction {
  export type Union = AddMany;

  export class AddMany implements Action {
    readonly type = MembersActionTypes.AddMany;
    constructor(public payload: { members: Member[] }) {}
  }
}
