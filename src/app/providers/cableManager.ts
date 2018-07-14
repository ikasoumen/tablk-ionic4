import { Injectable } from "@angular/core";
import * as ActionCable from "actioncable";
import { environment } from "environments/environment";
import { LoginStore } from "../stores/login.store";
import { LocalStorageKeys } from "../constants";
import { getFromLocalStrage } from "../helpers/localStorageKey";

@Injectable()
export class CableManager {
  private cable?: ActionCable.Cable;
  private sessionChannels = new Map<string, ActionCable.Channel>();
  private groupChannels = new Map<string, ActionCable.Channel>();

  public init() {
    const apiKey = getFromLocalStrage<LocalStorageKeys, "apiKey">("apiKey");
    this.cable = ActionCable.createConsumer(
      `${environment.CABLE_PATH}?api_key=${apiKey}`
    );
  }

  public connectSession(sessionId: string) {
    const channel = this.cable.subscriptions.create(
      { channel: "SessionMembersChannel", session_id: sessionId },
      {
        connected: () => {
          console.log("connected!");
        },
        disconnected: () => {
          console.log("disconnected!");
        },
        received: action => {
          console.log("connected!");
        },
        rejected: reason => {
          console.log("Authorization failed because " + reason);
        }
      }
    );
    this.sessionChannels.set(sessionId, channel);
  }

  public connectGroup(groupId: string) {
    const channel = this.cable.subscriptions.create(
      { channel: "GroupChannel", group_id: groupId },
      {
        connected: () => {},
        disconnected: () => {},
        received: action => {},
        rejected: reason => {
          console.log("Authorization failed because " + reason);
        }
      }
    );
    this.groupChannels.set(groupId, channel);
  }
}
