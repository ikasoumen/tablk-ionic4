import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "tablk-scratch-text",
  templateUrl: "./scratch-text.component.html",
  styleUrls: ["./scratch-text.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScratchTextComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
