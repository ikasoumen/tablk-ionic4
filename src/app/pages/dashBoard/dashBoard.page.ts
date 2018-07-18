import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Session } from "../../http";
import { Observable } from "rxjs";
import { InputChangeEvent } from "@ionic/core";
import { fromRoot } from "app/reducers";
import { fromDashboard } from "../../reducers/dashboard/reducers";

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

  constructor(private store: Store<fromRoot.State>) {
    this.sessions$ = store.pipe(select(fromDashboard.getAllSession));
    this.sessions$.subscribe(sessions => console.log(sessions));

    // store
    //   .pipe(select(selecters.dashboard.members.all))
    //   .subscribe(sessions => console.log("members:", sessions));
  }

  public ngOnInit() {
    // this.store.dispatch(new fromSessions.GetAll());
  }

  public updateQuery(event: InputChangeEvent) {
    // this.store.dispatch(
    //   new DashboardSessionsAction.SetQuery({ query: event.value })
    // );
  }
}
