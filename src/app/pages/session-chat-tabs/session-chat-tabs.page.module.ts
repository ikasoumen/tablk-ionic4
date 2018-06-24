import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SessionChatTabsPage } from "./session-chat-tabs.page";
import { AboutPageModule } from "../about/about.module";
import { TalkPageModule } from "../talk/talk.module";
import { TalkPage } from "app/pages/talk/talk.page";
import { AboutPage } from "app/pages/about/about.page";

const routes: Routes = [
  {
    path: "",
    // redirectTo: "/chat/(talk:talk)",
    component: SessionChatTabsPage
    // children: [
    //   {
    //     path: "talk",
    //     outlet: "talk",
    //     component: TalkPage
    //   },
    //   {
    //     path: "about",
    //     outlet: "about",
    //     component: AboutPage
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    TalkPageModule,
    AboutPageModule
  ],
  declarations: [SessionChatTabsPage]
})
export class SessionChatTabsPageModule {}
