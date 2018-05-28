import { NgModule } from "@angular/core";
import { PageTitleModule } from "components/PageTitle/PageTitle.module";
import { FadeHeaderModule } from "directives/FadeHeader/FadeHeader.module";
import { IonicPageModule } from "ionic-angular";
import { LoginPage } from "./LoginPage";

@NgModule({
  declarations: [LoginPage],
  imports: [
    IonicPageModule.forChild(LoginPage),
    PageTitleModule,
    FadeHeaderModule
  ]
})
export class LoginPageModule {}
