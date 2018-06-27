import { Injectable } from "@angular/core";
import { Actions } from "app/walts";
import { AppState } from "../app.store";
import { DefaultService, ApiKeyResponse } from "../http";
import { setToLocalStrage } from "../helpers/localStorageKey";
import { LocalStorageKeys } from "../constants";
import { DelayedAction } from "app/walts";
import { HttpErrorHandler } from "app/providers/httpErrorHandler";

@Injectable()
export class LoginActions extends Actions<AppState> {
  constructor(
    private api: DefaultService,
    private httpError: HttpErrorHandler
  ) {
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
        try {
          const { apiKey, users } = (await this.api
            .authApiKeyPost({ email, password })
            .toPromise()) as ApiKeyResponse;
          if (apiKey == null) {
            throw Error("空の api_key が返ってきました");
          }
          setToLocalStrage<LocalStorageKeys, "lastLoginUser">(
            "lastLoginUser",
            Object.values(users)[0]
          );
          setToLocalStrage<LocalStorageKeys, "apiKey">("apiKey", apiKey);
          apply(_st => {
            _st.login.apiKey = apiKey;
            _st.login.lastLoginUser = Object.values(users)[0];
            return _st;
          });
        } catch (e) {
          this.httpError.handle(e);
        }
      });
    };
  }
}
