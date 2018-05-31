import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./pages/noLogin/noLogin.module#NoLoginPageModule",
    pathMatch: "full"
  },
  {
    path: "noLogin",
    loadChildren: "./pages/noLogin/noLogin.module#NoLoginPageModule"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
