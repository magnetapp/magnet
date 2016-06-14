import { Injectable } from '@angular/core';
import { XirsysModel } from './../models/xirsys.model';
import { Http } from '@angular/http';

@Injectable()
export class WebrtcService {

  config: any;

  constructor(private http: Http) { 
    
    this.config = {};

    // Todo: put this somewhere smarter
    this.config.ident = 'magnetadmin';
    this.config.secret = 'a161d43e-323e-11e6-9dbb-ef4a32e7c607'; // Todo: Renew this when we release
    this.config.domain = 'www.magnet.host';
    this.config.application = 'default';
    this.config.room = 'default';
    this.config.secure = 1;
  }

  initiate() {
    this.http.get('https://service.xirsys.com/ice', this.config).map(resp => {
      console.log(resp);
    });
  }
}
