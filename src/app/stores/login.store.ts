import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

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
}
