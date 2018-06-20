import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";
import { Session } from "protractor";

@Injectable()
export class AppearancesStore {
  constructor(private store: AppStore) {}

  /**
   *
   */
  getJoinedSessions$(): Observable<Dummyable<Session>[]> {
    return this.store.observable.pipe(
      map(state => state.appearances.paneSplitted),
      distinctUntilChanged()
    );
  }
}
