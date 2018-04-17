import { Component } from '@angular/core';

@Component({
    selector:'ng-model-twoway-binding',
    template:`
       <span> Ng model Two way binding</span>
       <input [(ngModel)] ="email" 
       (click)="onClick()"
       />
    `
})

export class NgModelTwoWayBindingDemoComponent{
email = "arun.rout2001";
onClick(){
    console.log(this.email);
}
}