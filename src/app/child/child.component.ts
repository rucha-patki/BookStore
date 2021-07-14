import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() amount: number=0;
 @Output() amountChange = new EventEmitter();
 
  withdraw(){
    this.amount -= 100;
    this.amountChange.emit(this.amount);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
