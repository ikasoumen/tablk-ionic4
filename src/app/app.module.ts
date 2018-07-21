import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy, RouterModule } from "@angular/router";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppearancesActions } from "./actions/appearances.actions";
import { AppComponent } from "./app.component";
import { AppDispatcher } from "./app.dispatcher";
import { AppStore } from "./app.store";

// ngrx
import { StoreModule } from "@ngrx/store";
import { fromRoot } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppearancesStore } from "./stores/appearances.store";
import {
  ApiModule,
  Configuration,
  ConfigurationParameters,
  DefaultService
} from "./http";
import { environment } from "environments/environment";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Interceptor } from "./http/intercepter";
import { LoginGuard } from "./providers/loginGuard/loginGuard";
import { NoLoginGuard } from "./providers/noLoginGuard/noLoginGuard";
import { SessionsStore } from "./stores/sessions.store";
import { SessionActions } from "./actions/sessions.actions";
import { MemberStore } from "./stores/member.store";
import { TablkErrorHandler } from "./helpers/tablkErrorHandler";
import { HttpErrorHandler } from "./providers/httpErrorHandler";
import { GroupActions } from "./actions/groups.actions";
import { NoteStore } from "./stores/note.store";
import { CharacterStore } from "./stores/character.store";
import { MessageActions } from "./actions/messages.actions";
import { PagesActions } from "./actions/pages.actions";
import { PagesStore } from "./stores/pages.store";
import { GroupsStore } from "./stores/groups.store";
import { MessageStore } from "./stores/message.store";
import { CableManager } from "./providers/cableManager";
import { MenuMemberListComponentModule } from "./components/menu-member-list/menu-member-list.component.module";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./effects/auth.effects";
import { ErrorEffects } from "./effects/error.effects";
import { DashboardModule } from "./reducers/dashboard/dashboard.module";

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    apiKeys: { "X-API-KEY": "hogehogehoge" },
    basePath: environment.API_BASE_PATH
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md",
      iconMode: "md"
    }),
    AppRoutingModule,
    ApiModule.forRoot(apiConfigFactory),

    // ngrx
    StoreModule.forRoot(fromRoot.reducers, {
      metaReducers: fromRoot.metaReducers
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: "router" // name of reducer key
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([AuthEffects, ErrorEffects]),
    DashboardModule,

    // Components
    MenuMemberListComponentModule
  ],
  providers: [
    AppearancesActions,
    AppDispatcher,
    DefaultService,
    CableManager,

    // Actions
    SessionActions,
    GroupActions,
    MessageActions,
    PagesActions,

    // Stores
    AppStore,
    SessionsStore,
    MemberStore,
    CharacterStore,
    NoteStore,
    AppearancesStore,
    PagesStore,
    GroupsStore,
    MessageStore,

    HttpErrorHandler,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    { provide: ErrorHandler, useClass: TablkErrorHandler },

    // Guards
    LoginGuard,
    NoLoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
