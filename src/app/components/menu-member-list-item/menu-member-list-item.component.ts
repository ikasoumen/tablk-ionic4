import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "tablk-chat-member-list-item",
  templateUrl: "./chat-member-list-item.component.html",
  styleUrls: ["./chat-member-list-item.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMemberListItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
