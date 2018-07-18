import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { SessionsEffects } from "./effects/sessions.effects";

import { fromChat } from "./reducers";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("chat", fromChat.reducers),
    EffectsModule.forFeature([SessionsEffects])
  ]
})
export class ChatModule {}
