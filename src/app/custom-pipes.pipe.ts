import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class CustomPipesPipe implements PipeTransform {

  transform(value: String, limit?: number,caseChange?:boolean) {
    if (!value)
        return null;
     let lmitTo = limit ? limit :5; 
     if (caseChange)  
      return value.substr(0,lmitTo).toUpperCase();   
      
  return value.substr(0,lmitTo);   
  }

}
