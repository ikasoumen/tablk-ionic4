import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionPage } from "./session.page";
import { ScratchTextComponentModule } from "../../components/scratch-text/scratch-text.component.module";
import { PageTitleModule } from "../../components/pageTitle/pageTitle.component.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ScratchTextComponentModule,
    PageTitleModule,
    RouterModule.forChild([
      {
        path: "",
        component: SessionPage,
        pathMatch: "full"
      },
      {
        path: "new",
        loadChildren:
          "../session-edit/session-edit.page.module#SessionEditPageModule"
      },
      {
        path: "edit",
        loadChildren:
          "../session-edit/session-edit.page.module#SessionEditPageModule"
      },
      {
        path: "chat",
        loadChildren:
          "../session-chat-tabs/session-chat-tabs.page.module#SessionChatTabsPageModule"
      }
    ])
  ],
  declarations: [SessionPage],
  exports: [RouterModule]
})
export class SessionPageModule {}
