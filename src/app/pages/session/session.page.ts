import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { SessionsStore } from "app/stores/sessions.store";
import { Observable, of } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Session } from "app/http";

namespace SessionPage {
  export interface Params {
    id: string;
  }
}

@Component({
  selector: "tablk-session-page",
  templateUrl: "./session.page.html",
  styleUrls: ["./session.page.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionPage implements OnInit {
  public session$: Observable<Session>;
  private id: string;

  constructor(private route: ActivatedRoute, private sessions: SessionsStore) {}

  ngOnInit() {
    this.route.params.subscribe((params: SessionPage.Params) => {
      this.id = params.id;
    });
    this.session$ = this.sessions.readOne$(of(this.id));
  }
}
