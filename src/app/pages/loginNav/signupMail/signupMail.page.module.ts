import { NgModule } from "@angular/core";
import { PageTitleModule } from "components/PageTitle/PageTitle.module";
import { FadeHeaderModule } from "directives/FadeHeader/FadeHeader.module";
import { IonicPageModule } from "ionic-angular";
import { SignupPage } from "./SignupPage";

@NgModule({
  declarations: [SignupPage],
  imports: [
    IonicPageModule.forChild(SignupPage),
    PageTitleModule,
    FadeHeaderModule
  ]
})
export class SignupPageModule {}
