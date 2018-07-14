import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { ApiKeyInput } from "../../http";
import {
  ToastManager,
  ToastCssType
} from "../../providers/toastManager/toastManager";
import { NgForm } from "@angular/forms";
import { AppDispatcher } from "../../app.dispatcher";
import { Store } from "@ngrx/store";
import * as fromAuth from "../../reducers/auth.reducer";
import { LogIn } from "../../ngrx-actions/auth.actions";

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
    private toastManager: ToastManager,
    private dispatcher: AppDispatcher,
    private store: Store<fromAuth.State>
  ) {}

  public onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      const { email, password } = this.params;
      this.store.dispatch(new LogIn({ email, password }));
    } else {
      this.toastManager.present(
        "メールアドレスとパスワードを\n両方とも入力してください",
        ToastCssType.Error
      );
    }
  }
}
