import { Component, Inject } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'hello.component.html',
  styleUrls: ['./../assets/style/signal.css']
})
export class HelloComponent {
  
  _window: any;
  webrct: any;
  
  constructor(private window: Window) {
    
    this._window = window;

    this.webrct = new this._window.SimpleWebRTC({
      localVideoEl: 'stream-me',
      autoRequestMedia: true
    });
  }
}