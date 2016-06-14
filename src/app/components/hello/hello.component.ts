import { Component, Inject } from '@angular/core';
import { WebrtcService } from './../../services/webrtc.service';

@Component({
  moduleId: module.id,
  templateUrl: 'hello.component.html',
  providers: [WebrtcService],
  styleUrls: ['./../../assets/style/signal.css']
})
export class HelloComponent {
  
  _window: any;
  webrtcObj: any;

  constructor(private window: Window, private webrtcService: WebrtcService) {
    
    this._window = window;

    this.webrtcObj = new this._window.SimpleWebRTC({
      localVideoEl: 'stream-me',
      autoRequestMedia: true
    });

    this.webrtcService.initiate();
  }
}