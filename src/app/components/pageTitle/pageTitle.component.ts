import { Component, Input } from "@angular/core";
import { ElementRef } from "@angular/core";
import { PageWithTitle } from "components/PageWithTitle/PageWithTitle";

/**
 * Generated class for the SectionHeadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "page-title",
  templateUrl: "PageTitle.html"
})
export class PageTitle implements ElementRef {
  @Input() public title: string = "";
  @Input() public translatedTitle: string = "";

  constructor(private elementRef: ElementRef) {
    return;
  }

  public get nativeElement() {
    return this.elementRef.nativeElement;
  }
}
