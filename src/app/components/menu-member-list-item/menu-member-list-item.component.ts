import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnChanges
} from "@angular/core";
import { MemberStore } from "app/stores/member.store";
import { CharacterStore } from "app/stores/character.store";
import { Member, Character } from "app/http";
import { Observable } from "../../../../node_modules/rxjs";

@Component({
  selector: "tablk-menu-member-list-item",
  templateUrl: "./menu-member-list-item.component.html",
  styleUrls: ["./menu-member-list-item.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuMemberListItemComponent implements OnChanges {
  @Input() public memberId: string;
  @Input() public sessionId: string;
  public member$: Observable<Member>;
  public character$: Observable<Character>;

  constructor(private member: MemberStore, private character: CharacterStore) {}

  ngOnChanges() {
    this.member$ = this.member.readOne$(this.memberId);
    this.character$ = this.character.readOne$_byMember$(this.member$);
  }
}
