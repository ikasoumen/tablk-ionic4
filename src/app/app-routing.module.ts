import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginGuard } from "./providers/loginGuard/loginGuard";
import { NoLoginGuard } from "./providers/noLoginGuard/noLoginGuard";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./pages/noLogin/noLogin.page.module#NoLoginPageModule",
    canActivate: [LoginGuard],
    pathMatch: "full"
  },
  {
    path: "dashBoard",
    loadChildren: "./pages/dashBoard/dashBoard.page.module#DashBoardPageModule",
    canActivate: [NoLoginGuard]
  },
  {
    path: "sessions/:id",
    // "sessions/:id/chat" みたいな page への rooting が効かない
    loadChildren: "./pages/session/session.page.module#SessionPageModule",
    canActivate: [NoLoginGuard]
  },
  {
    path: "chat_tabs/sessions/:id",
    loadChildren:
      "./pages/session-chat-tabs/session-chat-tabs.page.module#SessionChatTabsPageModule",
    canActivate: [NoLoginGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
