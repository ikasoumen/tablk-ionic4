import {
  AuthActionTypes,
  AuthActionsUnion
} from "../ngrx-actions/auth.actions";
import { User } from "../http";
import {
  getFromLocalStrage,
  setToLocalStrage
} from "app/helpers/localStorageKey";
import { LocalStorageKeys } from "app/constants";
import {
  createSelector,
  createFeatureSelector
} from "../../../node_modules/@ngrx/store";

export interface State {
  loginUser: User | undefined;
}

const initialState: State = {
  loginUser: getFromLocalStrage<LocalStorageKeys, "lastLoginUser">(
    "lastLoginUser"
  )
};

export function reducer(
  state: State = initialState,
  action: AuthActionsUnion
): State {
  switch (action.type) {
    case AuthActionTypes.LogInSuccess:
      setToLocalStrage<LocalStorageKeys, "apiKey">(
        "apiKey",
        action.payload.apiKey
      );
      setToLocalStrage<LocalStorageKeys, "lastLoginUser">(
        "lastLoginUser",
        Object.values(action.payload.users)[0]
      );
      return {
        ...state,
        loginUser: Object.values(action.payload.users)[0]
      };
    case AuthActionTypes.LogOut:
      return {
        ...state,
        loginUser: undefined
      };
    // noop
    case AuthActionTypes.LogIn:
    case AuthActionTypes.Signup:
    case AuthActionTypes.SendSignupMail:
    case AuthActionTypes.SendPasswordResetMail:
    default:
      return state;
  }
}

export const featureSelectAuth = createFeatureSelector<State>("auth");

export const isLogin = createSelector(
  featureSelectAuth,
  (state: State) => state.loginUser != null
);
