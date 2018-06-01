import { Component, ViewEncapsulation, ChangeDetectorRef } from "@angular/core";
import { AuthManager } from "app/providers/authManager/authManager";
import { ApiKeyInput } from "app/http";
import {
  ToastManager,
  ToastCssType
} from "app/providers/toastManager/toastManager";
import { NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";

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
    private authManager: AuthManager,
    private toastManager: ToastManager,
    public changeDetectorRef: ChangeDetectorRef
  ) {}

  public async onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      try {
        await this.authManager.login(this.params);
        // flux で onLoginComplete の発火
      } catch (e) {
        const error: HttpErrorResponse = e;
        this.toastManager.present(
          error.error.error || error.message,
          ToastCssType.Error
        );
      }
    } else {
      this.toastManager.present(
        "メールアドレスとパスワードを\n両方とも入力してください",
        ToastCssType.Error
      );
    }
  }
}
