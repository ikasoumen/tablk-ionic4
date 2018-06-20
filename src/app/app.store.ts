import { Injectable } from "@angular/core";
import { State, Store } from "walts";

import { AppDispatcher } from "./app.dispatcher";
import { User, Session } from "./http";
import { getFromLocalStrage } from "app/helpers/localStorageKey";
import { LocalStorageKeys } from "./constants";
import { KeySet } from "./helpers/keySet";

export class AppState extends State {
  login: {
    lastLoginUser: User;
    apiKey: string | null;
  };
  appearances: {
    paneSplitted: boolean;
  };
  sessions: KeySet<Session, "id">;
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
  sessions: new KeySet<Session, "id">("id")
};

@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }
}
