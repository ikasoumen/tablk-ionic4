import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, mergeMap, filter } from "rxjs/operators";
import { Note } from "app/http";

@Injectable()
export class NoteStore {
  constructor(private store: AppStore) {}

  /**
   *
   */
  readSome$(ids$: Observable<string[]>): Observable<Note[]> {
    return this.store.observable.pipe(
      mergeMap(store => {
        return ids$.pipe(
          map(ids =>
            Array.from(store.notes.values()).filter(note =>
              ids.includes(note.id)
            )
          )
        );
      })
    );
  }

  readOne$(id$: Observable<string>): Observable<Note> {
    return this.store.observable.pipe(
      mergeMap(store => {
        return id$.pipe(
          map(id => store.notes.get(id)),
          filter((note?: Note) => note != null)
        );
      })
    );
  }

  /**
   *
   */
  readByMemberIds$(memberIds: string[]): Observable<Note[]> {
    return this.store.observable.pipe(
      map(store =>
        Array.from(store.notes.values()).filter(note =>
          memberIds.includes(note.memberId)
        )
      )
    );
  }
}
