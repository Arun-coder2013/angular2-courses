import { IEmployee } from './employee-interface';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

getAllEmployees():IEmployee[]{
  return  [
      {code:'01',name:'emp1',gender:'male', salary:1000220,doj:'24/04/2017'},
      {code:'02',name:'emp2',gender:'male',salary:1000035,doj:'22/04/2016'},
      {code:'03',name:'emp3',gender:'female',salary:1000033,doj:'24/04/2018'},
      {code:'04',name:'emp4',gender:'male',salary:1000204,doj:'24/04/2016'},
      {code:'05',name:'emp5',gender:'female',salary:100003,doj:'24/04/2013'},
      {code:'06',name:'emp6',gender:'male',salary:100002,doj:'24/04/2012'},
      {code:'07',name:'emp7',gender:'female',salary:100001,doj:'24/04/2011'},
      {code:'08',name:'emp8',gender:'male',salary:100010,doj:'24/04/2014'},
      {code:'09',name:'emp9',gender:'female',salary:100100,doj:'24/04/2015'},
      {code:'010',name:'emp10',gender:'male',salary:110000,doj:'24/04/2018'}

    ];
}
  

}
