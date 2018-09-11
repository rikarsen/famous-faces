import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { FamousFacesProvider } from '../../providers/famous-faces/famous-faces';
import { AdminDetailPage } from '../admin-detail/admin-detail';
import { AdminCreatePage } from '../admin-create/admin-create';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  public adminDetailPage: any;
  public adminCreatePage: any;
  public famousFaces: any;

  constructor (public navCtrl: NavController,
               public navParams: NavParams,
               private famousFacesProvider: FamousFacesProvider,
               private loadingController: LoadingController) {
    this.adminDetailPage = AdminDetailPage;
    this.adminCreatePage = AdminCreatePage;
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad AdminPage');

    this.findAll();
  }

  private async findAll (): Promise<void> {
    const loading = await this.loadingController.create({
      content: 'Loading',
    });
    await loading.present();
    await this.famousFacesProvider.findAll()
      .subscribe(res => {
        console.log(res);
        this.famousFaces = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
