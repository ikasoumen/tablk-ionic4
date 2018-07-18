import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of, from } from "rxjs";
import { catchError, exhaustMap, switchMap } from "rxjs/operators";
import { DefaultService } from "../../http";
import { RaiseError } from "../error.actions";
import {
  DashboardSessionsActionTypes,
  DashboardSessionsAction
} from "../dashboard.sessions.action";
import { MembersAction } from "./members.actions";

@Injectable()
export class SessionsEffects {
  @Effect()
  getAll$: Observable<Action> = this.actions$.pipe(
    ofType<SessionsAction.GetAll>(SessionsActionTypes.GetAll),
    exhaustMap(() =>
      this.api.sessionsGet().pipe(
        switchMap(response =>
          from([
            new SessionsAction.AddMany({
              sessions: Object.values(response.sessions)
            }),
            new MembersAction.AddMany({
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
