import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SessionListItemComponent } from "./session-list-item/session-list-item.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule.forRoot()],
  declarations: [SessionListItemComponent],
  entryComponents: []
})
export class ComponentsModule {}
