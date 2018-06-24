import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { DefaultService } from "../../http";
import { SessionActions } from "../../actions/sessions.actions";
import { SessionsStore } from "../../stores/sessions.store";
import { AppDispatcher } from "app/app.dispatcher";

@Component({
  selector: "tablk-page-joined-sessions",
  templateUrl: "dashBoard.page.html",
  styleUrls: ["dashBoard.page.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashBoardPage implements OnInit {
  public title = "セッション一覧";
  public queryText: string;

  constructor(
    private sessionActions: SessionActions,
    public sessions: SessionsStore,
    private dispatcher: AppDispatcher
  ) {}

  public ngOnInit() {
    this.dispatcher.emit(this.sessionActions.getJoinedSessions());
  }
  public updateSession(event) {}
}
