import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, mergeMap, filter } from "rxjs/operators";
import { Member } from "app/http";

@Injectable()
export class MemberStore {
  constructor(private store: AppStore) {}

  /**
   *
   */
  readSome$(ids$: Observable<string[]>): Observable<Member[]> {
    return this.store.observable.pipe(
      mergeMap(store => {
        return ids$.pipe(
          map(ids =>
            Array.from(store.members.values()).filter(member =>
              ids.includes(member.id)
            )
          )
        );
      })
    );
  }

  readOne$(id$: Observable<string>): Observable<Member> {
    return this.store.observable.pipe(
      mergeMap(store => {
        return id$.pipe(
          map(id => store.members.get(id)),
          filter((member?: Member) => member != null)
        );
      })
    );
  }

  /**
   *
   */
  readBySessionId$(sessionId: string): Observable<Member[]> {
    return this.store.observable.pipe(
      map(store =>
        Array.from(store.members.values()).filter(
          member => member.sessionId === sessionId
        )
      )
    );
  }
}
