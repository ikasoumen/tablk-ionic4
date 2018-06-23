import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "tablk-session-edit-page",
  templateUrl: "./session-edit.page.html",
  styleUrls: ["./session-edit.page.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionEditPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
