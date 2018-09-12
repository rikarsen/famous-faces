import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { FamousFacesProvider } from '../../providers/famous-faces/famous-faces';

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
  public famousFace

  constructor (public navCtrl: NavController,
               public navParams: NavParams,
               private famousFacesProvider: FamousFacesProvider,
               private loadingController: LoadingController) {
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad BoardPage');
  }

  private async findOne (id) {
    const loading = await this.loadingController.create({
      content: 'Loading',
    });
    await loading.present();
    await this.famousFacesProvider.findOne(this.navParams.get('_id'))
      .subscribe(res => {
        console.log(res);
        this.famousFace = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  public goAdmin () {
    this.navCtrl.setRoot(AdminPage);
  }
}
