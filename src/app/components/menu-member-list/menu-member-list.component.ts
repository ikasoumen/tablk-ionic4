import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  Input
} from "@angular/core";
import { Observable } from "../../../../node_modules/rxjs";
import { Member, Character } from "../../http";
import { SessionsStore } from "../../stores/sessions.store";
import { MemberStore } from "../../stores/member.store";
import { CharacterStore } from "../../stores/character.store";

@Component({
  selector: "tablk-menu-member-list",
  templateUrl: "./menu-member-list.component.html",
  styleUrls: ["./menu-member-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuMemberListComponent implements OnChanges {
  @Input() public sessionId: string;
  public members$: Observable<Member[]>;

  constructor(private member: MemberStore) {}

  ngOnChanges() {
    this.members$ = this.member.readBySessionId$(this.sessionId);
  }
}
