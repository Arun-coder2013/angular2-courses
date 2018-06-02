import { IEmployee } from './employee-interface';
import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css'],
  providers:[EmployeeService]
})
export class ReusableComponent implements OnInit {

  employees:IEmployee[];
  selectedEmployeeCountValue:string='all';
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getAllEmployees();
  }
   getAllEmployeeCount(){
     return this.employees.length;
   }
   getMaleEmployeeCount(){
     return this.employees.filter( e => e.gender ==='male').length;
   }
   getFemaleEmployeeCount(){
     return this.employees.filter(e => e.gender ==='female').length;
   }
   
   onSelectedEmployeeCountChange(selectedRadioButtonValue:string){
     this.selectedEmployeeCountValue = selectedRadioButtonValue;

   }

}
