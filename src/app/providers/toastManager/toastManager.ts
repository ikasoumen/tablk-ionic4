import { Injectable } from "@angular/core";
import { Time } from "../../constants";
import { ToastController } from "@ionic/angular";

export enum ToastCssType {
  Error = "toast-error",
  Success = "toast-success",
  Info = "toast-info"
}

@Injectable()
export class ToastManager {
  constructor(private toastCtrl: ToastController) {}

  public async present(message: string, type: ToastCssType) {
    const toast = await this.toastCtrl.create({
      message: message,
      cssClass: type,
      duration: Time.msec3000
    });
    toast.present();
  }
}
