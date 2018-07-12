import { Injectable } from "@angular/core";
import { State, Store } from "./walts";

import { AppDispatcher } from "./app.dispatcher";
import { User, Session, Character, Member, Note, Message } from "./http";
import { getFromLocalStrage } from "./helpers/localStorageKey";
import { LocalStorageKeys, Pages } from "./constants";
import { Group } from "./http/model/group";

export class AppState extends State {
  login: {
    lastLoginUser: User;
    apiKey: string | null;
  };
  appearances: {
    paneSplitted: boolean;
    currentPage: Pages;
  };
  my: {
    sessionIds: Set<string>;
  };
  pages: {
    chatTab: {
      currentSessionId: string | null;
      currentGroupId: string | null;
    };
  };
  sessions: Map<string, Session>;
  characters: Map<string, Character>;
  notes: Map<string, Note>;
  users: Map<string, User>;
  members: Map<string, Member>;
  groups: Map<string, Group>;
  messages: Map<string, Message>;
}

const INIT_STATE: AppState = {
  login: {
    lastLoginUser: getFromLocalStrage<LocalStorageKeys, "lastLoginUser">(
      "lastLoginUser"
    ),
    apiKey: getFromLocalStrage<LocalStorageKeys, "apiKey">("apiKey")
  },
  appearances: {
    paneSplitted: false,
    currentPage: Pages.nonSet
  },
  my: {
    sessionIds: new Set<string>()
  },
  pages: {
    chatTab: {
      currentSessionId: null,
      currentGroupId: null
    }
  },
  sessions: new Map<string, Session>(),
  characters: new Map<string, Character>(),
  notes: new Map<string, Note>(),
  users: new Map<string, User>(),
  members: new Map<string, Member>(),
  groups: new Map<string, Group>(),
  messages: new Map<string, Message>()
};

@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }
}
