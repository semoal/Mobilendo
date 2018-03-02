import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvinciasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvinciasProvider {

  public BASE_URL: string = "https://sedeaplicaciones.minetur.gob.es";

  constructor(public http: HttpClient) {
    console.log('Hello ProvinciasProvider Provider');
    console.log(this.BASE_URL);
  }

  /**
   * Método para recuperar las provincias
   */
  getCCAA(){
    return new Promise(resolve => {
      this.http.get(this.BASE_URL+'/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ComunidadesAutonomas').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getProvinciasByCCAA(id: string){
    return new Promise(resolve => {
      this.http.get(this.BASE_URL+'/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMunicipios(idProvincia: string){
    return new Promise(resolve => {
      this.http.get(this.BASE_URL + '/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/' + idProvincia).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getEstaciones(idMunicipio: string){
    return new Promise(resolve => {
      this.http.get(this.BASE_URL + '/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/' + idMunicipio).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
