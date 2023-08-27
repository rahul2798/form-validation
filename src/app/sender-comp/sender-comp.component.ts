import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../data-communication.service';

@Component({
  selector: 'app-sender-comp',
  templateUrl: './sender-comp.component.html',
  styleUrls: ['./sender-comp.component.scss'],
})
export class SenderCompComponent implements OnInit {
  constructor(private messageService: DataCommunicationService) {}

  ngOnInit() {}

  sendMessage(value: any) {
    // console.log(value);
    this.messageService.sendDataObservable(value);
  }
}
