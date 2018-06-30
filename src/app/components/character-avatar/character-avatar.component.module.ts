import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CharacterAvatarComponent } from "./character-avatar.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [CharacterAvatarComponent],
  imports: [IonicModule, CommonModule],
  exports: [CharacterAvatarComponent]
})
export class CharacterAvatarComponentModule {}
