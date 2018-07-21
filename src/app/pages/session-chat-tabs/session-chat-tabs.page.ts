import { Component, OnInit } from "@angular/core";
import { AppearancesStore } from "../../stores/appearances.store";
import { Session, Group } from "../../http";
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { map, first } from "rxjs/operators";
import { CableManager } from "../../providers/cableManager";
import { Store, select } from "@ngrx/store";
import { fromRoot } from "app/reducers";
import { SessionsAction } from "app/reducers/dashboard/actions/sessions.actions";
import { fromDashboard } from "app/reducers/dashboard/reducers";

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
  private sessionId: string | undefined;
  private currentGroupId: string;

  constructor(
    public appearnce: AppearancesStore,
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
    private cable: CableManager
  ) {}

  public ngOnInit() {
    this.session$ = this.store.pipe(
      select(fromDashboard.getSessionEntities),
      map(sessions => sessions[this.sessionId])
    );

    this.groups$ = this.store.pipe(select(fromDashboard.getAllGroup));

    // Group が select されたら DB から取得する
    this.groups$.pipe(first()).subscribe(groups => {
      const mainGroup = groups.filter(group => group.type === "Main")[0];
      // this.dispatcher.emit(this.messageActions.getMessages(mainGroup.id));
      this.store.dispatch(
        new SessionsAction.SelectChat({ sessionId: this.sessionId })
      );
      this.cable.connectGroup(mainGroup.id);
    });

    this.route.params.subscribe(async (params: SessionChatTabsPage.Params) => {
      this.sessionId = params.id;
      this.store.dispatch(
        new SessionsAction.SelectChat({ sessionId: this.sessionId })
      );

      try {
        // this.dispatcher.emit(this.sessionActions.getSessionOne(this.sessionId));
        // this.dispatcher.emit(this.groupActions.getGroups(this.sessionId));
        // this.dispatcher.emit(
        //   this.pageActions.chatTabs_getOnlineMemberIds(this.sessionId)
        // );
        await this.cable.init();
        this.cable.connectSession(this.sessionId);
      } catch (e) {
        throw e;
      }
    });

    // get CurrentGroupId
    // this.pages
    //   .chatTabs_currentGroupId$()
    //   .subscribe(groupId => (this.currentGroupId = groupId));
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
