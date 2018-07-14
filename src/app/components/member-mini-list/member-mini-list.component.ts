import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  Input
} from "@angular/core";
import { Observable, of } from "rxjs";
import { Member } from "../../http";
import { MemberStore } from "../../stores/member.store";

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
