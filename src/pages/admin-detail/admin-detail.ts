import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { FamousFacesProvider } from '../../providers/famous-faces/famous-faces';
import { AdminEditPage } from '../admin-edit/admin-edit';
import { AdminPage } from '../admin/admin';

/**
 * Generated class for the AdminDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-detail',
  templateUrl: 'admin-detail.html',
})
export class AdminDetailPage {
  public adminEditPage: any;
  public famousFace: any = {};

  constructor (public navCtrl: NavController,
               public navParams: NavParams,
               private famousFacesProvider: FamousFacesProvider,
               private loadingController: LoadingController) {
    this.adminEditPage = AdminEditPage;
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad AdminDetailPage');

    this.findOne();
  }

  private async findOne () {
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

  public async delete (id) {
    const loading = await this.loadingController.create({
      content: 'Deleting',
    });
    await loading.present();
    await this.famousFacesProvider.delete(id)
      .subscribe(() => {
        loading.dismiss();
        this.navCtrl.setRoot(AdminPage);
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
