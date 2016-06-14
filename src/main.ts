import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { MagnetAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(MagnetAppComponent, [
  FIREBASE_PROVIDERS,
  ROUTER_PROVIDERS,
  defaultFirebase('https://magnet-26f7f.firebaseio.com')
]);

