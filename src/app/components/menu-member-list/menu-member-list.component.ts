import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "tablk-menu-member-list",
  templateUrl: "./menu-member-list.component.html",
  styleUrls: ["./menu-member-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuMemberListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
