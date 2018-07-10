import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MessageListItemComponent } from "./message-list-item.component";
import { CharacterAvatarComponentModule } from "../character-avatar/character-avatar.component.module";
import { ScratchTextComponentModule } from "../scratch-text/scratch-text.component.module";

@NgModule({
  declarations: [MessageListItemComponent],
  imports: [
    CommonModule,
    CharacterAvatarComponentModule,
    ScratchTextComponentModule
  ],
  exports: [MessageListItemComponent]
})
export class MessageListItemComponentModule {}
