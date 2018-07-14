import { Injectable } from "@angular/core";
import { AppStore } from "../app.store";
import { Observable } from "rxjs";
import { map, mergeMap, filter } from "rxjs/operators";
import { Group, Session } from "../http";

@Injectable()
export class PagesStore {
  constructor(private store: AppStore) {}

  private selectRoot$() {
    return this.store.observable.pipe(map(store => store.pages));
  }

  public chatTabs_currentGroupId$() {
    return this.selectRoot$().pipe(map(pages => pages.chatTab.currentGroupId));
  }

  public chatTabs_currenSessionId$() {
    return this.selectRoot$().pipe(
      map(pages => pages.chatTab.currentSessionId)
    );
  }

  public chatTabs_currentSessionOnlineMemberIds$() {
    return this.selectRoot$().pipe(
      map(pages => pages.chatTab.currentSessionOnlineMemberIds)
    );
  }

  public chatTabs_memberIsOnline$(memberId$: Observable<string>) {
    return this.chatTabs_currentSessionOnlineMemberIds$().pipe(
      mergeMap(memberIds => {
        return memberId$.pipe(map(memberId => memberIds.includes(memberId)));
      })
    );
  }
}
