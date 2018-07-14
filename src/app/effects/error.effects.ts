import { Inject, Injectable, InjectionToken, Optional } from "@angular/core";
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
import { HttpErrorHandler } from "app/providers/httpErrorHandler";
import { RaiseError, ErrorActionTypes } from "app/ngrx-actions/error.actions";
import { Void } from "../ngrx-actions/void.action";
import { HttpErrorResponse } from "../../../node_modules/@angular/common/http";
import { Time } from "app/constants";
import { ToastController } from "../../../node_modules/@ionic/angular";

@Injectable()
export class ErrorEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType<RaiseError>(ErrorActionTypes.RaiseError),
    map(action => {
      const error = action.payload;
      if (error instanceof HttpErrorResponse) {
        let message: string | null = null;
        switch (error.status) {
          case 0:
            message =
              "サーバーとの通信に失敗しました。接続状況を確認してください。";
            break;
          case 500:
            message =
              "サーバーでエラーが起きているようです...\n何回も起きるなら公式アカウントに問い合わせてみてください";
            break;
          default:
            break;
        }
        if (message == null) {
          return;
        }
        this.toast
          .create({
            message,
            showCloseButton: true,
            closeButtonText: "わかった",
            duration: Time.msec3000
          })
          .then(toast => toast.present());
      }
      return new Void();
    })
  );

  constructor(private actions$: Actions, private toast: ToastController) {}
}
