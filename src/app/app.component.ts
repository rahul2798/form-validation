import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataCommunicationService } from './data-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnChanges, DoCheck, OnInit {
  dataToChildData = 'i am  parent to child data';
  childData: any;
  data: any;
  isVisible: boolean = false;
  dataToParent: any;
  datasend = 'hi am service data';
  constructor(private dataService: DataCommunicationService) {
    console.log('call constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('call ngOnChanges');
  }

  ngOnInit(): void {
    console.log('call ngOnInit');
  }

  ngDoCheck(): void {
    console.log('call ngDoCheck');
  }

  seeChanges(val: any) {
    console.log(val);
    this.data = val;
  }

  addBook(val: any) {
    this.childData = val;
    console.log(this.childData);
  }

  a: String;
  b: String;

  //  for(let i=0 ; i<a.lentgh; i++){
  //   if(charAt[a]=charAt[b]){

  //   }
  //   else{
  //     if(charAt[a])
  //   }
  //  }

  dataToParentContent(value) {
    this.dataToParent = value;
  }

  send() {
    this.dataService.sendData(this.datasend);
  }
}
