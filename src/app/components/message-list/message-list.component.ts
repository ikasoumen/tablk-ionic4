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
import { AppDispatcher } from "../../app.dispatcher";
import { MessageActions } from "../../actions/messages.actions";
import { distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "tablk-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent implements OnInit {
  @Input() group$: Observable<Group>;

  constructor(
    private message: MessageStore,
    private messageActions: MessageActions,
    private dispatcher: AppDispatcher
  ) {}

  public ngOnInit() {}

  public get messages$() {
    return this.message.readSome$_byGroup$(this.group$);
  }
}
