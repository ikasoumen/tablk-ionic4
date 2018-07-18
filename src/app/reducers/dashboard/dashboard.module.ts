import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { SessionsEffects } from "./sessions.effects";

import { reducers } from "./reducers";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("dashboard", reducers),
    EffectsModule.forFeature([SessionsEffects])
  ]
})
export class DashboardModule {}
