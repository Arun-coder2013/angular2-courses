import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class CustomPipesPipe implements PipeTransform {

  // transform(value: String, limit?: number,caseChange?:boolean) {
  //   if (!value) {
  //      return null;
  //   }
       
  //    let lmitTo = limit ? limit :5; 
  //    if (caseChange)  
  //     return value.substr(0,lmitTo).toUpperCase();   
      
  // return value.substr(0,lmitTo);   
  // }
  transform(value: string) {
    if (!value) {
       return null;
    }
   let  word:string[] = value.split(' ');
   for (let i = 0; i < word.length; i++){
     let x = word[i];
     if( i > 0 && this.isPreposition(x)){
          word[i] = x.toLowerCase();
     }else{
        word[i] = this.titleCase(x);
     }
             
   }
     
  return word.join(' ') ; 
  }

  private isPreposition(word:string):boolean{
    let prepositions=[
      'the',
      'of'
    ];
    return prepositions.includes(word.toLowerCase());
  }
  
  private titleCase(word:string):string{
    return word.charAt(0).toUpperCase()
       +word.substr(1).toLowerCase();
  }

}
