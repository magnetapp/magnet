import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { StatusComponent } from './status/status.component';
import { HelloComponent } from './hello/hello.component';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

@Routes([
  // Go to a specific room (TODO)
  {
    'path': '/',
    'component': StatusComponent
  },
  // Get a List of Rooms
  {
    'path': '/hello',
    'component': HelloComponent
  }
])

@Component({
  moduleId: module.id,
  selector: 'magnet-app',
  templateUrl: 'magnet.component.html',
  directives: [ROUTER_DIRECTIVES, BannerComponent],
  styleUrls: ['assets/style/signal.css']
})
export class MagnetAppComponent {
  title = 'foo';
}
