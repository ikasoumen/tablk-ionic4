import { Injectable } from "@angular/core";
import * as ActionCable from "actioncable";
import { environment } from "environments/environment";
import { LoginStore } from "../stores/login.store";
import { LocalStorageKeys } from "../constants";
import { getFromLocalStrage } from "../helpers/localStorageKey";
import { AppDispatcher } from "../app.dispatcher";
import { MessageActions } from "../actions/messages.actions";

enum GroupChannelActions {
  writeMessage = "writeMessage",
  error = "error"
}

@Injectable()
export class CableManager {
  private cable?: ActionCable.Cable;
  private sessionChannels = new Map<string, ActionCable.Channel>();
  private groupChannels = new Map<string, ActionCable.Channel>();

  constructor(
    private dispatcher: AppDispatcher,
    private messageAction: MessageActions
  ) {}

  public init() {
    const apiKey = getFromLocalStrage<LocalStorageKeys, "apiKey">("apiKey");
    this.cable = ActionCable.createConsumer(
      `${environment.CABLE_PATH}?api_key=${apiKey}`
    );
  }

  public connectSession(sessionId: string) {
    const channel = this.cable.subscriptions.create(
      { channel: "Apiv2::SessionsChannel", session_id: sessionId },
      {
        connected: () => {
          console.log("connected!");
        },
        disconnected: () => {
          console.log("disconnected!");
        },
        received: action => {
          console.log("connected!");
          debugger;
        },
        rejected: reason => {
          console.log("Authorization failed because " + reason);
        }
      }
    );
    this.sessionChannels.set(sessionId, channel);
  }

  public postToGroup(groupId: string) {
    console.log(groupId);
    this.groupChannels.get(groupId).perform("createMessage", { body: "test" });
  }

  public connectGroup(groupId: string) {
    const channel = this.cable.subscriptions.create(
      { channel: "Apiv2::GroupsChannel", group_id: groupId },
      {
        connected: () => {
          console.log("connected!");
        },
        disconnected: () => {
          console.log("disconnected!");
        },
        received: (action: { name: GroupChannelActions; data: any }) => {
          action.data = JSON.parse(action.data);
          switch (action.name) {
            case GroupChannelActions.writeMessage: {
              // ここで route して flux に渡す
            }
          }
        },
        rejected: reason => {
          console.log("Authorization failed because " + reason);
        }
      }
    );
    this.groupChannels.set(groupId, channel);
  }
}
