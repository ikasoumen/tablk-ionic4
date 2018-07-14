import { Action } from "@ngrx/store";
import { User, ApiKeyInput, ApiKeyResponse } from "../http";

export enum AuthActionTypes {
  LogIn = "[Auth] LogIn",
  LogInSuccess = "[Auth] LogInSuccess",
  LogOut = "[Auth] LogOut",
  Signup = "[Auth] Signup",
  SendSignupMail = "[Auth] SendSignupMail",
  SendPasswordResetMail = "[Auth] SendPasswordResetMail"
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LogIn;
  constructor(public payload: ApiKeyInput) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LogInSuccess;
  constructor(public payload: ApiKeyResponse) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LogOut;
}

export class Signup implements Action {
  readonly type = AuthActionTypes.Signup;
}

export class SendSignupMail implements Action {
  readonly type = AuthActionTypes.SendSignupMail;
}

export class SendPasswordResetMail implements Action {
  readonly type = AuthActionTypes.SendPasswordResetMail;
}

export type AuthActionsUnion =
  | LogIn
  | LogInSuccess
  | LogOut
  | Signup
  | SendSignupMail
  | SendPasswordResetMail;
