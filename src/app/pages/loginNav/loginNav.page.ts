import {
  Component,
  ViewEncapsulation,
  ChangeDetectorRef,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { AuthManager } from "../../providers/authManager/authManager";
import { ApiKeyInput } from "../../http";
import {
  ToastManager,
  ToastCssType
} from "../../providers/toastManager/toastManager";
import { NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { LoginActions } from "../../actions/login.action";
import { AppDispatcher } from "../../app.dispatcher";
import { ModalController } from "@ionic/angular";

/**
 * Login と Signup を modal 上で切り替えるための nav を持ったページ
 */
@Component({
  selector: "tablk-page-login-nav",
  templateUrl: "loginNav.page.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginNavRoot {
  public params: ApiKeyInput = { email: "", password: "" };
  public submitted = false;
  public title = "Login";
  public translatedTitle = "ログイン";

  constructor(
    private loginActions: LoginActions,
    private toastManager: ToastManager,
    private dispatcher: AppDispatcher
  ) {}

  public onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      const { email, password } = this.params;
      this.dispatcher.emit(this.loginActions.login(email, password));
    } else {
      this.toastManager.present(
        "メールアドレスとパスワードを\n両方とも入力してください",
        ToastCssType.Error
      );
    }
  }
}
