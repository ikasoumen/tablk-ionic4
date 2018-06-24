import { Component } from "@angular/core";
import { AppearancesStore } from "../../stores/appearances.store";
import { DefaultService } from "../../http";

enum segments {
  Talk = "Talk",
  Notes = "Notes",
  Log = "Log"
}
@Component({
  selector: "tablk-session-chat-tabs-page",
  templateUrl: "session-chat-tabs.page.html",
  styleUrls: ["session-chat-tabs.page.scss"]
})
export class SessionChatTabsPage {
  public selectedSegment: segments = segments.Talk;

  constructor(public appearnce: AppearancesStore) {}

  public selectSegment(event: CustomEvent) {
    this.selectedSegment = event.detail.value;
  }

  public get segments() {
    return segments;
  }
}
