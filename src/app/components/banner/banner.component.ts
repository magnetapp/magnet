import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { StatusComponent } from './../status/status.component';
import { HelloComponent } from './../hello/hello.component';
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
  selector: 'banner',
  templateUrl: 'banner.component.html',
  directives: [ROUTER_DIRECTIVES, NgClass],
  styleUrls: ['./../../assets/style/signal.css']
})

export class BannerComponent {
  
  title: string;
  isDay: boolean;
  
  constructor () {
    this.isDay = false;
  }
  
  toggle() {
    this.isDay = !this.isDay;
  }
}
