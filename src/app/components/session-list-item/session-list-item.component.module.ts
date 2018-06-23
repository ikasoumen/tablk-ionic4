import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SessionListItemComponent } from "./session-list-item.component";
import { IonicModule } from "@ionic/angular";
import { MemberMiniListComponentModule } from "../member-mini-list/member-mini-list.component.module";

@NgModule({
  declarations: [SessionListItemComponent],
  imports: [IonicModule, CommonModule, MemberMiniListComponentModule],
  exports: [SessionListItemComponent]
})
export class SessionListItemComponentModule {}
