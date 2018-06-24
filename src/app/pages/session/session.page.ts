import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { SessionsStore } from "app/stores/sessions.store";
import { Observable, of } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Session } from "app/http";
import { InputChangeEvent, ActionSheetOptions } from "@ionic/core";
import { SessionActions } from "../../actions/sessions.actions";
import { AppDispatcher } from "../../app.dispatcher";
import { ActionSheetController, ModalController } from "@ionic/angular";
import {
  SessionEditPage,
  SessionEditPageMode
} from "../session-edit/session-edit.page";

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
  public session$: Observable<{ exist: boolean; _: Session }>;
  public selectedSegment: segments = segments.Description;
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private sessionActions: SessionActions,
    private sessions: SessionsStore,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private dispatcher: AppDispatcher
  ) {}

  public ngOnInit() {
    this.route.params.subscribe((params: SessionPage.Params) => {
      this.id = params.id;
      this.session$ = this.sessions.readOne$(of(this.id));
      try {
        this.dispatcher.emit(this.sessionActions.getSessionOne(this.id));
      } catch (e) {
        throw e;
      }
    });
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
              sessionId: session._.id
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
