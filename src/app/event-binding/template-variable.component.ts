import { Component } from '@angular/core';

@Component({
  selector:'app-template-variable',
  template:`
    <h1>Template varibale Demo</h1>
    <input type="text" #email />
    <input type="button" value="click me" (click)="onClick(email)" />
  `
})
export class TemplateVariableComponent{
    onClick(email){
        console.log(email.value);
    }
}