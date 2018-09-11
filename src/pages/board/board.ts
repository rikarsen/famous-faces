import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../admin/admin';

/**
 * Generated class for the BoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-board',
  templateUrl: 'board.html',
})
export class BoardPage {

  constructor (public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad BoardPage');
  }

  public goAdmin () {
    this.navCtrl.setRoot(AdminPage);
  }
}
