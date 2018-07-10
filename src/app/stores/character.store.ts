import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, mergeMap, filter, share } from "rxjs/operators";
import { Character, Member, Session } from "app/http";

/**
 * message 表示時に内部的に使う
 */
export interface NameOnlyCharacter
  extends Partial<Character>,
    Pick<Character, "name"> {
  name: string;
}

@Injectable()
export class CharacterStore {
  constructor(private store: AppStore) {}

  selectRoot$() {
    return this.store.observable.pipe(
      map(store => store.characters),
      share()
    );
  }

  /**
   *
   */
  readSome$(ids$: Observable<string[]>): Observable<Character[]> {
    return this.selectRoot$().pipe(
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
          map(member => store.characters.get(member.defaultCharacterId))
        );
      })
    );
  }

  readOne$_byNameAndSession$(
    name$: Observable<string>,
    session$: Observable<Session>
  ): Observable<Character | NameOnlyCharacter> {
    return this.selectRoot$().pipe(
      mergeMap(characters =>
        name$.pipe(
          mergeMap(name =>
            session$.pipe(
              map(session => {
                for (const [index, character] of characters) {
                  if (
                    session.id === character.sessionId &&
                    name === character.name
                  ) {
                    return character;
                  }
                }
                return { name };
              })
            )
          )
        )
      )
    );
  }

  /**
   *
   */
  readSome$_bySessionId$(sessionId: string): Observable<Character[]> {
    return this.selectRoot$().pipe(
      map(characters =>
        Array.from(characters.values()).filter(
          character => character.sessionId === sessionId
        )
      )
    );
  }
}
