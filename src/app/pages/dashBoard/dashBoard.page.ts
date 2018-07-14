import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { SessionsStore } from "../../stores/sessions.store";
import { AppDispatcher } from "../../app.dispatcher";
import { Store, select } from "@ngrx/store";
import * as fromSessions from "../../reducers/sessions.reducer";
import { Session } from "app/http";
import { Observable } from "rxjs";
import { SessionsAction } from "app/ngrx-actions/sessions.action";
import { InputChangeEvent } from "../../../../node_modules/@ionic/core";
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
  public sessions$: Observable<Session[]>;

  constructor(private store: Store<fromSessions.State>) {
    this.sessions$ = store.pipe(select(fromSessions.all));
  }

  public ngOnInit() {
    this.store.dispatch(new SessionsAction.GetAll());
  }
  public updateQuery(event: InputChangeEvent) {
    this.store.dispatch(new SessionsAction.SetQuery({ query: event.value }));
  }
}
