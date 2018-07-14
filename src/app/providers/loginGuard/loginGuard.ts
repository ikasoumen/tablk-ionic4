import { Injectable } from "@angular/core";
import { CanActivate, Route, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import * as fromAuth from "../../reducers/auth.reducer";
import { Observable } from "rxjs";
@Injectable()
export class LoginGuard implements CanActivate {
  private isLogin$: Observable<boolean>;

  constructor(store: Store<fromAuth.State>, private router: Router) {
    this.isLogin$ = store.pipe(select(fromAuth.isLogin));
  }

  canActivate() {
    return this.isLogin$.pipe(
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
