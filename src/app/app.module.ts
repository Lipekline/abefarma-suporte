import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FcmService } from './services/fcm.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

const config = {
  apiKey: "AIzaSyBR-KeDDI5nMrCKlIHCnm4bALLA4LnFDow",
  authDomain: "suporte-abefarma.firebaseapp.com",
  databaseURL: "https://suporte-abefarma.firebaseio.com",
  projectId: "suporte-abefarma",
  storageBucket: "suporte-abefarma.appspot.com",
  messagingSenderId: "1053528695959",
  appId: "1:1053528695959:web:538fb163a46cc9ec45b5d2"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    FcmService,
    FirebaseX,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
