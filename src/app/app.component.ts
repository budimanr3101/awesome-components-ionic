import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Ionic official',
      url: '/official',
      icon: 'logo-ionic'
    },
    {
      title: 'Fivethree',
      url: '/fivethree',
      icon: 'at'
    },
    {
      title: 'Yannbf',
      url: '/yannbf',
      icon: 'person'
    },
    {
      title: 'Angular Material',
      url: '/angular-material',
      icon: 'logo-angular'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
    // menuCtrl.enable(false, 'menu-components');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
