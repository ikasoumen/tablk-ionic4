import { NgModule } from "@angular/core";
import { SignupPage } from "./signupMail.page";
import { PageTitleModule } from "app/components/pageTitle/pageTitle.component.module";

@NgModule({
  declarations: [SignupPage],
  imports: [PageTitleModule]
})
export class SignupPageModule {}
