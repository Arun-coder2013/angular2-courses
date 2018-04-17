import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

gender =[
  {id:1,name:"male"},
  {id:2,name:"female"}
  ];
 books = [
   {id:1,name:"Java"},
   {id:2,name:"Angular"},
   {id:3,name:"Microservice"},
   {id:4,name:"Unix"}
 ];

log(f){
  console.log(f);

}

  constructor() { }

  ngOnInit() {
  }

}
