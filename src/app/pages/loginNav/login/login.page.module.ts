import { NgModule } from "@angular/core";
import { LoginPage } from "./login.page";
import { PageTitleModule } from "app/components/pageTitle/pageTitle.component.module";

@NgModule({
  declarations: [LoginPage],
  imports: [PageTitleModule]
})
export class LoginPageModule {}
