import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MagnetAppComponent } from './app/magnet.component';
import { environment } from './app/environment';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { provide } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(MagnetAppComponent, [
  FIREBASE_PROVIDERS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyBsGla1MaUKHth1LDplGIj-F4puEPUKrv8",
    authDomain: "magnet-26f7f.firebaseapp.com",
    databaseURL: "https://magnet-26f7f.firebaseio.com",
    storageBucket: "magnet-26f7f.appspot.com",
  }),
  provide(Window, { useValue: window }),
]);
