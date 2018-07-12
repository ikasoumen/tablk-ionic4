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
}
