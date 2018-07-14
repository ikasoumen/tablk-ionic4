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
import { Pages } from "./constants";
import { map } from "rxjs/operators";
import { PagesStore } from "./stores/pages.store";
import { Store, select } from "@ngrx/store";
import * as fromAuth from "./reducers/auth.reducer";
import { Observable } from "rxjs";

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
  public isLogin$: Observable<boolean>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dispatcher: AppDispatcher,
    private appearanceActions: AppearancesActions,
    private pages: PagesStore,
    public appearnce: AppearancesStore,
    private store: Store<fromAuth.State>
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.isChatPage$ = this.appearnce
      .getCurrentPage$()
      .pipe(map(page => page === Pages.chat));
    this.isLogin$ = this.store.pipe(select(fromAuth.isLogin));
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
