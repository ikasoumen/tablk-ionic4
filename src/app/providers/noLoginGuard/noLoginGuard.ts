import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginStore } from "../../stores/login.store";
import { map } from "rxjs/operators";

@Injectable()
export class NoLoginGuard implements CanActivate {
  constructor(private loginStore: LoginStore, private router: Router) {}

  canActivate() {
    return this.loginStore.isLogined$().pipe(
      map(allowed => {
        if (allowed) {
          this.router.navigate(["/dashBoard"]);
        }
        return allowed;
      })
    );
  }
}
