import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginGuard } from "./providers/loginGuard/loginGuard";
import { NoLoginGuard } from "./providers/noLoginGuard/noLoginGuard";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./pages/noLogin/noLogin.module#NoLoginPageModule",
    pathMatch: "full",
    canActivate: [LoginGuard]
  },
  {
    path: "noLogin",
    loadChildren: "./pages/noLogin/noLogin.module#NoLoginPageModule",
    canActivate: [LoginGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
