import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionChatTabsPage } from "./session-chat-tabs.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: SessionChatTabsPage }])
  ],
  declarations: [SessionChatTabsPage]
})
export class SessionChatTabsPageModule {}
