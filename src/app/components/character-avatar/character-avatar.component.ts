import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnChanges
} from "@angular/core";
import { CharacterStore } from "../../stores/character.store";
import { Character } from "app/http";
import { Observable } from "rxjs";

@Component({
  selector: "tablk-character-avatar",
  templateUrl: "./character-avatar.component.html",
  styleUrls: ["./character-avatar.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterAvatarComponent implements OnChanges {
  @Input() private characterId: string;
  public character$: Observable<Character>;
  public loaded$: Observable<boolean>;

  constructor(public character: CharacterStore) {}

  ngOnChanges() {
    this.character$ = this.character.readOne$(this.characterId);
  }
}
