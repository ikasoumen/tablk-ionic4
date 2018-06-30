import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, mergeMap, filter, share } from "rxjs/operators";
import { Character, Member } from "app/http";

@Injectable()
export class CharacterStore {
  constructor(private store: AppStore) {}

  root$() {
    return this.store.observable.pipe(
      map(store => store.characters),
      share()
    );
  }

  /**
   *
   */
  readSome$(ids$: Observable<string[]>): Observable<Character[]> {
    return this.root$().pipe(
      mergeMap(characters => {
        return ids$.pipe(
          map(ids =>
            Array.from(characters.values()).filter(character =>
              ids.includes(character.id)
            )
          )
        );
      })
    );
  }

  readOne$(id: string): Observable<Character> {
    return this.store.observable.pipe(
      map(store => store.characters.get(id)),
      filter((character?: Character) => character != null)
    );
  }

  readOne$_byMember$(member$: Observable<Member>): Observable<Character> {
    return this.store.observable.pipe(
      mergeMap(store => {
        return member$.pipe(
          map(member => store.characters.get(member.id)),
          filter((character?: Character) => character != null)
        );
      })
    );
  }

  /**
   *
   */
  readBySessionId$(sessionId: string): Observable<Character[]> {
    return this.store.observable.pipe(
      map(store =>
        Array.from(store.characters.values()).filter(
          character => character.sessionId === sessionId
        )
      )
    );
  }
}
