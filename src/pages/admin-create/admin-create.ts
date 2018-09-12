import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FamousFacesProvider } from '../../providers/famous-faces/famous-faces';
import { AdminDetailPage } from '../admin-detail/admin-detail';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

/**
 * Generated class for the AdminCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-create',
  templateUrl: 'admin-create.html',
})
export class AdminCreatePage {
  public famousFaceForm: FormGroup;

  public regData = {avatar: '', email: '', password: '', fullname: ''};
  public imgPreview = 'assets/imgs/blank_avatar.png';

  constructor (public navCtrl: NavController,
               public navParams: NavParams,
               private famousFacesProvider: FamousFacesProvider,
               private loadingController: LoadingController,
               private formBuilder: FormBuilder,
               private imagePicker: ImagePicker,
               private base64: Base64) {
    this.findOne(this.navParams.get('_id'));
    this.famousFaceForm = this.formBuilder.group({
      name: [null, Validators.required],
    });
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad AdminCreatePage');
  }

  public getPhoto () {
    let options = {
      maximumImagesCount: 1,
    };
    this.imagePicker.getPictures(options)
      .then((res: any[]) => {
        this.imgPreview = res[0];
        this.base64.encodeFile(this.imgPreview)
          .then((base64File: string) => {
            this.regData.avatar = base64File;
          }, (err) => {
            console.log(err);
          });
      }, (err) => {
        console.log(err);
      });
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

  public async create () {
    await this.famousFacesProvider.create(this.famousFaceForm.value)
      .subscribe(res => {
        let _id = res['_id'];
        this.navCtrl.push(AdminDetailPage, {_id: _id});
      }, (err) => {
        console.log(err);
      });
  }
}
