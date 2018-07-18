import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  Input
} from "@angular/core";
import { Observable } from "rxjs";
import { Session, Member } from "../../http";
import { fromRoot } from "../../reducers";
import { Store } from "@ngrx/store";
import { map, tap } from "rxjs/operators";

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

  constructor(private store: Store<fromRoot.State>) {}

  ngOnChanges() {
    // this.members$ = this.store
    //   .select(selecters.dashboard.members.all)
    //   .pipe(
    //     map(members =>
    //       members.filter(member => member.sessionId === this.session.id)
    //     )
    //   );
  }

  public emitClick(event: Event) {
    // this.click.emit(event);
  }
}
