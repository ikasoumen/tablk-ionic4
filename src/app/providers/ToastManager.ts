import { Injectable } from "@angular/core";
import { Time } from "app/constants";
import { ToastController } from "@ionic/angular";

export enum ToastCssType {
  Error = "toast-error",
  Success = "toast-success",
  Info = "toast-info"
}

@Injectable()
export class ToastManager {
  constructor(private toastCtrl: ToastController) {}

  public present(message: string, type: ToastCssType) {
    this.toastCtrl
      .create({
        message: message,
        cssClass: type,
        duration: Time.msec500,
        position: "top"
      })
      .present();
  }
}
