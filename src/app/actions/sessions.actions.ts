import { Injectable } from "@angular/core";
import { Actions, Action } from "app/walts";

import { AppState } from "../app.store";
import { DelayedAction } from "app/walts";
import { DefaultService, SessionsResponse } from "../http";
import { addSome, setSome } from "../helpers/helpers";
import { HttpErrorHandler } from "../providers/httpErrorHandler";

@Injectable()
/**
 * Session に関するローカル・リモートデータの更新・取得・同期を行う
 *
 * get, post, delete はリモートからの取得と更新に用いる
 * write, flush はローカルの更新に用いる
 */
export class SessionActions extends Actions<AppState> {
  constructor(
    private api: DefaultService,
    private httpError: HttpErrorHandler
  ) {
    super();
  }

  /**
   * 参加しているセッション一覧を取得する
   */
  getJoinedSessions(): DelayedAction<AppState> {
    return st => {
      return this.delayed(async apply => {
        const responce = (await this.api
          .sessionsGet()
          .toPromise()
          .catch(error => {
            this.httpError.handle(error);
            throw error;
          })) as SessionsResponse;
        apply(_st => this.applyResponce(_st, responce));
      });
    };
  }

  getSessionOne(id: string): DelayedAction<AppState> {
    return st => {
      return this.delayed(async apply => {
        const responce = (await this.api
          .sessionsSessionIdGet(id)
          .toPromise()
          .catch(error => {
            this.httpError.handle(error);
            throw error;
          })) as SessionsResponse;
        apply(_st => this.applyResponce(_st, responce));
      });
    };
  }

  private applyResponce(state: AppState, responce: SessionsResponse): AppState {
    const { sessions, members, characters, users, notes } = responce;
    state.my.sessionIds = addSome(state.my.sessionIds, Object.keys(sessions));
    state.sessions = setSome(state.sessions, Object.entries(sessions));
    state.members = setSome(state.members, Object.entries(members));
    state.characters = setSome(state.characters, Object.entries(characters));
    state.users = setSome(state.users, Object.entries(users));
    state.notes = setSome(state.notes, Object.entries(notes));
    return state;
  }
}
