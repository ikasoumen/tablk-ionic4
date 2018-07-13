import { Injectable } from "@angular/core";
import { Actions, Action } from "../walts";

import { AppState } from "../app.store";

@Injectable()
export class PagesActions extends Actions<AppState> {
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
}
