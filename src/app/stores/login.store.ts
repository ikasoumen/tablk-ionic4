import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";
import { User } from "../http";

@Injectable()
export class LoginStore {
  constructor(private store: AppStore) {}

  /**
   * ログインしているかどうか
   *
   * @return boolean$
   */
  isLogined$(): Observable<boolean> {
    return this.store.observable.pipe(
      map(state => state.login.apiKey != null),
      distinctUntilChanged()
    );
  }

  lastLoginUser$(): Observable<User> {
    return this.store.observable.pipe(map(state => state.login.lastLoginUser));
  }

  apiKey$(): Observable<String> {
    return this.store.observable.pipe(map(state => state.login.apiKey));
  }
}
