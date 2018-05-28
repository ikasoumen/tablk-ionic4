import { Component } from "@angular/core";
import { AppearancesStore } from "../../stores/appearances.store";
import { DefaultService } from "../../http";

@Component({
  selector: "app-page-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage {
  constructor(public appearnce: AppearancesStore, private api: DefaultService) {
    this.api.sessionsSessionIdGet(1).subscribe(session => {
      console.log(session);
    });
  }

  public AfterViewInit() {
    const session = this.api.sessionsSessionIdGet(1);
    console.log(session);
  }
}
