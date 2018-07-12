import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, mergeMap, filter } from "rxjs/operators";
import { Group, Session } from "../http";

@Injectable()
export class GroupsStore {
  constructor(private store: AppStore) {}

  private selectRoot$(): Observable<Map<string, Group>> {
    return this.store.observable.pipe(map(store => store.groups));
  }

  /**
   *
   */
  readSome$(ids$: Observable<string[]>): Observable<Group[]> {
    return this.selectRoot$().pipe(
      mergeMap(groups => {
        return ids$.pipe(
          map(ids =>
            // itearble filter に変えた方が 高効率
            Array.from(groups.values()).filter(message =>
              ids.includes(message.id)
            )
          )
        );
      })
    );
  }

  readOne$(id: string): Observable<Group> {
    return this.selectRoot$().pipe(
      map(groups => groups.get(id)),
      filter((message?: Group) => message != null)
    );
  }

  /**
   *
   */
  readSome$_bySession$(session$: Observable<Session>): Observable<Group[]> {
    return this.selectRoot$().pipe(
      mergeMap(groups => {
        return session$.pipe(
          map(session =>
            // @todo: itearble filter に変えた方が 高効率
            // @todo: group から session_id を返す必要がある
            Array.from(groups.values()).filter(group => session.id === group.id)
          )
        );
      })
    );
  }
}
