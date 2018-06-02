import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipes',
  templateUrl: './inbuild-pipes.component.html',
  styleUrls: ['./inbuild-pipes.component.css']
})
export class InbuildPipesComponent implements OnInit {
array = [20,23,22,24,25,27,29,30];
pipesObj ={
  birthday : new Date(1988, 3, 15),
  x: 2.718281828459045,
  title:"ARUN KUMAR",
}

  constructor() { }

  ngOnInit() {
  }

}
