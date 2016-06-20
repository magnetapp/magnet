import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

export enum CALL_ROLE {
  caller,
  callee
}

export interface ICall {
  userId: string;
  role: CALL_ROLE;
  accepted: boolean;
  cancelled: boolean;
  busy: boolean;
  connection: any;
  timestamp: any;
}

export class Call implements ICall {
  
  userId: string;
  role: CALL_ROLE;
  accepted: boolean;
  cancelled: boolean;
  busy: boolean;
  connection: any;
  timestamp: any;

  constructor(userId: string, data: any, private af: AngularFire) {
    this.userId =  userId;
    this.role = data.role || CALL_ROLE.caller;
    this.accepted = (data.role === CALL_ROLE.caller);
    this.cancelled = data.cancelled || false;
    this.busy = data.busy || true;
    this.connection = data.connection || null;
    this.timestamp = '' // firebase.database.ServerValue.TIMESTAMP;
  }
}
