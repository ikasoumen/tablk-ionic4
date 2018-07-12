import { Injectable } from "@angular/core";
import { Actions, Action } from "../walts";

import { AppState } from "../app.store";
import { DelayedAction } from "../walts";
import { DefaultService } from "../http";
import { addSome, setSome } from "../helpers/helpers";
import { HttpErrorHandler } from "../providers/httpErrorHandler";
import { MessagesResponse } from "../http/model/messagesResponse";

@Injectable()
export class MessageActions extends Actions<AppState> {
  constructor(
    private api: DefaultService,
    private httpError: HttpErrorHandler
  ) {
    super();
  }

  getMessages(groupId: string): DelayedAction<AppState> {
    return st => {
      return this.delayed(async apply => {
        const responce = (await this.api
          .groupsGroupIdMessagesGet(groupId)
          .toPromise()
          .catch(error => {
            this.httpError.handle(error);
            throw error;
          })) as MessagesResponse;
        apply(_st => this.applyResponce(_st, responce));
      });
    };
  }

  private applyResponce(state: AppState, responce: MessagesResponse): AppState {
    const { messages } = responce;
    state.messages = setSome(state.messages, Object.entries(messages));
    return state;
  }
}
