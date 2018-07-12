import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionChatTabsPage } from "./session-chat-tabs.page";
import { TalkPage } from "../talk/talk.page";
import { AboutPage } from "../about/about.page";
import { PageTitleModule } from "../../components/pageTitle/pageTitle.component.module";
import { NoteListComponentModule } from "../../components/note-list/note-list.component.module";
import { MessageListComponentModule } from "../../components/message-list/message-list.component.module";
import { CableManager } from "../../providers/cableManager";

const routes: Routes = [
  {
    path: "",
    component: SessionChatTabsPage,
    children: [
      {
        path: "talk",
        outlet: "talk",
        loadChildren: "../talk/talk.page.module#TalkPageModule"
      },
      {
        path: "about",
        outlet: "about",
        loadChildren:
          "../session-edit/session-edit.page.module#SessionEditPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PageTitleModule,
    NoteListComponentModule,
    MessageListComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SessionChatTabsPage]
})
export class SessionChatTabsPageModule {}
