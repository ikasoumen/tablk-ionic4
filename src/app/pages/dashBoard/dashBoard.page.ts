import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as fromSessions from "../../reducers/dashboard/sessions.reducer";
import { Session } from "../../http";
import { Observable } from "rxjs";
import { DashboardSessionsAction } from "../../reducers/dashboard.sessions.action";
import { InputChangeEvent } from "@ionic/core";
import { selecters, State } from "../../reducers";

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

  constructor(private store: Store<State>) {
    this.sessions$ = store.pipe(select(selecters.dashboard.sessions.all));
    this.sessions$.subscribe(sessions => console.log(sessions));

    store
      .pipe(select(selecters.dashboard.members.all))
      .subscribe(sessions => console.log("members:", sessions));
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
