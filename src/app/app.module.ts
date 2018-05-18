import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstIonicAddedPage } from '../pages/first-ionic-added/first-ionic-added';
import { TestPage } from '../pages/test/test';

import { GoogleMaps} from "@ionic-native/google-maps";
import { MarkerService } from '../services/marker-service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage, 
    FirstIonicAddedPage,
    TestPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true,
     },{
    links: [
      { component: FirstIonicAddedPage, name: 'ActionSheetBasicPage', segment: 'action-sheet-basic' }
    ]})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    FirstIonicAddedPage,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MarkerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMaps
  ]
})
export class AppModule {}
