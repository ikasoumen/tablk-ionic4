import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable, from } from "rxjs";
import { map, mergeMap, filter } from "rxjs/operators";
import { Message, Group } from "../http";

@Injectable()
export class MessageStore {
  constructor(private store: AppStore) {}

  selectRoot$(): Observable<Map<string, Message>> {
    return this.store.observable.pipe(map(store => store.messages));
  }

  /**
   *
   */
  readSome$(ids$: Observable<string[]>): Observable<Message[]> {
    return this.selectRoot$().pipe(
      mergeMap(messages => {
        return ids$.pipe(
          map(ids =>
            // itearble filter に変えた方が 高効率
            Array.from(messages.values()).filter(message =>
              ids.includes(message.id)
            )
          )
        );
      })
    );
  }

  readOne$(id: string): Observable<Message> {
    return this.selectRoot$().pipe(
      map(messages => messages.get(id)),
      filter((message?: Message) => message != null)
    );
  }

  /**
   *
   */
  readSome$_byGroup$(group$: Observable<Group>): Observable<Message[]> {
    return this.selectRoot$().pipe(
      mergeMap(messages => {
        return group$.pipe(
          map(group =>
            // @todo: itearble filter に変えた方が 高効率
            Array.from(messages.values()).filter(message =>
              group.memberIds.includes(message.memberId)
            )
          )
        );
      })
    );
  }
}
