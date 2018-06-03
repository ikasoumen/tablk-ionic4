import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LoginStore } from "../../stores/login.store";

@Injectable()
export class NoLoginGuard implements CanActivate {
  constructor(private loginStore: LoginStore) {}

  canActivate() {
    return this.loginStore.isLogined$();
  }
}
