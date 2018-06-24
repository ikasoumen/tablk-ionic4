import { NgModule } from "@angular/core";
import { SignupPage } from "./signupMail.page";
import { PageTitleModule } from "app/components/pageTitle/pageTitle.component.module";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SignupPage],
  imports: [PageTitleModule, FormsModule, IonicModule]
})
export class SignupPageModule {}
