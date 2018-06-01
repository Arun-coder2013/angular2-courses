import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  // name='THE rISe oF thE ApEs';
  // cardNumber='5112345678901234';
  numbers=[10,20,15];
  
  constructor() {
    this.numbers.push(22);
   }

  ngOnInit() {
  }

}
