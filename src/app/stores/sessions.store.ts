import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, mergeMap, filter, share } from "rxjs/operators";
import { Session, Group } from "../http";

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

  selectRoot$() {
    return this.store.observable.pipe(
      map(store => store.sessions),
      share()
    );
  }

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
          filter(session => session != null)
        );
      })
    );
  }

  readOne$_byGroup$(group$: Observable<Group>): Observable<Session> {
    return this.selectRoot$().pipe(
      mergeMap(sessions =>
        group$.pipe(
          map(
            group =>
              Array.from(sessions.values()).filter(
                session => session.id === group.sessionId
              )[0]
          ),
          filter(session => session != null)
        )
      )
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
