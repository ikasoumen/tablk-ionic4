import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { Observable, of } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Session } from "../../http";
import { ActionSheetOptions } from "@ionic/core";
import {
  ActionSheetController,
  ModalController,
  NavController
} from "@ionic/angular";
import {
  SessionEditPage,
  SessionEditPageMode
} from "../session-edit/session-edit.page";
import { Store } from "@ngrx/store";
import { fromRoot } from "app/reducers";

enum segments {
  Description = "Description",
  Members = "Members",
  Notes = "Notes"
}
@Component({
  selector: "tablk-session-page",
  templateUrl: "./session.page.html",
  styleUrls: ["./session.page.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionPage implements OnInit {
  public session$: Observable<Session>;
  public selectedSegment: segments = segments.Description;
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private store: Store<fromRoot.State>,
    private navCtrl: NavController
  ) {}

  public ngOnInit() {
    this.route.params.subscribe((params: SessionPage.Params) => {
      this.id = params.id;
      this.session$ = this.store.pipe();
      try {
        this.dispatcher.emit(this.sessionActions.getSessionOne(this.id));
      } catch (e) {
        throw e;
      }
    });
  }

  public pushChatSessionChatTabsPage() {
    this.navCtrl.goForward(`chat_tabs/sessions/${this.id}`);
  }

  public async showActionSheet() {
    const sheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: "セッションを編集する",
          handler: async () => {
            const session = await this.session$.toPromise();
            const componentProps: Pick<
              SessionEditPage,
              "mode" | "sessionId"
            > = {
              mode: SessionEditPageMode.Update,
              sessionId: session.id
            };
            const modal = await this.modalCtrl.create({
              component: SessionEditPage,
              componentProps
            });
            modal.present();
          }
        },
        {
          text: "セッションを削除する",
          role: "destructive",
          handler: () => {
            return;
          }
        },
        {
          text: "リプレイにまとめる",
          handler: () => {
            return;
          }
        },
        {
          text: "過去ログを読む",
          handler: () => {
            return;
          }
        },
        {
          text: "キャンセル",
          role: "cancel",
          handler: () => {
            return;
          }
        }
      ]
    } as ActionSheetOptions);
    sheet.present();
  }

  public get segment() {
    return segments;
  }

  public selectSegment(event: CustomEvent) {
    this.selectedSegment = event.detail.value;
  }
}

namespace SessionPage {
  export interface Params {
    id: string;
  }
}
