import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FadeHeaderDirective } from "./fadeHeader/fade-header.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [FadeHeaderDirective]
})
export class DirectivesModule {}
