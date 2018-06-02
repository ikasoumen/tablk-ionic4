import { HttpErrorResponse } from "@angular/common/http/src/response";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { NavController } from "@ionic/angular";
import {
  ToastManager,
  ToastCssType
} from "app/providers/toastManager/toastManager";
import { AuthManager } from "app/providers/authManager/authManager";
import { SignupPostInput } from "app/http";

@Component({
  selector: "app-page-signup-mail",
  templateUrl: "signupMail.page.html",
  encapsulation: ViewEncapsulation.Emulated
})
export class SignupPage {
  public params: SignupPostInput = { email: "" };
  public submitted = false;
  public title = "Signup";
  public translatedTitle = "ユーザー登録";

  constructor(
    public navCtrl: NavController,
    private authManager: AuthManager,
    private toastManager: ToastManager
  ) {
    const unused = null;
  }

  public pushLoginPage() {
    this.navCtrl.goForward("LoginPage");
  }

  public onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // this.viewModel.signup(this.params);
      this.toastManager.present(
        "メールを送信しました。届くまでしばらくお待ちください",
        ToastCssType.Info
      );
    } else {
      this.toastManager.present(
        "メールアドレスを\n入力してください",
        ToastCssType.Error
      );
    }
  }
}

export namespace SignupPage {
  export interface NavData {
    onSignupComplete: EventEmitter<void>;
  }
}
