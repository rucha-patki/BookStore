import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  amount: number = 500;
  constructor() {
  }
 
  deposit(){
    this.amount +=100;
  }
  ngOnInit(): void {
  }

}
