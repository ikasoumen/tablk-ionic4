import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SessionListItemComponent } from "./session-list-item.component";

@NgModule({
  declarations: [SessionListItemComponent],
  imports: [CommonModule],
  exports: [SessionListItemComponent]
})
export class SessionListItemComponentModule {}
