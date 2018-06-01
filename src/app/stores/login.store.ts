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
   * @return boolean$ true ならば 2カラム表示されている
   */
  getPaneSplitted$(): Observable<boolean> {
    return this.store.observable.pipe(
      map(state => state.appearances.paneSplitted),
      distinctUntilChanged()
    );
  }
}
