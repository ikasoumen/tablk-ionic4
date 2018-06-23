import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  Input
} from "@angular/core";
import { Observable, of } from "rxjs";
import { Member } from "app/http";
import { MemberStore } from "../../stores/member.store";

@Component({
  selector: "tablk-member-mini-list",
  templateUrl: "./member-mini-list.component.html",
  styleUrls: ["./member-mini-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberMiniListComponent implements OnChanges {
  @Input() private sessionId: string;
  public members$ = new Observable<Member[]>();

  constructor(public member: MemberStore) {}

  ngOnChanges() {
    this.members$ = this.member.readBySessionId$(this.sessionId);
  }
}
