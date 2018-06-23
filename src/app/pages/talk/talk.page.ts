import { Component } from "@angular/core";
import {
  NavController,
  ModalController,
  AlertController
} from "@ionic/angular";
import { AboutPage } from "../about/about.page";
import { AppearancesStore } from "../../stores/appearances.store";

@Component({
  selector: "tablk-page-home",
  templateUrl: "talk.page.html",
  styleUrls: ["talk.page.scss"]
})
export class TalkPage {
  constructor(
    private modalCtrl: ModalController,
    public appearnce: AppearancesStore
  ) {}

  public async pushTalkPage() {
    const modal = await this.modalCtrl.create({ component: AboutPage });
    modal.present();
  }
}
