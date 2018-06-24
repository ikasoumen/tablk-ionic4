import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SessionPage } from "./session.page";
import { LoginNavRootModule } from "../loginNav/loginNav.page.module";
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
          "./pages/session-edit/session-edit.page.module#SessionEditPageModule"
      },
      {
        path: "edit",
        loadChildren:
          "./pages/session-edit/session-edit.page.module#SessionEditPageModule"
      },
      {
        path: "chat",
        loadChildren:
          "./pages/session-chat-tabs/session-chat-tabs.page.module#SessionChatTabsPageModule"
      }
    ])
  ],
  declarations: [SessionPage],
  exports: [RouterModule]
})
export class SessionPageModule {}
