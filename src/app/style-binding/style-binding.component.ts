import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  isSelected = true;
  onClick(){
    this.isSelected = !this.isSelected;
  }
  constructor() { }

  ngOnInit() {
  }

}
