import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuMemberListItemComponent } from "./menu-member-list-item.component";
import { IonicModule } from "@ionic/angular";
import { CharacterAvatarComponentModule } from "../character-avatar/character-avatar.component.module";

@NgModule({
  declarations: [MenuMemberListItemComponent],
  imports: [CommonModule, IonicModule, CharacterAvatarComponentModule],
  exports: [MenuMemberListItemComponent]
})
export class MenuMemberListItemComponentModule {}
