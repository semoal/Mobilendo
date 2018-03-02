import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProvinciasProvider } from '../../providers/provincias/provincias';
import { MapDetailPage } from '../map-detail/map-detail';


@Component({
  selector: 'page-municipio-detail',
  providers: [ProvinciasProvider],
  templateUrl: 'municipio-detail.html'

})
export class MunicipioDetailPage {

  public idProvincia: string;
  public municipios: any;
  public firstMunicipio: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _provinciasProvider: ProvinciasProvider) {
    this.idProvincia = navParams.data;
    this.getMunicipios();
  }

  getMunicipios(){
    this._provinciasProvider.getMunicipios(this.idProvincia)
      .then(data => {
        this.municipios = data;
        this.firstMunicipio = data[0];
      });
  }

  goToMap(idMunicipio: string){
    this.navCtrl.push(MapDetailPage, idMunicipio);
  }

}
