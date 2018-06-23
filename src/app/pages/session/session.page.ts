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
import { InputChangeEvent } from "@ionic/core";

enum segments {
  Description = "Description",
  Members = "Members",
  Notes = "Notes"
}
@Component({
  selector: "tablk-session-page",
  templateUrl: "./session.page.html",
  styleUrls: ["./session.page.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionPage implements OnInit {
  public session$: Observable<{ exist: boolean; _: Session }>;
  public selectedSegment: segments = segments.Description;
  private id: string;

  constructor(private route: ActivatedRoute, private sessions: SessionsStore) {}

  public ngOnInit() {
    this.route.params.subscribe((params: SessionPage.Params) => {
      this.id = params.id;
    });
    this.session$ = this.sessions.readOne$(of(this.id));
  }

  public get segment() {
    return segments;
  }

  public selectSegment(event: CustomEvent) {
    this.selectedSegment = event.detail.value;
  }
}

namespace SessionPage {
  export interface Params {
    id: string;
  }
}
