import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashBoardPage } from "./dashBoard.page";
import { PageTitleModule } from "../../components/pageTitle/pageTitle.component.module";
import { SessionListComponentModule } from "../../components/session-list/session-list.component.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PageTitleModule,
    SessionListComponentModule,
    RouterModule.forChild([{ path: "", component: DashBoardPage }])
  ],
  declarations: [DashBoardPage]
})
export class DashBoardPageModule {}
