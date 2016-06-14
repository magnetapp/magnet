import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MagnetAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { provide } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(MagnetAppComponent, [
  FIREBASE_PROVIDERS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(Window, { useValue: window }),
  defaultFirebase('https://magnet-26f7f.firebaseio.com')
]);

