import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "tablk-session-page",
  templateUrl: "./session.page.html",
  styleUrls: ["./session.page.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
