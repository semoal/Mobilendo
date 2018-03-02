import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvinciasProvider } from '../../providers/provincias/provincias';
import { ProvDetailPage } from '../prov-detail/prov-detail';

@Component({
  selector: 'page-home',
  providers: [ProvinciasProvider],
  templateUrl: 'home.html',
  entryComponents: [ProvDetailPage]
})
export class HomePage {

  public provincias: any;

  constructor(public navCtrl: NavController, public _provinciasProvider: ProvinciasProvider) {
    this.getCC();
  }

  getCC(){
    this._provinciasProvider.getCCAA()
    .then(data => {
      this.provincias = data;
      console.log(this.provincias);
    });
  }

  goToProvincia(id: string){
    this.navCtrl.push(ProvDetailPage, id);
  }

}
