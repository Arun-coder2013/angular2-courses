import { ExampleService } from './example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-test',
  templateUrl: './example-test.component.html',
  styleUrls: ['./example-test.component.css']
})
export class ExampleTestComponent  {
  title = 'Example Component';
  courses;
  employes;
  constructor(private exampleService:ExampleService){
    this.courses = this.exampleService.getCourses();
    this.employes = this.exampleService.getEmployee();
  }
  }
