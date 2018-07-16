import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, exhaustMap, tap } from "rxjs/operators";
import { LogIn, AuthActionTypes, LogInSuccess } from "../reducers/auth.actions";
import { DefaultService } from "../http";
import { RaiseError } from "../reducers/error.actions";

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
