import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

/**
 * 未ロードのとき、灰色で隠した画像を表示するコンポーネント
 */
@Component({
  selector: "tablk-scratch-image",
  templateUrl: "./scratch-image.component.html",
  styleUrls: ["./scratch-image.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScratchImageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
