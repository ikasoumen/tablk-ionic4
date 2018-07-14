import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuMemberListComponent } from "./menu-member-list.component";
import { IonicModule } from "@ionic/angular";
import { MenuMemberListItemComponentModule } from "../menu-member-list-item/menu-member-list-item.component.module";

@NgModule({
  declarations: [MenuMemberListComponent],
  imports: [CommonModule, IonicModule, MenuMemberListItemComponentModule],
  exports: [MenuMemberListComponent]
})
export class MenuMemberListComponentModule {}
