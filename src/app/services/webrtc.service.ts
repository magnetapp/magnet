import { Injectable } from '@angular/core';
import { IXirsysModel, XirsysModel } from './../models/xirsys.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

class Config {

}

@Injectable()
export class WebrtcService {

  config: IXirsysModel;

  constructor(private http: Http) { 
    this.config = new XirsysModel();
  }

  private responseHandler(r: Response) {
    let response = r.json();
    return response || {};
  }

  private errorHandler(err: any): Observable<Response> {
    return Observable.throw(err);
  }

  initiate(): Observable<Response> {
    return this.http.post('https://service.xirsys.com/ice', JSON.stringify(this.config))
      .map(this.responseHandler)
      .catch(this.errorHandler);
  }
}
