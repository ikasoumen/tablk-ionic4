import { Injectable } from "@angular/core";
import { Actions, Action } from "../walts";

import { AppState } from "../app.store";
import { DelayedAction } from "../walts";
import { DefaultService } from "../http";
import { addSome, setSome } from "../helpers/helpers";
import { HttpErrorHandler } from "../providers/httpErrorHandler";
import { GroupsResponse } from "../http/model/groupsResponse";
import { Observable, Subject } from "rxjs";

@Injectable()
export class GroupActions extends Actions<AppState> {
  constructor(
    private api: DefaultService,
    private httpError: HttpErrorHandler
  ) {
    super();
  }

  getGroups(sessionId: string): DelayedAction<AppState> {
    return st => {
      return this.delayed(async apply => {
        const responce = (await this.api
          .sessionsSessionIdGroupsGet(sessionId)
          .toPromise()
          .catch(error => {
            this.httpError.handle(error);
            throw error;
          })) as GroupsResponse;
        apply(_st => this.applyResponce(_st, responce));
      });
    };
  }

  private applyResponce(state: AppState, responce: GroupsResponse): AppState {
    const { groups } = responce;
    state.groups = setSome(state.groups, Object.entries(groups));
    return state;
  }
}
