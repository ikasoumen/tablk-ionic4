import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewChild,
  OnInit
} from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppDispatcher } from "./app.dispatcher";
import { AppearancesActions } from "./actions/appearances.actions";
import { AppearancesStore } from "./stores/appearances.store";
import { LoginStore } from "./stores/login.store";
import { Observable } from "../../node_modules/rxjs";
import { Pages } from "./constants";
import { map } from "../../node_modules/rxjs/operators";
import { PagesActions } from "./actions/pages.actions";
import { PagesStore } from "./stores/pages.store";

@Component({
  selector: "tablk-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public isChatPage$: Observable<boolean>;
  public currentSessionId$: Observable<string>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dispatcher: AppDispatcher,
    private appearanceActions: AppearancesActions,
    private pages: PagesStore,
    public appearnce: AppearancesStore,
    public login: LoginStore
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.isChatPage$ = this.appearnce
      .getCurrentPage$()
      .pipe(map(page => page === Pages.chat));
    this.currentSessionId$ = this.pages.chatTabs_currenSessionId$();
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
