import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NoteListComponent } from "./note-list.component";
import { IonicModule } from "@ionic/angular";
import { MemberMiniListComponentModule } from "../member-mini-list/member-mini-list.component.module";

@NgModule({
  declarations: [NoteListComponent],
  imports: [IonicModule, CommonModule, MemberMiniListComponentModule],
  exports: [NoteListComponent]
})
export class NoteListComponentModule {}
