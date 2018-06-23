import { Injectable } from "@angular/core";
import { State, Store } from "walts";

import { AppDispatcher } from "./app.dispatcher";
import { User, Session, Character, Member, Note } from "./http";
import { getFromLocalStrage } from "app/helpers/localStorageKey";
import { LocalStorageKeys } from "./constants";
import { KeySet } from "./helpers/keySet";
import { Dictionary } from "lodash";
import { Set2 } from "./helpers/Set2";

export class AppState extends State {
  login: {
    lastLoginUser: User;
    apiKey: string | null;
  };
  appearances: {
    paneSplitted: boolean;
  };
  my: {
    sessionIds: Set<number>;
  };
  sessions: Map<string, Session>;
  characters: Map<string, Character>;
  notes: Map<string, Note>;
  users: Map<string, User>;
  members: Map<string, Member>;
}

const INIT_STATE: AppState = {
  login: {
    lastLoginUser: getFromLocalStrage<LocalStorageKeys, "lastLoginUser">(
      "lastLoginUser"
    ),
    apiKey: getFromLocalStrage<LocalStorageKeys, "apiKey">("apiKey")
  },
  appearances: {
    paneSplitted: false
  },
  my: {
    sessionIds: new Set<number>()
  },
  sessions: new Map<string, Session>(),
  characters: new Map<string, Character>(),
  notes: new Map<string, Note>(),
  users: new Map<string, User>(),
  members: new Map<string, Member>()
};

@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }
}
