import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  isSelected=true;
  onClick(){
    this.isSelected = !this.isSelected;
    
  }
  constructor() { }

  ngOnInit() {
  }

}
