import { Action } from "@ngrx/store";

export enum LayoutActionTypes {
  SetSideNavShown = "[Layout] SetSideNavShown"
}

export class SetSideNavShown implements Action {
  readonly type = LayoutActionTypes.SetSideNavShown;
}

export type LayoutActionsUnion = SetSideNavShown;
