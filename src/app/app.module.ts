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
import { ApiModule, Configuration, ConfigurationParameters } from "./http";
import { environment } from "../environments/environment";

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
    AppStore,
    AppearancesStore,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
