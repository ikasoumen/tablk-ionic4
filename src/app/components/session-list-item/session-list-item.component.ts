import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "tablk-session-list-item",
  templateUrl: "./session-list-item.component.html",
  styleUrls: ["./session-list-item.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionListItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
