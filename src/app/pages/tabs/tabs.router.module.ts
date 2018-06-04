import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { TalkPage } from "../talk/talk.page";
import { AboutPage } from "../about/about.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        outlet: "home",
        component: TalkPage
      },
      {
        path: "about",
        outlet: "about",
        component: AboutPage
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/(home:home)",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
