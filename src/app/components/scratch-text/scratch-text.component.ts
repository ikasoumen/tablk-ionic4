import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnChanges
} from "@angular/core";

/**
 * 未ロードのとき、灰色で隠した文字を表示するコンポーネント
 */
@Component({
  selector: "tablk-scratch-text",
  templateUrl: "./scratch-text.component.html",
  styleUrls: ["./scratch-text.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScratchTextComponent implements OnChanges {
  @Input() public sealed = true;
  @Input() public text: string;

  constructor() {}

  ngOnChanges() {}
}
