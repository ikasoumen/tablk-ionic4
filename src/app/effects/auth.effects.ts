import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, exhaustMap, tap } from "rxjs/operators";
import {
  LogIn,
  AuthActionTypes,
  LogInSuccess
} from "../ngrx-actions/auth.actions";
import { DefaultService } from "../http";
import { RaiseError } from "app/ngrx-actions/error.actions";

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class AuthEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType<LogIn>(AuthActionTypes.LogIn),
    map(action => action.payload),
    exhaustMap(apiKeyInput =>
      this.api.authApiKeyPost(apiKeyInput).pipe(
        tap(response => {
          if (response.apiKey == null) {
            throw Error("空の api_key が返ってきました");
          }
        }),
        map(response => new LogInSuccess(response)),
        catchError(error => of(new RaiseError(error)))
      )
    )
  );

  constructor(private actions$: Actions, private api: DefaultService) {}
}
