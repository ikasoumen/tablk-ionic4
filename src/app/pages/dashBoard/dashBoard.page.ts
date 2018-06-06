import { Component, ElementRef, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-page-joined-sessions",
  templateUrl: "dashBoard.page.html",
  styleUrls: ["dashBoard.page.scss"]
})
export class DashBoardPage {
  public translatedTitle = "ダッシュボード";
  public title = "Dashboard";
}
