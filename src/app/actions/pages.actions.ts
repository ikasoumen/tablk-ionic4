import { Injectable } from "@angular/core";
import { Actions, Action, DelayedAction } from "../walts";

import { AppState } from "../app.store";
import { DefaultService } from "../http";
import { HttpErrorHandler } from "../providers/httpErrorHandler";

@Injectable()
export class PagesActions extends Actions<AppState> {
  constructor(
    private api: DefaultService,
    private httpError: HttpErrorHandler
  ) {
    super();
  }

  chatTabs_setGroupId(groupId: string): Action<AppState> {
    return _state => {
      _state.pages.chatTab.currentGroupId = groupId;
      return _state;
    };
  }

  chatTabs_setSessionId(sessionId: string): Action<AppState> {
    return _state => {
      _state.pages.chatTab.currentSessionId = sessionId;
      return _state;
    };
  }

  chatTabs_getOnlineMemberIds(sessionId: string): DelayedAction<AppState> {
    return st => {
      return this.delayed(async apply => {
        const responce = await this.api
          .sessionsSessionIdOnlinesGet(sessionId)
          .toPromise()
          .catch(error => {
            this.httpError.handle(error);
            throw error;
          });
        apply(_state => {
          _state.pages.chatTab.currentSessionOnlineMemberIds =
            responce.memberIds || [];
          return _state;
        });
      });
    };
  }
}
