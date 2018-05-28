import { HttpErrorResponse } from "@angular/common/http/src/response";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiKeyInput } from "app/http";
import { ToastManager, ToastCssType } from "app/providers/ToastManager";
import { AuthManager } from "app/providers/AuthManager";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-page-login",
  templateUrl: "login.page.html"
})
export class LoginPage {
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
