import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {

  constructor() { }
  
  getCourses(){
    return ['Java','.net','Angular'];
  }
  getEmployee(){
    return [
    {
    name:'Arun',
    desc:'java Developer',
    Age:30,
    salary:20000,
    student:{name:'Sidharth',rollno:1234}
  },
    {
    name:'Avay',
    desc:'java Developer',
    Age:20,
    salary:50000
  },
    {
    name:'Rohini',
    desc:'java Developer',
    Age:15,
    salary:40000
  }
  ];
  }

}
