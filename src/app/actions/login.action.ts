import { Injectable } from "@angular/core";
import { Actions, Action, SyncAction } from "walts";
import { AppState } from "../app.store";
import { DefaultRouteReuseStrategy } from "@angular/router/src/route_reuse_strategy";
import { DefaultService } from "../http";
import { DelayedAction } from "walts/src/actions";
import { setToLocalStrage } from "../helpers/localStorageKey";
import { LocalStorageKeys } from "../constants";

@Injectable()
export class LoginActions extends Actions<AppState> {
  constructor(private api: DefaultService) {
    super();
  }

  /**
   * ログインする
   *
   * @param email string
   * @param password string
   */
  login(email: string, password: string): DelayedAction<AppState> {
    return st => {
      return this.delayed(async apply => {
        const { apiKey, users } = await this.api
          .authApiKeyPost({ email, password })
          .toPromise();
        if (apiKey == null) {
          throw Error("空の api_key が返ってきました");
        }

        setToLocalStrage<LocalStorageKeys, "lastLoginUser">(
          "lastLoginUser",
          users[0]
        );
        setToLocalStrage<LocalStorageKeys, "apiKey">("apiKey", apiKey);
        apply(_st => {
          _st.login.apiKey = apiKey;
          _st.login.lastLoginUser = users[0];
          return _st;
        });
      });
    };
  }
}
