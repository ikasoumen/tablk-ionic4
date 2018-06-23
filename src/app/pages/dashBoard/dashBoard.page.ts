import {
  Component,
  ElementRef,
  ChangeDetectorRef,
  OnChanges,
  OnInit
} from "@angular/core";
import { DefaultService } from "../../http";
import { SessionActions } from "../../actions/sessions.actions";
import { SessionsStore } from "../../stores/sessions.store";
import { AppDispatcher } from "app/app.dispatcher";

@Component({
  selector: "app-page-joined-sessions",
  templateUrl: "dashBoard.page.html",
  styleUrls: ["dashBoard.page.scss"]
})
export class DashBoardPage implements OnInit {
  public translatedTitle = "ダッシュボード";
  public title = "Dashboard";

  constructor(
    private sessionActions: SessionActions,
    public sessions: SessionsStore,
    private dispatcher: AppDispatcher
  ) {}

  ngOnInit() {
    this.dispatcher.emit(this.sessionActions.getJoinedSessions());
  }
}
