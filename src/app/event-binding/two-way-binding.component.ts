import { Component } from '@angular/core';

@Component({
    selector:'app-template-two-way-binding',
    template:`
        <span>Template Two way binding</span>
        <input type="text" [value]="email" (click)="onClick($event)" />
    `
})
export class TwoWayTemplateBindingComponent{
email = "arun.rout";
onClick($event){
   this.email = $event.target.value;
    console.log(this.email);
}
}