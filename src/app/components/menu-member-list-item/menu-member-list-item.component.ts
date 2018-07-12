import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "tablk-menu-member-list-item",
  templateUrl: "./menu-member-list-item.component.html",
  styleUrls: ["./menu-member-list-item.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuMemberListItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
