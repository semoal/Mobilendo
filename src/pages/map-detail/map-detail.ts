import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { ProvinciasProvider } from '../../providers/provincias/provincias';
import { EstacionDetailPage } from '../../pages/estacion-detail/estacion-detail';

/**
 * Generated class for the MapDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map-detail',
  templateUrl: 'map-detail.html',
})
export class MapDetailPage {

  public map: GoogleMap;
  public id: string; 
  public estaciones: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, public _provinciasProvider: ProvinciasProvider) {
    this.id = navParams.data;
    this.getEstaciones();
  }

  getEstaciones(){
    this._provinciasProvider.getEstaciones(this.id)
      .then(data => {
        this.estaciones = data;
        this.loadMap();
      });
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: parseFloat(this.estaciones.ListaEESSPrecio[0]["Latitud"].replace(/,/, '.')),
          lng: parseFloat(this.estaciones.ListaEESSPrecio[0]["Longitud (WGS84)"].replace(/,/, '.'))
        },
        zoom: 15,
        tilt: 30,
      },
      controls: {
        compass: false,
        myLocationButton: false,
        indoorPicker: false,
        zoom: false
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.estaciones.ListaEESSPrecio.forEach(element => {
          this.createMarker(parseFloat(element.Latitud.replace(/,/, '.')), parseFloat(element["Longitud (WGS84)"].replace(/,/, '.')), element);
        });
      })
      .catch(error => {
        console.log(error);
      });

  }

  createMarker(lat:number, lng: number, estacion: any){      
    this.map.addMarker({
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: lat,
        lng: lng
      }
    }).then(
      (marker: Marker) => {
        this.map.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe((data)=> {
          this.navCtrl.push(EstacionDetailPage, JSON.stringify(estacion));
        });
      }
    );
  }

}
