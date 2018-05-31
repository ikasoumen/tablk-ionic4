import { Component, Input } from "@angular/core";
import { ElementRef } from "@angular/core";

/**
 * Generated class for the SectionHeadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "app-page-title",
  templateUrl: "PageTitle.html"
})
export class PageTitle implements ElementRef {
  @Input() public title = "";
  @Input() public translatedTitle = "";

  constructor(private elementRef: ElementRef) {
    return;
  }

  public get nativeElement() {
    return this.elementRef.nativeElement;
  }
}
