import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  template: `<div>
  <h1>{{title}}</h1>
  <img [src]="imageUrl">
</div>`,
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent implements OnInit {

  title = "Angular Property binding examples";
  imageUrl = "./../assets/images/picture.jpg";
  constructor() { }

  ngOnInit() {
  }

}
