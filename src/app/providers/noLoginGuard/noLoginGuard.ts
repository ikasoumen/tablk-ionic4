import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import * as fromAuth from "../../reducers/auth.reducer";
@Injectable()
export class NoLoginGuard implements CanActivate {
  private isLogin$: Observable<boolean>;

  constructor(store: Store<fromAuth.State>, private router: Router) {
    this.isLogin$ = store.pipe(select(fromAuth.isLogin));
  }

  canActivate() {
    return this.isLogin$.pipe(
      map(allowed => {
        if (!allowed) {
          this.router.navigate(["/"]);
        }
        return allowed;
      })
    );
  }
}
