import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of, from } from "rxjs";
import {
  catchError,
  map,
  exhaustMap,
  repeat,
  buffer,
  window,
  take,
  concatMap,
  switchMap,
  switchMapTo
} from "rxjs/operators";
import {
  LogIn,
  AuthActionTypes,
  LogInSuccess
} from "../ngrx-actions/auth.actions";
import { DefaultService } from "../http";
import { RaiseError } from "../ngrx-actions/error.actions";
import {
  DashboardSessionsActionTypes,
  DashboardSessionsAction
} from "../ngrx-actions/dashboard.sessions.action";
import { DashboardMembersAction } from "../ngrx-actions/dashboard.members.action";

@Injectable()
export class DashboardSessionsEffects {
  @Effect()
  getAll$: Observable<Action> = this.actions$.pipe(
    ofType<DashboardSessionsAction.GetAll>(DashboardSessionsActionTypes.GetAll),
    exhaustMap(() =>
      this.api.sessionsGet().pipe(
        switchMap(response =>
          from([
            new DashboardSessionsAction.AddMany({
              sessions: Object.values(response.sessions)
            }),
            new DashboardMembersAction.AddMany({
              members: Object.values(response.members)
            })
          ])
        ),
        catchError(error => of(new RaiseError(error)))
      )
    )
  );

  constructor(private actions$: Actions, private api: DefaultService) {}
}
