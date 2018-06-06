import { NgModule } from "@angular/core";
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
import { FadeHeaderDirective } from "./directives/fadeHeader/fadeHeader.directive";

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    apiKeys: { "X-API-KEY": "hogehogehoge" },
    basePath: environment.API_BASE_PATH
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [AppComponent, FadeHeaderDirective],
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
    AppStore,
    AppearancesStore,
    DefaultService,
    LoginActions,
    LoginStore,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    LoginGuard,
    NoLoginGuard
  ],
  exports: [FadeHeaderDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
