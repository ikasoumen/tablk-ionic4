import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "../../http";

@Component({
  selector: "tablk-member-mini-list",
  templateUrl: "./member-mini-list.component.html",
  styleUrls: ["./member-mini-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberMiniListComponent {
  @Input() private members$: Observable<Member[]>;
}
