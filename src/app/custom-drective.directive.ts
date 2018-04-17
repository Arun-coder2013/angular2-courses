import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDrective]'
})
export class CustomDrectiveDirective {


 constructor(private el:ElementRef) { }
@HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  console.log("on Blur");
}
 

}
