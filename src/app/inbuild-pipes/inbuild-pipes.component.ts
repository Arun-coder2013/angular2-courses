import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipes',
  templateUrl: './inbuild-pipes.component.html',
  styleUrls: ['./inbuild-pipes.component.css']
})
export class InbuildPipesComponent implements OnInit {
pipesObj ={
  birthday : new Date(1988, 3, 15),
  e: 2.718281828459045,
  title:"The rise of the apes"
}

  constructor() { }

  ngOnInit() {
  }

}
