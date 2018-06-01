import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  ModalController,
  AlertController
} from "@ionic/angular";
import { AppearancesStore } from "../../stores/appearances.store";
import { LoginNavRoot } from "../loginNav/loginNav.page";

@Component({
  selector: "app-page-home",
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
    // this.navCtrl.goForward('about');
    const modal = await this.modalCtrl.create({ component: LoginNavRoot });
    modal.present();
    // this.alertCtrl.create({});
  }
}
