import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SessionPage } from "./session.page";
import { LoginNavRootModule } from "../loginNav/loginNav.page.module";

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [SessionPage]
})
export class SessionPageModule {}
