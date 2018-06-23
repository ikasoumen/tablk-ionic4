import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, mergeMap, filter } from "rxjs/operators";
import { Session } from "app/http";

export class DummySession implements Session {
  public id: never;
  public userId: never;
  public name: never;
  public imageUrl: never;
  public description: never;
  public catchphrase: never;
  public scenarioName: never;
}

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

  readOne$(
    id$: Observable<string>
  ): Observable<{ exist: boolean; _: Session }> {
    return this.store.observable.pipe(
      mergeMap(store => {
        return id$.pipe(
          map(id => {
            const exist = store.sessions.has(id);
            return {
              exist,
              _: exist ? store.sessions.get(id) : new DummySession()
            };
          })
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
