import { Component } from "@angular/core";
import { AppearancesStore } from "../../stores/appearances.store";
import { DefaultService } from "../../http";

@Component({
  selector: "tablk-session-chat-tabs-page",
  templateUrl: "session-chat-tabs.page.html",
  styleUrls: ["session-chat-tabs.page.scss"]
})
export class SessionChatTabsPage {
  constructor(public appearnce: AppearancesStore) {
    console.log(this);
  }
}
