import { Component, ElementRef, ChangeDetectorRef } from "@angular/core";
import { DefaultService } from "../../http";

@Component({
  selector: "app-page-joined-sessions",
  templateUrl: "dashBoard.page.html",
  styleUrls: ["dashBoard.page.scss"]
})
export class DashBoardPage {
  public translatedTitle = "ダッシュボード";
  public title = "Dashboard";

  constructor(private api: DefaultService) {}

  OnInit() {}

  OnChanges() {
    const a = this.http.sessionsGet("body");
  }
}
