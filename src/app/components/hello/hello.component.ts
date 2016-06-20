import { Component, Inject } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'hello.component.html',
  styleUrls: ['./../../assets/style/signal.css']
})
export class HelloComponent {
  
  _window: any;
  webrtcObj: any;
  callData: any;

  dummyId: string;
  dummyCalleeId: string;

  constructor(private window: Window) {
    
    this.dummyId = 'ilks4lv9w7guh8ll44ki99gkk4';
    this.dummyCalleeId = 'phgpjo93i23j23i8fhfsso4'

    this._window = window;
    this.callData = {};
    this.webrtcObj = new this._window.SimpleWebRTC({
      localVideoEl: 'stream-me',
      autoRequestMedia: true
    });
  }

  call(calleeId?: string) {
    const promise = this.callData.set({
      'calling': true,
      'accepted': true,
      'cancelled': false,
      'WebRTC': {
        'peerConnectionConfig': null
      }
    }) // todo: call model
  }
}