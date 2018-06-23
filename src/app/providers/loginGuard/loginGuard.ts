import { Injectable } from "@angular/core";
import { CanActivate, Route, Router } from "@angular/router";
import { LoginStore } from "../../stores/login.store";
import { map } from "rxjs/operators";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private loginStore: LoginStore, private router: Router) {}

  canActivate() {
    return this.loginStore.isLogined$().pipe(
      map(isLogin => !isLogin),
      map(allowed => {
        if (!allowed) {
          this.router.navigate(["/dashBoard"]);
        }
        return allowed;
      })
    );
  }
}
