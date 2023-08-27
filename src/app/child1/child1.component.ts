import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DataCommunicationService } from '../data-communication.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component implements OnInit, DoCheck {
  @Input() dataToChild;
  @Output() dataToParent = new EventEmitter<string>();
  dat5: any;
  constructor(private dataService: DataCommunicationService) {}

  ngOnInit() {}

  ngDoCheck(): void {
    this.dat5 = this.dataService.getData();
  }

  data1 = 'data from child to parent';

  send() {
    this.dataToParent.emit(this.data1);
  }
}
