import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnChanges
} from "@angular/core";
import { MemberStore } from "../../stores/member.store";
import { CharacterStore } from "../../stores/character.store";
import { Member, Character } from "../../http";
import { Observable, of } from "rxjs";
import { PagesStore } from "../../stores/pages.store";

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
  public isOnline$: Observable<boolean>;

  constructor(
    private member: MemberStore,
    private character: CharacterStore,
    private page: PagesStore
  ) {}

  ngOnChanges() {
    this.member$ = this.member.readOne$(this.memberId);
    this.isOnline$ = this.page.chatTabs_memberIsOnline$(of(this.memberId));
    this.character$ = this.character.readOne$_byMember$(this.member$);
  }
}
