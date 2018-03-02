import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProvDetailPage } from '../pages/prov-detail/prov-detail';
import { MunicipioDetailPage } from '../pages/municipio-detail/municipio-detail';
import { MapDetailPage } from '../pages/map-detail/map-detail';
import { EstacionDetailPage } from '../pages/estacion-detail/estacion-detail';

import { ProvinciasProvider } from '../providers/provincias/provincias';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMaps } from '@ionic-native/google-maps';
import { MapProvider } from '../providers/map/map';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProvDetailPage,
    MunicipioDetailPage,
    MapDetailPage,
    EstacionDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProvDetailPage,
    MunicipioDetailPage,
    MapDetailPage,
    EstacionDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvinciasProvider,
    MapProvider
  ]
})
export class AppModule {}
