import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'my-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Input()
  myLabel:string="username";
  @Input()
  myType:string='text';
  @Input()
  myName:string='username';
  constructor() { }

  ngOnInit() {
  }

}
