import { Action } from "@ngrx/store";
import { Member } from "../http";

export enum ChatMembersActionTypes {
  AddMany = "[Chat/Members] AddMany"
}

export namespace ChatMembersAction {
  export type Union = AddMany;

  export class AddMany implements Action {
    readonly type = ChatMembersActionTypes.AddMany;
    constructor(public payload: { members: Member[] }) {}
  }
}
