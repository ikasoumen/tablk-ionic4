import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { MessageStore } from "../../stores/message.store";
import { Observable } from "rxjs";
import { Group } from "app/http";

@Component({
  selector: "tablk-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {
  @Input() group$: Observable<Group>;

  constructor(private message: MessageStore) {}

  public messages$() {
    return this.message.readSome$_byGroup$(this.group$);
  }
}
