import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionChatTabsPage } from "./session-chat-tabs.page";
import { TalkPage } from "app/pages/talk/talk.page";
import { AboutPage } from "app/pages/about/about.page";
import { PageTitleModule } from "../../components/pageTitle/pageTitle.component.module";

const routes: Routes = [
  {
    path: "",
    component: SessionChatTabsPage,
    children: [
      {
        path: "talk",
        outlet: "talk",
        loadChildren: "./pages/talk/talk.page.module#TalkPageModule"
      },
      {
        path: "about",
        outlet: "about",
        loadChildren:
          "./pages/session-edit/session-edit.page.module#SessionEditPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PageTitleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SessionChatTabsPage]
})
export class SessionChatTabsPageModule {}
