import { Injectable } from "@angular/core";
import { Actions, Action } from "app/walts";

import { AppState } from "../app.store";

@Injectable()
export class PagesActions extends Actions<AppState> {
  chatTabs_setGroupId(groupId: string): Action<AppState> {
    return _state => {
      _state.groups.has(groupId);
      _state.pages.chatTab.currentGroupId = groupId;
      return _state;
    };
  }
}
