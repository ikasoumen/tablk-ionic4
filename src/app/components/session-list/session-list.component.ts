import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  Input
} from "@angular/core";
import { of, Observable } from "rxjs";
import { Session } from "../../http";
import { NavController } from "@ionic/angular";

@Component({
  selector: "tablk-session-list",
  templateUrl: "./session-list.component.html",
  styleUrls: ["./session-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionListComponent {
  @Input() private sessions$: Observable<Session[]>;

  constructor(public navCtrl: NavController) {}

  public pushSessionPage(session: Session) {
    this.navCtrl.goForward(`sessions/${session.id}`);
  }
}
