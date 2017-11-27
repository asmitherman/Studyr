import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
    // const {restApp} = require("bb-rest");
    // var origin = 'http://localhost:9876';
    // var key = 'a8bf2978-6885-4dc0-ae65-0199a9d1d86d';
    // var secret = 'g4Dx6knh5VZGb6nUHox53wCnLh6vSMeJ';
    // var myApp = new restApp(origin, key, secret);

    // myApp.patch('courses/courseId:2', {
    //   data: {name: 'New Name', description: 'This course has been renamed.'},
    //   complete: function (error, response, body) {
    //     console.log('error:', error);
    //     console.log('statusCode:', response && response.statusCode);
    //     console.log('body:', body);
    //   }
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  async login(user: User) {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    this.navCtrl.push(HomePage, {}, {animate: false});
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }
}
