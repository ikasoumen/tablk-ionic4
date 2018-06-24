import { IonicModule, NavParams } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SessionEditPage } from "./session-edit.page";
import { ImageInputComponentModule } from "../../components/image-input/image-input.component.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ImageInputComponentModule,
    RouterModule.forChild([{ path: "", component: SessionEditPage }])
  ],
  declarations: [SessionEditPage]
})
export class SessionEditPageModule {}
