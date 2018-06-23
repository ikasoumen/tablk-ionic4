import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SessionListItemComponent } from "./session-list-item.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [SessionListItemComponent],
  imports: [IonicModule, CommonModule],
  exports: [SessionListItemComponent]
})
export class SessionListItemComponentModule {}
