import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  Input
} from "@angular/core";
import { SessionsStore } from "app/stores/sessions.store";

@Component({
  selector: "tablk-session-list-item",
  templateUrl: "./session-list-item.component.html",
  styleUrls: ["./session-list-item.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionListItemComponent implements OnChanges {
  @Input() private id: string;

  constructor(public sessions: SessionsStore) {}

  ngOnChanges() {
    this.sessions.readSome$();
  }
}
