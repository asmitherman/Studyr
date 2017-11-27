import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
export const firebaseConfig = {
    apiKey: "AIzaSyBJsdTbJuKqUwZyYGAKI7-0jogucI0PrFU",
    authDomain: "studyr-f8e89.firebaseapp.com",
    databaseURL: "https://studyr-f8e89.firebaseio.com",
    projectId: "studyr-f8e89",
    storageBucket: "studyr-f8e89.appspot.com",
    messagingSenderId: "374490949114"
  };
