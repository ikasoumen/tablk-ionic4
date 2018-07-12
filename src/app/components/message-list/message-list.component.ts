import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnChanges
} from "@angular/core";
import { MessageStore } from "../../stores/message.store";
import { Observable, of } from "rxjs";
import { Group, Message } from "../../http";
import { AppDispatcher } from "../../app.dispatcher";
import { MessageActions } from "../../actions/messages.actions";
import { distinctUntilChanged, mergeMap, map } from "rxjs/operators";
import { MemberStore } from "../../stores/member.store";
import { CharacterStore } from "../../stores/character.store";
import { GroupsStore } from "../../stores/groups.store";
import { SessionsStore } from "../../stores/sessions.store";

@Component({
  selector: "tablk-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent implements OnChanges {
  @Input() groupId: string;
  public group$: Observable<Group>;

  constructor(
    private message: MessageStore,
    private group: GroupsStore,
    private member: MemberStore,
    private character: CharacterStore,
    private sessions: SessionsStore
  ) {}

  public ngOnChanges() {
    this.group$ = this.group.readOne$(this.groupId);
  }

  public get messages$() {
    return this.message.readSome$_byGroup$(this.group$);
  }

  public character$(name: string) {
    return this.character.readOne$_byNameAndSession$(
      of(name),
      this.sessions.readOne$_byGroup$(this.group$)
    );
  }

  public member$(message: Message) {
    return this.member.readOne$(message.memberId);
  }

  /**
   * 1. member character を確認する
   * 2. roleAs が空ならばキャラクター名を返す
   * 3. roleAs が
   */
  public name$(
    message: Message
  ): Observable<{ roleAs: string; actual?: string; color: string }> {
    console.log(message);
    return this.member$(message).pipe(
      mergeMap(member => {
        return this.character$(message.roleAs).pipe(
          map(character => {
            const roleAs = message.roleAs ? message.roleAs : character.name;
            const actual =
              message.roleAs === character.name ? undefined : character.name;
            return { roleAs, actual, color: member.color };
          })
        );
      })
    );
  }
}
