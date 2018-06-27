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
import { Member } from "app/http";

@Component({
  selector: "tablk-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteListComponent implements OnInit {
  @Input() sessionId: string;

  constructor(public note: NoteStore, public member: MemberStore) {}

  ngOnInit() {}

  public notes$() {
    this.member.readBySessionId$(this.sessionId).pipe(
      mergeMap((members: Member[]) => {
        const ids = members.map(member => member.id);
        return this.note.readByMemberIds$(ids);
      }),
      map(notes => console.log(notes))
    );
  }
}
