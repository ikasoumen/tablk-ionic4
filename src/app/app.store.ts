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
    sessionIds: Set2<number>;
  };
  sessions: KeySet<Session, "id">;
  characters: KeySet<Character, "id">;
  notes: KeySet<Note, "id">;
  users: KeySet<User, "id">;
  members: KeySet<Member, "id">;
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
    sessionIds: new Set2<number>()
  },
  sessions: new KeySet<Session, "id">("id"),
  characters: new KeySet<Character, "id">("id"),
  notes: new KeySet<Note, "id">("id"),
  users: new KeySet<User, "id">("id"),
  members: new KeySet<Member, "id">("id")
};

@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }
}
