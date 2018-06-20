import { Injectable } from "@angular/core";
import { Actions, Action } from "walts";

import { AppState } from "../app.store";
import { DelayedAction } from "walts/src/actions";
import { DefaultService } from "../http";

@Injectable()
/**
 * Session に関するローカル・リモートデータの更新・取得・同期を行う
 *
 * get, post, delete はリモートからの取得と更新に用いる
 * write, flush はローカルの更新に用いる
 */
export class SessionActions extends Actions<AppState> {
  constructor(public api: DefaultService) {
    super();
  }

  /**
   * 参加しているセッション一覧を取得する
   */
  getJoinedSessions(): DelayedAction<AppState> {
    return st => {
      return this.delayed(async apply => {
        const { sessions } = await this.api.sessionsGet().toPromise();
        apply(_st => {
          _st.sessions = { ..._st.sessions, sessions };
          return _st;
        });
      });
    };
  }
}
