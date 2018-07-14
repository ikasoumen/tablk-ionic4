import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, exhaustMap } from "rxjs/operators";
import {
  LogIn,
  AuthActionTypes,
  LogInSuccess
} from "../ngrx-actions/auth.actions";
import { DefaultService } from "../http";
import { RaiseError } from "../ngrx-actions/error.actions";
import {
  SessionsActionTypes,
  SessionsAction
} from "../ngrx-actions/sessions.action";

@Injectable()
export class SessionsEffects {
  @Effect()
  getAll$: Observable<Action> = this.actions$.pipe(
    ofType<SessionsAction.GetAll>(SessionsActionTypes.GetAll),
    exhaustMap(() =>
      this.api.sessionsGet().pipe(
        map(
          response =>
            new SessionsAction.AddMany({
              sessions: Object.values(response.sessions)
            })
        ),
        catchError(error => of(new RaiseError(error)))
      )
    )
  );

  constructor(private actions$: Actions, private api: DefaultService) {}
}
