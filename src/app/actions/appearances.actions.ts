import { Injectable } from "@angular/core";
import { Actions, Action } from "app/walts";

import { AppState } from "../app.store";

@Injectable()
export class AppearancesActions extends Actions<AppState> {
  /**
   * サイドメニューとの 2カラム構成になっているかどうか
   *
   * app.component.ts 以外ではセットしないこと
   *
   * @param paneSplitted true ならば 2カラム表示されている
   */
  setPaneSplitted(paneSplitted: boolean): Action<AppState> {
    return _state => {
      _state.appearances.paneSplitted = paneSplitted;
      return _state;
    };
  }
}
