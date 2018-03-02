import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstacionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
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
