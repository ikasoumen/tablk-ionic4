import { Directive } from "@angular/core";

@Directive({
  selector: "[appFadeHeader]"
})
export class FadeHeaderDirective {
  constructor() {}

  public OnInit() {
    console.log("hoge");
  }
}
