import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppearancesActions } from "./actions/appearances.actions";
import { AppComponent } from "./app.component";
import { AppDispatcher } from "./app.dispatcher";
import { AppStore } from "./app.store";
import { AppearancesStore } from "./stores/appearances.store";
import {
  ApiModule,
  Configuration,
  ConfigurationParameters,
  DefaultService
} from "./http";
import { environment } from "../environments/environment";
import { LoginActions } from "./actions/login.action";
import { LoginStore } from "./stores/login.store";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Interceptor } from "app/http/intercepter";
import { LoginGuard } from "./providers/loginGuard/loginGuard";
import { NoLoginGuard } from "./providers/noLoginGuard/noLoginGuard";
import { SessionsStore } from "app/stores/sessions.store";
import { SessionActions } from "app/actions/sessions.actions";
import { MemberStore } from "./stores/member.store";
import { TablkErrorHandler } from "app/helpers/tablkErrorHandler";
import { HttpErrorHandler } from "./providers/httpErrorHandler";
import { GroupActions } from "./actions/groups.actions";
import { NoteStore } from "./stores/note.store";
import { CharacterStore } from "./stores/character.store";
import { MessageActions } from "./actions/messages.actions";
import { PagesActions } from "./actions/pages.actions";
import { PagesStore } from "./stores/pages.store";

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
    ApiModule.forRoot(apiConfigFactory)
  ],
  providers: [
    AppearancesActions,
    AppDispatcher,
    DefaultService,

    // Actions
    SessionActions,
    GroupActions,
    LoginActions,
    MessageActions,
    PagesActions,

    // Stores
    AppStore,
    SessionsStore,
    MemberStore,
    CharacterStore,
    NoteStore,
    LoginStore,
    AppearancesStore,
    PagesStore,

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
    LoginGuard,
    NoLoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
