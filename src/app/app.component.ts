import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppDispatcher } from "./app.dispatcher";
import { AppearancesActions } from "./actions/appearances.actions";
import { AppearancesStore } from "./stores/appearances.store";
import { LoginStore } from "./stores/login.store";

@Component({
  selector: "tablk-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dispatcher: AppDispatcher,
    private appearanceActions: AppearancesActions,
    public appearnce: AppearancesStore,
    public login: LoginStore
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public splitPaneSubscribe(event: CustomEvent) {
    const visibility = event.detail.visible as boolean;
    this.dispatcher.emit(this.appearanceActions.setPaneSplitted(!visibility));
  }
}
