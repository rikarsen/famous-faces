import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { FamousFacesProvider } from '../../providers/famous-faces/famous-faces';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminDetailPage } from '../admin-detail/admin-detail';

/**
 * Generated class for the AdminEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-edit',
  templateUrl: 'admin-edit.html',
})
export class AdminEditPage {
  public famousFace: any = {};
  public famousFaceForm: any = {};

  constructor (public navCtrl: NavController,
               public navParams: NavParams,
               private famousFacesProvider: FamousFacesProvider,
               private loadingController: LoadingController,
               private formBuilder: FormBuilder) {
    this.findOne(this.navParams.get('_id'));
    this.famousFaceForm = this.formBuilder.group({
      'name': [null, Validators.required],
    });
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad AdminEditPage');
  }

  private async findOne (id) {
    const loading = await this.loadingController.create({
      content: 'Loading',
    });
    await loading.present();
    await this.famousFacesProvider.findOne(id).subscribe(res => {
      this.famousFaceForm.controls['name'].setValue(res.name);
      console.log(this.famousFaceForm);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  public async update () {
    await this.famousFacesProvider.update(this.navParams.get('_id'), this.famousFaceForm.value)
      .subscribe(res => {
        let _id = res['_id'];
        this.navCtrl.push(AdminDetailPage, {_id: _id});
      }, (err) => {
        console.log(err);
      });
  }
}
