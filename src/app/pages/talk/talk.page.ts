import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';
import { AppearancesStore } from '../../stores/appearances.store';

@Component({
  selector: 'app-page-home',
  templateUrl: 'talk.page.html',
  styleUrls: ['talk.page.scss']
})
export class TalkPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public appearnce: AppearancesStore,
  ) {}

  public async pushTalkPage() {
    // this.navCtrl.goForward('about');
    console.log('comes here');
    const modal = await this.modalCtrl.create({ component: AboutPage });
    modal.present();
    // this.alertCtrl.create({});
  }
}
