import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";
import { Pages } from "../constants";

@Injectable()
export class AppearancesStore {
  constructor(private store: AppStore) {}

  /**
   * サイドメニューとの 2カラム構成になっているかどうか
   *
   * @param paneSplitted true ならば 2カラム表示されている
   */
  getPaneSplitted$(): Observable<boolean> {
    return this.store.observable.pipe(
      map(state => state.appearances.paneSplitted),
      distinctUntilChanged()
    );
  }

  getCurrentPage$(): Observable<Pages> {
    return this.store.observable.pipe(
      map(state => state.appearances.currentPage)
    );
  }
}
