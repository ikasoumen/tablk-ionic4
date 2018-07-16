import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as fromSessions from "../../reducers/sessions.reducer";
import { Session } from "../../http";
import { Observable } from "rxjs";
import { DashboardSessionsAction } from "../../ngrx-actions/dashboard.sessions.action";
import { InputChangeEvent } from "@ionic/core";
import { tap } from "rxjs/operators";
import { selectDashboardSessionsAll } from "app/reducers";
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
    this.sessions$ = store.pipe(select(selectDashboardSessionsAll));
  }

  public ngOnInit() {
    this.store.dispatch(new DashboardSessionsAction.GetAll());
  }

  public updateQuery(event: InputChangeEvent) {
    this.store.dispatch(
      new DashboardSessionsAction.SetQuery({ query: event.value })
    );
  }
}
