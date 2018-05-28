import { NgModule } from "@angular/core";
import { ParticlesModule } from "angular-particle";
import { IonicPageModule } from "ionic-angular";
import { LoginNavRoot } from "./LoginNavRoot";

@NgModule({
  declarations: [LoginNavRoot],
  imports: [IonicPageModule.forChild(LoginNavRoot), ParticlesModule]
})
export class LoginNavRootModule {}
