import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, Marker, LatLng} from '@ionic-native/google-maps';
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
    let mapElement = document.getElementById('map_canvas');
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: parseFloat(this.estaciones.ListaEESSPrecio[0]["Latitud"].replace(/,/, '.')),
          lng: parseFloat(this.estaciones.ListaEESSPrecio[0]["Longitud (WGS84)"].replace(/,/, '.'))
        },
        zoom: 10
      },
      controls: {
        compass: false,
        myLocationButton: false,
        indoorPicker: false,
        zoom: false
      }
    };
    this.map = this.googleMaps.create(mapElement, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(() => {
          console.log('MAP Clicked');
        });

        this.estaciones.ListaEESSPrecio.forEach(element => {
          this.createMarker(parseFloat(element.Latitud.replace(/,/, '.')), parseFloat(element["Longitud (WGS84)"].replace(/,/, '.')), element);
        });
        
      });
  }

  createMarker(latitud: any, longitud: any, estacion: any) {
    return this.map.addMarker({
        title: this.createInfo(estacion),
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: latitud,
          lng: longitud
        }
    }).then((marker: Marker) => {
      console.log('marker added');
      marker.on(GoogleMapsEvent.MARKER_CLICK)
        .subscribe(() => {
          alert(JSON.stringify(estacion));
        });
    });
}

  createInfo(element: any){
    return JSON.stringify(element);
  }
}  



