import { Component, OnInit } from "@angular/core";
import { AppearancesStore } from "../../stores/appearances.store";
import { Session, Group } from "../../http";
import { GroupActions } from "../../actions/groups.actions";
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { SessionsStore } from "app/stores/sessions.store";
import { AppDispatcher } from "app/app.dispatcher";
import { SessionActions } from "../../actions/sessions.actions";
import { GroupsStore } from "../../stores/groups.store";
import { map, first } from "rxjs/operators";
import { MessageActions } from "../../actions/messages.actions";

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
  public session$: Observable<Session>;
  public selectedSegment: segments = segments.Talk;
  public groups$: Observable<Group[]>;
  private sessionId: string;

  constructor(
    public appearnce: AppearancesStore,
    private route: ActivatedRoute,
    private groupActions: GroupActions,
    private groups: GroupsStore,
    private sessionActions: SessionActions,
    private messageActions: MessageActions,
    private sessions: SessionsStore,
    private dispatcher: AppDispatcher
  ) {}

  public ngOnInit() {
    this.route.params.subscribe((params: SessionChatTabsPage.Params) => {
      this.sessionId = params.id;
      this.session$ = this.sessions.readOne$(of(this.sessionId));
      this.groups$ = this.groups.readSome$_bySession$(this.session$);
      this.groups$.pipe(first()).subscribe(groups => {
        const mainGroup = groups.filter(group => group.type === "Main")[0];
        this.dispatcher.emit(this.messageActions.getMessages(mainGroup.id));
      });
      try {
        this.dispatcher.emit(this.sessionActions.getSessionOne(this.sessionId));
        this.dispatcher.emit(this.groupActions.getGroups(this.sessionId));
      } catch (e) {
        throw e;
      }
    });
  }

  public get mainGroup$(): Observable<Group> {
    return this.groups$.pipe(
      map(groups => groups.filter(group => group.type === "Main")[0])
    );
  }

  public get segmentTitle() {
    switch (this.selectedSegment) {
      case segments.Talk:
        return "Talk";
      case segments.Notes:
        return "Notes";
      case segments.Log:
        return "Log";
      default:
        return "";
    }
  }

  public get segmentTranslatedTitle() {
    switch (this.selectedSegment) {
      case segments.Talk:
        return "会話";
      case segments.Notes:
        return "メモ";
      case segments.Log:
        return "過去ログ";
      default:
        return "";
    }
  }

  public get segments() {
    return segments;
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
