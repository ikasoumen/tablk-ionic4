import { Action } from "@ngrx/store";

export enum VoidActionTypes {
  Void = "[Void] Void"
}

export class Void implements Action {
  readonly type = VoidActionTypes.Void;
}

export type VoidActionsUnion = Void;
