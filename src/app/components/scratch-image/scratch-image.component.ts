import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

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
