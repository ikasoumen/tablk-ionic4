import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NoLoginPage } from "./noLogin.page";
import { LoginNavRootModule } from "../loginNav/loginNav.page.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoginNavRootModule,
    RouterModule.forChild([{ path: "", component: NoLoginPage }])
  ],
  declarations: [NoLoginPage]
})
export class NoLoginPageModule {}
