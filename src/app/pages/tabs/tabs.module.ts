import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TabsPageRoutingModule } from "./tabs.router.module";

import { TabsPage } from "./tabs.page";
import { AboutPageModule } from "../about/about.module";
import { TalkPageModule } from "../talk/talk.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TalkPageModule,
    AboutPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
