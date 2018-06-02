import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-selection',
  templateUrl: './radio-selection.component.html',
  styleUrls: ['./radio-selection.component.css']
})
export class RadioSelectionComponent  {

selectedRadioButtonValue: string ='all';
@Output()
radioButtonSelectionChange = new EventEmitter<string>();
@Input()
all:number;
@Input()
male:number;
@Input()
female:number;

onRadioButtonSelectionChange(){
  console.log(this.selectedRadioButtonValue);
  return this.radioButtonSelectionChange.emit(this.selectedRadioButtonValue);
}

}
