import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { StatusComponent } from './components/status/status.component';
import { HelloComponent } from './components/hello/hello.component';
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
  
  title: string;

  constructor() {
    this.title = 'foo';
  }
}
