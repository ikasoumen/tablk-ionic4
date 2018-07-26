import { Action } from "@ngrx/store";
import { Message } from "../../../http";

export enum MessagesActionTypes {
  AddMany = "[Messages] AddMany"
}

export namespace MessagesAction {
  export type Union = AddMany;

  export class AddMany implements Action {
    readonly type = MessagesActionTypes.AddMany;
    constructor(public payload: { members: Message[] }) {}
  }
}
