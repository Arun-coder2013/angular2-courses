import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'my-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Input('label')
  ArunLbl:string="username";
  @Input('type')
  myType:string='text';
  @Input('name')
  myName:string='password';
  constructor() { }

  ngOnInit() {
  }

}
