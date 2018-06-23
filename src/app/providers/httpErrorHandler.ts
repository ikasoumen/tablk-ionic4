import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ToastController } from "@ionic/angular";

@Injectable()
export class HttpErrorHandler {
  constructor(private toast: ToastController) {}

  public async handle(error) {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 500:
          const toast = await this.toast.create({
            message:
              "サーバーでエラーが起きているようです...\n何回も起きるなら公式アカウントに問い合わせてみてください",
            showCloseButton: true,
            closeButtonText: "わかった"
          });
          toast.present();
          break;
        default:
          break;
      }
    }
  }
}
