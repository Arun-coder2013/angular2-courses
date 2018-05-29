import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  isSelected = true;
  isClicked=false;
  show=true;
  onClick(){
    console.log("Initial value of isSelected ",this.isSelected);
    this.isSelected = !this.isSelected;
    this.isClicked = !this.isClicked;
    console.log("Changed value of isSelected ",this.isSelected);
    console.log(this.show);
  }
  constructor() { }

  ngOnInit() {
  }

}
