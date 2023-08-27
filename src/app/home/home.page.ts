import {
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnChanges, DoCheck, OnInit, AfterViewInit {
  childData: any;
  @Output() newDataToParent = new EventEmitter<any>();
  @Input() dataTochild;
  parent: any;
  // @Output() newData = new EventEmitter<string>();

  constructor(private router: Router) {}

  handle(val: any) {
    console.log(val);
    this.childData = val;
    this.newDataToParent.emit(this.childData);
  }
  ngAfterViewInit(): void {
    this.parent = this.dataTochild;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('call ngOnChangesChild');
    // this.parent = this.dataTochild;
  }

  ngOnInit(): void {
    console.log('call ngOnInitChild');

    console.log(this.dataTochild);
  }

  ngDoCheck(): void {
    console.log('call ngDoCheckChild');
  }
}
