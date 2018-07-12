import { Injectable } from "@angular/core";
import * as ActionCable from "actioncable";
import { environment } from "environments/environment";
import { LoginStore } from "../stores/login.store";

@Injectable()
export class CableManager {
  private cable?: ActionCable.Cable;
  private sessionChannels = new Map<string, ActionCable.Channel>();
  private groupChannels = new Map<string, ActionCable.Channel>();

  constructor(private login: LoginStore) {}

  async init() {
    const apiKey = await this.login.apiKey$().toPromise();
    this.cable = ActionCable.createConsumer(
      `${environment.CABLE_PATH}?token=${apiKey}`
    );
  }

  public connectSession(sessionId: string) {
    const channel = this.cable.subscriptions.create(
      { channel: "SessionChannel", session_id: sessionId },
      {
        connected: () => {},
        disconnected: () => {},
        received: action => {},
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
