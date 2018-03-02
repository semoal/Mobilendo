import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProvinciasProvider } from '../../providers/provincias/provincias';
import { MunicipioDetailPage } from '../municipio-detail/municipio-detail';

/**
 * Generated class for the ProvDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-prov-detail',
  templateUrl: 'prov-detail.html'
})
export class ProvDetailPage {
  public id: string;
  public data: any;
  public firstItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _provinciasProvider: ProvinciasProvider) {
    this.id = navParams.data;
    this.getProvincias();
  }

  getProvincias(){
    this._provinciasProvider.getProvinciasByCCAA(this.id)
      .then(data => {
        this.data = data;
        this.firstItem = data[0];
      });
  }

  goTo(id: string) {
    this.navCtrl.push(MunicipioDetailPage, id);
  }
}
