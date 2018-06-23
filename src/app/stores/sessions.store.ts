import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, mergeMap, filter } from "rxjs/operators";
import { Session } from "app/http";

@Injectable()
export class SessionsStore {
  constructor(private store: AppStore) {}

  /**
   *
   */
  readSome$(ids$: Observable<string[]>): Observable<Session[]> {
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

  readOne$(id$: Observable<string>): Observable<Session> {
    return this.store.observable.pipe(
      mergeMap(store => {
        return id$.pipe(
          map(id => store.sessions.get(id)),
          filter((session?: Session) => session != null)
        );
      })
    );
  }

  /**
   *
   */
  readMyIds$(): Observable<string[]> {
    return this.store.observable.pipe(
      map(store => Array.from(store.my.sessionIds))
    );
  }

  /**
   *
   */
  readMyNotice$(): Observable<string[]> {
    return this.store.observable.pipe(
      map(store => Array.from(store.my.sessionIds))
    );
  }
}
