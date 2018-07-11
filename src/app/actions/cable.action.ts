import { Injectable } from "@angular/core";
import { Actions, Action } from "app/walts";
import { AppState } from "../app.store";
import * as ActionCable from "actioncable";

@Injectable()
export class CableActions extends Actions<AppState> {
  private cable: ActionCable.Cable;

  connect(): Action<AppState> {
    return _state => {
      this.cable = ActionCable.createConsumer(
        `${window.default_cabel_url}?token=${Cookies.get("remember_token")}`
      );
      this.session_id = session_id;
      this.cable.subscriptions.create(
        { channel: "SessionMembersChannel", session_id: session_id },
        this.callbacks()
      );
      _state.cable.paneSplitted = paneSplitted;
      return _state;
    };
  }

  disconnect(): Action<AppState> {
    return _state => {
      _state.cable.paneSplitted = paneSplitted;
      return _state;
    };
  }
}
