import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { NoteStore } from "app/stores/note.store";
import { MemberStore } from "app/stores/member.store";
import { mergeMap, map } from "rxjs/operators";
import { Member, Note } from "app/http";
import { CharacterStore } from "../../stores/character.store";
import { of } from "rxjs";

@Component({
  selector: "tablk-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteListComponent implements OnInit {
  @Input() sessionId: string;

  constructor(
    public note: NoteStore,
    public member: MemberStore,
    public character: CharacterStore
  ) {}

  ngOnInit() {}

  public notes$() {
    return this.member.readBySessionId$(this.sessionId).pipe(
      mergeMap((members: Member[]) => {
        const ids = members.map(member => member.id);
        return this.note.readByMemberIds$(ids);
      })
    );
  }

  public character$(note: Note) {
    return this.character.readOne$_byMember$(this.member$(note));
  }

  public member$(note: Note) {
    return this.member.readOne$(note.memberId);
  }
}
