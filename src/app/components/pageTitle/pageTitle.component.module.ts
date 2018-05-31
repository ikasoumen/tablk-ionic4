import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageTitle } from "./pageTitle.component";

@NgModule({
  declarations: [PageTitle],
  imports: [CommonModule],
  exports: [PageTitle]
})
export class PageTitleModule {}
