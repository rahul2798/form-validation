import { Component, DoCheck, OnInit } from '@angular/core';
import { DataCommunicationService } from '../data-communication.service';

@Component({
  selector: 'app-receiver-comp',
  templateUrl: './receiver-comp.component.html',
  styleUrls: ['./receiver-comp.component.scss'],
})
export class ReceiverCompComponent implements OnInit, DoCheck {
  dataReceived: any;

  constructor(private messageService: DataCommunicationService) {}

  ngOnInit() {}

  ngDoCheck(): void {
    this.messageService.receiveObsevableData.subscribe((dataReceived) => {
      this.dataReceived = dataReceived;
    });
  }
}
