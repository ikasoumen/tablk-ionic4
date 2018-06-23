import { Injectable } from "@angular/core";
import { Actions, Action } from "walts";

import { AppState } from "../app.store";
import { DelayedAction } from "walts/src/actions";
import { DefaultService, SessionsResponse } from "../http";
import { addSome, setSome } from "../helpers/helpers";

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
        const {
          sessions,
          members,
          characters,
          users,
          notes
        } = (await this.api.sessionsGet().toPromise()) as SessionsResponse;
        apply(_st => {
          _st.my.sessionIds = addSome(_st.my.sessionIds, Object.keys(sessions));
          _st.sessions = setSome(_st.sessions, Object.entries(sessions));
          _st.members = setSome(_st.members, Object.entries(members));
          _st.characters = setSome(_st.characters, Object.entries(characters));
          _st.users = setSome(_st.users, Object.entries(users));
          _st.notes = setSome(_st.notes, Object.entries(notes));
          return _st;
        });
      });
    };
  }
}
