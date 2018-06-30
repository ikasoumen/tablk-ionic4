import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MessageListComponent } from "./message-list.component";
import { IonicModule } from "@ionic/angular";
import { CharacterAvatarComponentModule } from "../character-avatar/character-avatar.component.module";

@NgModule({
  declarations: [MessageListComponent],
  imports: [IonicModule, CommonModule, CharacterAvatarComponentModule],
  exports: [MessageListComponent]
})
export class MessageListComponentModule {}
