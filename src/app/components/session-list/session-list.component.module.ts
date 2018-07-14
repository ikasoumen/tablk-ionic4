import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SessionListComponent } from "./session-list.component";
import { IonicModule } from "@ionic/angular";
import { SessionListItemComponentModule } from "../session-list-item/session-list-item.component.module";

@NgModule({
  declarations: [SessionListComponent],
  imports: [IonicModule, CommonModule, SessionListItemComponentModule],
  exports: [SessionListComponent]
})
export class SessionListComponentModule {}
