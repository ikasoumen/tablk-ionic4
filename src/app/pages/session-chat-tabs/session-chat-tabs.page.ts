import { Component, OnInit } from "@angular/core";
import { AppearancesStore } from "../../stores/appearances.store";
import { Session, Group } from "../../http";
import { GroupActions } from "../../actions/groups.actions";
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { SessionsStore } from "../../stores/sessions.store";
import { AppDispatcher } from "../../app.dispatcher";
import { SessionActions } from "../../actions/sessions.actions";
import { GroupsStore } from "../../stores/groups.store";
import { map, first } from "rxjs/operators";
import { MessageActions } from "../../actions/messages.actions";
import { CableManager } from "../../providers/cableManager";
import { AppearancesActions } from "../../actions/appearances.actions";
import { Pages } from "../../constants";
import { PagesActions } from "../../actions/pages.actions";
import { PagesStore } from "../../stores/pages.store";

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
  private currentGroupId: string;

  constructor(
    public appearnce: AppearancesStore,
    private route: ActivatedRoute,
    private groupActions: GroupActions,
    private groups: GroupsStore,
    private sessionActions: SessionActions,
    private messageActions: MessageActions,
    private appearnceActions: AppearancesActions,
    private pageActions: PagesActions,
    private pages: PagesStore,
    private sessions: SessionsStore,
    private dispatcher: AppDispatcher,
    private cable: CableManager
  ) {}

  public ngOnInit() {
    this.dispatcher.emit(this.appearnceActions.setCurrentPage(Pages.chat));

    this.route.params.subscribe(async (params: SessionChatTabsPage.Params) => {
      this.sessionId = params.id;
      this.dispatcher.emit(
        this.pageActions.chatTabs_setSessionId(this.sessionId)
      );
      this.session$ = this.sessions.readOne$(of(this.sessionId));
      this.groups$ = this.groups.readSome$_bySession$(this.session$);
      this.groups$.pipe(first()).subscribe(groups => {
        const mainGroup = groups.filter(group => group.type === "Main")[0];
        this.dispatcher.emit(this.messageActions.getMessages(mainGroup.id));
        this.cable.connectGroup(mainGroup.id);
      });
      try {
        this.dispatcher.emit(this.sessionActions.getSessionOne(this.sessionId));
        this.dispatcher.emit(this.groupActions.getGroups(this.sessionId));
        this.dispatcher.emit(
          this.pageActions.chatTabs_getOnlineMemberIds(this.sessionId)
        );
        await this.cable.init();
        this.cable.connectSession(this.sessionId);
      } catch (e) {
        throw e;
      }
    });

    // get CurrentGroupId
    this.pages
      .chatTabs_currentGroupId$()
      .subscribe(groupId => (this.currentGroupId = groupId));
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

  public postMessage() {
    this.cable.postToGroup("3");
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
