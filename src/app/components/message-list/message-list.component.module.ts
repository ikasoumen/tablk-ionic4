import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MessageListComponent } from "./message-list.component";
import { MessageListItemComponentModule } from "../message-list-item/message-list-item.component.module";

@NgModule({
  declarations: [MessageListComponent],
  imports: [CommonModule, MessageListItemComponentModule],
  exports: [MessageListComponent]
})
export class MessageListComponentModule {}
