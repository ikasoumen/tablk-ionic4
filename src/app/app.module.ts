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
import { environment } from "environments/environment";
import { LoginActions } from "./actions/login.action";
import { LoginStore } from "./stores/login.store";
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
import { MenuMemberListComponent } from "./components/menu-member-list/menu-member-list.component";
import { MenuMemberListItemComponent } from "app/components/menu-member-list-item/menu-member-list-item.component";
import { MenuMemberListComponentModule } from "./components/menu-member-list/menu-member-list.component.module";

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
