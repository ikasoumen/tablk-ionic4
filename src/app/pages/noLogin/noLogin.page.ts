import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  ModalController,
  AlertController
} from "@ionic/angular";
import { AppearancesStore } from "../../stores/appearances.store";
import { LoginNavRoot } from "../loginNav/loginNav.page";

@Component({
  selector: "tablk-page-no-login",
  templateUrl: "noLogin.page.html",
  styleUrls: ["noLogin.page.scss"]
})
export class NoLoginPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public appearnce: AppearancesStore
  ) {}

  public async pushTalkPage() {
    const modal = await this.modalCtrl.create({ component: LoginNavRoot });
    modal.present();
  }
}
