import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
  ) {}

  public async pushHomePage() {
    // this.navCtrl.goForward('about');
    console.log('comes here');
    const modal = await this.modalCtrl.create({ component: AboutPage });
    modal.present();
    // this.alertCtrl.create({});
  }
}
