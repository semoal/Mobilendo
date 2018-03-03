import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstacionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * "C.P.": "03698",
            "Dirección": "AUTOPISTA AP 7 KM. 696",
            "Horario": "L-D: 24H",
            "Latitud": "38,408861",
            "Localidad": "AGOST",
            "Longitud (WGS84)": "-0,599444",
            "Margen": "I",
            "Municipio": "Agost",
            "Precio Biodiesel": null,
            "Precio Bioetanol": null,
            "Precio Gas Natural Comprimido": null,
            "Precio Gas Natural Licuado": null,
            "Precio Gases licuados del petróleo": null,
            "Precio Gasoleo A": "1,229",
            "Precio Gasoleo B": null,
            "Precio Gasolina 95 Protección": "1,309",
            "Precio Gasolina  98": "1,424",
            "Precio Nuevo Gasoleo A": "1,319",
            "Provincia": "ALICANTE",
            "Remisión": "OM",
            "Rótulo": "GALP",
            "Tipo Venta": "P",
            "% BioEtanol": "0,0",
            "% Éster metílico": "0,0",
            "IDEESS": "11305",
            "IDMunicipio": "140",
            "IDProvincia": "03",
            "IDCCAA": "10"
 */

@Component({
  selector: 'page-estacion-detail',
  templateUrl: 'estacion-detail.html',
})
export class EstacionDetailPage {

  public estacionDetalle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estacionDetalle = JSON.parse(navParams.data);
    console.log(this.estacionDetalle);
    console.log(navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacionDetailPage');
  }

}
