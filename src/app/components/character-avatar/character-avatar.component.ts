import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnChanges
} from "@angular/core";
import {
  CharacterStore,
  NameOnlyCharacter
} from "../../stores/character.store";
import { Character } from "../../http";
import { Observable, of } from "rxjs";
import { SessionsStore } from "../../stores/sessions.store";
import { map } from "rxjs/operators";

@Component({
  selector: "tablk-character-avatar",
  templateUrl: "./character-avatar.component.html",
  styleUrls: ["./character-avatar.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterAvatarComponent implements OnChanges {
  @Input() public name: string;
  @Input() public sessionId: string;
  public character$: Observable<Character | NameOnlyCharacter>;
  public shouldShow$: Observable<boolean>;

  constructor(
    public character: CharacterStore,
    public session: SessionsStore
  ) {}

  ngOnChanges() {
    this.character$ = this.character.readOne$_byNameAndSession$(
      of(this.name),
      this.session.readOne$(of(this.sessionId))
    );
    this.shouldShow$ = this.character$.pipe(
      // nameOnlyCharacter かどうかの判定
      map(character => character.id != null)
    );
  }
}
