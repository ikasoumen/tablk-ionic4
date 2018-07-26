import { Action } from "@ngrx/store";
import { Character } from "../../../http";

export enum CharactersActionTypes {
  AddMany = "[Characters] AddMany"
}

export namespace CharactersAction {
  export type Union = AddMany;

  export class AddMany implements Action {
    readonly type = CharactersActionTypes.AddMany;
    constructor(public payload: { members: Character[] }) {}
  }
}
