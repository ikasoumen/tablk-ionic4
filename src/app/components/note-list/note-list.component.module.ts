import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NoteListComponent } from "./note-list.component";
import { IonicModule } from "@ionic/angular";
import { CharacterAvatarComponentModule } from "../character-avatar/character-avatar.component.module";

@NgModule({
  declarations: [NoteListComponent],
  imports: [IonicModule, CommonModule, CharacterAvatarComponentModule],
  exports: [NoteListComponent]
})
export class NoteListComponentModule {}
