import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataCommunicationService {
  receiveData: any;

  constructor() {}

  sendData(value: any) {
    this.receiveData = value;
    console.log(this.receiveData);
  }

  getData() {
    return this.receiveData;
  }

  public obsevableData = new BehaviorSubject<any>('');

  receiveObsevableData = this.obsevableData.asObservable();

  sendDataObservable(value: any) {
    this.obsevableData.next(value);
  }
}
