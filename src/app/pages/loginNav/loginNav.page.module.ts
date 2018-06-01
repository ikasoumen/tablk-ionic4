import { NgModule } from "@angular/core";
import { LoginNavRoot } from "./loginNav.page";
import { ParticlesModule } from "angular-particle";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AuthManagerModule } from "app/providers/authManager/authManager.module";

@NgModule({
  entryComponents: [LoginNavRoot],
  imports: [ParticlesModule, IonicModule, AuthManagerModule],
  declarations: [LoginNavRoot]
})
export class LoginNavRootModule {}
