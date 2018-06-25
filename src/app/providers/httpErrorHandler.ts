import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ToastController } from "@ionic/angular";
import { Time } from "../constants";

@Injectable()
export class HttpErrorHandler {
  constructor(private toast: ToastController) {}

  public async handle(error) {
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
      const toast = await this.toast.create({
        message,
        showCloseButton: true,
        closeButtonText: "わかった",
        duration: Time.msec3000
      });
      toast.present();
    }
  }
}
