import { Action } from "@ngrx/store";
import { HttpErrorResponse } from "../../../node_modules/@angular/common/http";

export enum ErrorActionTypes {
  RaiseError = "[Error] RaiseError"
}

export class RaiseError implements Action {
  readonly type = ErrorActionTypes.RaiseError;
  constructor(public payload: Error | HttpErrorResponse) {}
}

export type ErrorActionsUnion = RaiseError;
