import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MemberMiniListComponent } from "./member-mini-list.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [MemberMiniListComponent],
  imports: [CommonModule],
  exports: [MemberMiniListComponent]
})
export class MemberMiniListComponentModule {}
