import { Component, OnInit } from "@angular/core";
import { AppearancesStore } from "../../stores/appearances.store";
import { Session } from "../../http";
import { GroupActions } from "../../actions/groups.actions";
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { SessionsStore } from "app/stores/sessions.store";
import { AppDispatcher } from "app/app.dispatcher";
import { SessionActions } from "../../actions/sessions.actions";

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
export class SessionChatTabsPage implements OnInit {
  public session$: Observable<{ exist: boolean; _: Session }>;
  public selectedSegment: segments = segments.Talk;
  private sessionId: string;

  constructor(
    public appearnce: AppearancesStore,
    private route: ActivatedRoute,
    private groupActions: GroupActions,
    private sessionActions: SessionActions,
    private sessions: SessionsStore,
    private dispatcher: AppDispatcher
  ) {}

  public ngOnInit() {
    this.route.params.subscribe((params: SessionChatTabsPage.Params) => {
      this.sessionId = params.id;
      this.session$ = this.sessions.readOne$(of(this.sessionId));
      try {
        this.dispatcher.emit(this.sessionActions.getSessionOne(this.sessionId));
        this.dispatcher.emit(this.groupActions.getGroups(this.sessionId));
      } catch (e) {
        throw e;
      }
    });
  }

  public selectSegment(event: CustomEvent) {
    this.selectedSegment = event.detail.value;
  }
}

namespace SessionChatTabsPage {
  export interface Params {
    id: string;
  }
}
