import { Component, ViewEncapsulation } from "@angular/core";
import { AuthManager } from "app/providers/authManager/authManager";

/**
 * Login と Signup を modal 上で切り替えるための nav を持ったページ
 */
@Component({
  selector: "app-page-login-nav",
  templateUrl: "loginNav.page.html",
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginNavRoot {
  constructor(private authManager: AuthManager) {
    return;
  }
}
