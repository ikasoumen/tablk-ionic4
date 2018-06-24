import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit
} from "@angular/core";
import { SessionsStore } from "app/stores/sessions.store";
import { of, Observable } from "rxjs";
import {
  Session,
  DefaultService,
  SessionCreateInput,
  ImageBase64
} from "app/http";
import { SessionActions } from "../../actions/sessions.actions";
import { ActivatedRoute } from "@angular/router";
import { AppDispatcher } from "../../app.dispatcher";

enum Mode {
  Create = "Create",
  Update = "Update"
}
@Component({
  selector: "tablk-session-edit-page",
  templateUrl: "./session-edit.page.html",
  styleUrls: ["./session-edit.page.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionEditPage implements OnInit {
  public params: SessionCreateInput = { name: "" };
  public title = "セッションの作成";
  private session$: Observable<{ exist: boolean; _: Session }>;
  private mode = Mode.Create;

  constructor(
    private sessions: SessionsStore,
    private sessionActions: SessionActions,
    private api: DefaultService,
    private dispatcher: AppDispatcher,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.switchTextToUpdateMode();

    this.route.params.subscribe((params: SessionEditPage.Params) => {
      const id = params.id;
      this.session$ = this.sessions.readOne$(of(id));
      try {
        this.dispatcher.emit(this.sessionActions.getSessionOne(id));
      } catch (e) {
        throw e;
      }
    });
  }

  /**
   * @todo api を使った処理の Action への移行
   */
  public createOrUpdateSession() {
    if (this.mode === Mode.Create) {
      this.api
        .sessionsPost(this.params)
        .toPromise()
        .then(() => {
          this.dismissSelf();
        });
    } else {
      // this.api.sessionsSessionIdPatch(this.session._.id, this.params)
      // .toPromise()
      // .then(
      //   () => { this.dismissSelf(); },
      // );
    }
  }

  public setNewImage(imageBase64: string) {
    this.params.imageBase64 = {
      data: imageBase64,
      type: ImageBase64.TypeEnum.Jpeg
    };
  }

  public dismissSelf() {
    // this.viewCtrl.dismiss();
  }

  private setSessionInputParam(session: Session) {
    this.params.name = session.name;
    this.params.description = session.description;
    this.params.scenarioName = session.scenarioName;
    this.params.catchphrase = session.catchphrase;
  }

  private switchTextToUpdateMode() {
    this.title = "Edit Session";
    this.mode = Mode.Update;
  }
}

namespace SessionEditPage {
  export interface Params {
    id?: string;
  }
}
