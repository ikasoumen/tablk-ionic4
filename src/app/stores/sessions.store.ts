import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { Session } from "app/http";

@Injectable()
export class SessionsStore {
  constructor(private store: AppStore) {}

  /**
   *
   */
  readSome$(ids$: Observable<number[]>): Observable<Session[]> {
    return this.store.observable.pipe(
      mergeMap(store => {
        return ids$.pipe(
          map(ids =>
            Array.from(store.sessions.values()).filter(session =>
              ids.includes(session.id)
            )
          )
        );
      })
    );
  }
}
