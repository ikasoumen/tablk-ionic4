import { Injectable } from "@angular/core";
import { Actions, Action } from "walts";

import { AppState } from "../app.store";
import { DelayedAction } from "walts/src/actions";
import { DefaultService, SessionsResponse } from "../http";

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
          _st.my.sessionIds = _st.my.sessionIds.addSome(
            sessions.map(s => s.id)
          );
          _st.sessions = _st.sessions.addSome(sessions);
          _st.members = _st.members.addSome(members);
          _st.characters = _st.characters.addSome(characters);
          _st.users = _st.users.addSome(users);
          _st.notes = _st.notes.addSome(notes);
          return _st;
        });
      });
    };
  }
}
