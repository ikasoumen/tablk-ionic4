import { NgModule } from "@angular/core";
import { LoginNavRoot } from "./loginNav.page";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AuthManagerModule } from "../../providers/authManager/authManager.module";
import { PageTitleModule } from "../../components/pageTitle/pageTitle.component.module";
import { FormsModule } from "@angular/forms";
import { ToastManagerModule } from "../../providers/toastManager/toastManager.module";

@NgModule({
  entryComponents: [LoginNavRoot],
  imports: [IonicModule, PageTitleModule, FormsModule, ToastManagerModule],
  declarations: [LoginNavRoot]
})
export class LoginNavRootModule {}
