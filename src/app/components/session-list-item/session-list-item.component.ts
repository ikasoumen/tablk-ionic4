import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  Input
} from "@angular/core";
import { SessionsStore } from "app/stores/sessions.store";
import { of, Observable } from "rxjs";
import { Session } from "../../http";
import { NavController } from "@ionic/angular";

@Component({
  selector: "tablk-session-list-item",
  templateUrl: "./session-list-item.component.html",
  styleUrls: ["./session-list-item.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionListItemComponent implements OnChanges {
  @Input() private ids: string[];
  public sessions$ = new Observable<Session[]>();

  constructor(public sessions: SessionsStore, public navCtrl: NavController) {}

  ngOnChanges() {
    this.sessions$ = this.sessions.readSome$(of(this.ids));
  }

  public pushSessionPage(session: Session) {
    this.navCtrl.goForward(`sessions/${session.id}`);
  }
}
