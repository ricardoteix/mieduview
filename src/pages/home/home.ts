import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public navCtrl: NavController
    public alertCtrl: AlertController

    constructor(navCtrl: NavController, alertCtrl: AlertController) {
      this.navCtrl = navCtrl;
      this.alertCtrl = alertCtrl;
    }

    public showAlert() {
        let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }
}
