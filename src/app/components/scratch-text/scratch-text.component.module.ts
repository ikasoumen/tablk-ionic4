import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ScratchTextComponent } from "./scratch-text.component";
import { IonicModule } from "@ionic/angular";
import { MemberMiniListComponentModule } from "../member-mini-list/member-mini-list.component.module";

@NgModule({
  declarations: [ScratchTextComponent],
  imports: [IonicModule, CommonModule, MemberMiniListComponentModule],
  exports: [ScratchTextComponent]
})
export class ScratchTextComponentModule {}
