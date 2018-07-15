import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { SessionsStore } from "../../stores/sessions.store";
import { of, Observable } from "rxjs";
import { Session, Member } from "../../http";
import { NavController } from "@ionic/angular";

@Component({
  selector: "tablk-session-list-item",
  templateUrl: "./session-list-item.component.html",
  styleUrls: ["./session-list-item.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionListItemComponent implements OnChanges {
  @Input() private session: Session;
  // @Output() public click = new EventEmitter<Event>();
  public members$: Observable<Member[]>;

  constructor() {}

  ngOnChanges() {
    this.members$ = of();
  }

  public emitClick(event: Event) {
    // this.click.emit(event);
  }
}
