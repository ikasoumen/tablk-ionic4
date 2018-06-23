import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ScratchImageComponent } from "./scratch-image.component";
import { IonicModule } from "@ionic/angular";
import { MemberMiniListComponentModule } from "../member-mini-list/member-mini-list.component.module";

@NgModule({
  declarations: [ScratchImageComponent],
  imports: [IonicModule, CommonModule, MemberMiniListComponentModule],
  exports: [ScratchImageComponent]
})
export class ScratchImageComponentModule {}
