export interface IXirsysModel {
  ident: string;
  secret: string;
  domain: string;
  application: string;
  room: string;
  secure: number;
}

export class XirsysModel implements IXirsysModel {
  ident: string;
  secret: string;
  domain: string;
  application: string;
  room: string;
  secure: number;

  constructor(options?: any) {
    this.ident = 'magnetadmin';
    this.secret = 'c75b99da-33fc-11e6-acc6-eeb9e2055043';
    this.domain = 'www.magnet.host';
    this.room = 'test';
    this.application = 'test';
    this.secure = 0;
  }
}