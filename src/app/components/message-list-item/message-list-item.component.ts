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
import { GroupsStore } from "../../stores/groups.store";
import { SessionsStore } from "../../stores/sessions.store";
import { MessageStore } from "../../stores/message.store";
import { Observable, of } from "rxjs";
import { Message, Character, Member } from "app/http";
import { mergeMap, map } from "rxjs/operators";

@Component({
  selector: "tablk-message-list-item",
  templateUrl: "./message-list-item.component.html",
  styleUrls: ["./message-list-item.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListItemComponent implements OnChanges, OnInit {
  @Input() private messageId: string;
  public message$: Observable<Message>;
  public character$: Observable<Character | null>;
  public member$: Observable<Member>;

  constructor(
    private message: MessageStore,
    private member: MemberStore,
    private character: CharacterStore
  ) {}

  public ngOnInit() {
    this.message$ = this.message.readOne$(this.messageId);
    this.member$ = this.message$.pipe(
      mergeMap(message => this.member.readOne$(message.memberId))
    );
    this.character$ = this.character.readOne$_byMember$(this.member$);
  }

  // note: Message, Act, Narration でコンポーネントを分けること
  public ngOnChanges() {
    this.message$ = this.message.readOne$(this.messageId);
    this.member$ = this.message$.pipe(
      mergeMap(message => this.member.readOne$(message.memberId))
    );
    this.character$ = this.character.readOne$_byMember$(this.member$);
  }
}
