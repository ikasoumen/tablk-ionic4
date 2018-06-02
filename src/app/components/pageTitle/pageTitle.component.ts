import { Component, Input, ViewEncapsulation } from "@angular/core";
import { ElementRef } from "@angular/core";

/**
 * Generated class for the SectionHeadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "app-page-title",
  templateUrl: "pageTitle.component.html",
  styleUrls: ["pageTitle.component.scss"],
  encapsulation: ViewEncapsulation.Emulated
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
