import { Injectable } from "@angular/core";
import { Actions, Action } from "../walts";

import { AppState } from "../app.store";
import { Pages } from "../constants";

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

  setCurrentPage(currentPage: Pages): Action<AppState> {
    return _state => {
      _state.appearances.currentPage = currentPage;
      return _state;
    };
  }
}
