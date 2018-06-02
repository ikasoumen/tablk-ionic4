import { Component, ViewEncapsulation, ChangeDetectorRef } from "@angular/core";
import { AuthManager } from "app/providers/authManager/authManager";
import { ApiKeyInput } from "app/http";
import {
  ToastManager,
  ToastCssType
} from "app/providers/toastManager/toastManager";
import { NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { LoginActions } from "../../actions/login.action";
import { AppDispatcher } from "app/app.dispatcher";

/**
 * Login と Signup を modal 上で切り替えるための nav を持ったページ
 */
@Component({
  selector: "app-page-login-nav",
  templateUrl: "loginNav.page.html",
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginNavRoot {
  public params: ApiKeyInput = { email: "", password: "" };
  public submitted = false;
  public title = "Login";
  public translatedTitle = "ログイン";

  constructor(
    private loginActions: LoginActions,
    private toastManager: ToastManager,
    private dispatcher: AppDispatcher,
    public changeDetectorRef: ChangeDetectorRef
  ) {}

  public async onLogin(form: NgForm) {
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
