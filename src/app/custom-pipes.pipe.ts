import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even'
})
export class CustomPipesPipe implements PipeTransform {

  // transform(value: string,limit?:number,isUpperCase?:boolean) {
  //   if (!value) {
  //      return null;
  //   }
  //   let cardType = this.cardType(value);
  //   let maskNumber = this.maskNumber(cardType,value);
    
  //   return maskNumber;
      
  // }

  // private maskNumber(cardType:string,value:string){
  //   let x='';
  //   console.log(cardType);
  //   let maskNumber = cardType.toLowerCase() === 'visa' ||  cardType.toLowerCase() === 'master' ?
  //              x.concat('xxxx-xxxx-xxxx-'+value.substr(12)) :
  //               cardType.toLowerCase() === 'amex' ?
  //              x.concat('xxxx-xxxx-xxx-'+value.substr(11)) : 'xxxxxxxxxx';

   
  //   return maskNumber;
  // }
  // private  cardType(value):string {

  //   return value.substr(0,1) == '4' ? 'visa' :
  //       value.substr(0,2) == '34' ||  value.substr(0,2) == '37' ? 'Amex':
  //       value.substr(0,2) == '50' ||  value.substr(0,2) == '51' ||  
  //       value.substr(0,2) == '52' ||  value.substr(0,2) == '53' || 
  //       value.substr(0,2) == '54' ||  value.substr(0,2) == '55' ? 'master': 'NotFound';
  // }
  // transform(value: string,limit?:number,isUpperCase?:boolean) {
  //   if (!value) {
  //      return null;
  //   }
  //   let inputValue = isUpperCase ? value.toUpperCase():value.toLowerCase();
  //   limit = limit ? limit:5;
  //   return inputValue.substr(0,limit); 
      
  // }
  // transform(value: string) {
  //   if (!value) {
  //      return null;
  //   }
  //  let  word:string[] = value.split(' ');
  //  for (let i = 0; i < word.length; i++){
  //    let x = word[i];
  //    if( i > 0 && this.isPreposition(x)){
  //         word[i] = x.toLowerCase();
  //    }else{
  //       word[i] = this.titleCase(x);
  //    }
             
  //  }
     
  // return word.join(' ') ; 
  // }

  // private isPreposition(word:string):boolean{
  //   let prepositions=[
  //     'the',
  //     'of'
  //   ];
  //   return prepositions.includes(word.toLowerCase());
  // }
  
  // private titleCase(word:string):string{
  //   return word.charAt(0).toUpperCase()
  //      +word.substr(1).toLowerCase();
  // }

transform(value: any,result?:boolean) {
    let even =[];
    let odd =[];
    let odIndex =0;
    let evenIndex =0;

    for( let i =0 ; i < value.length; i++){
      if( value[i] % 2 === 0){
         even[evenIndex++] = value[i];
      }else{
        odd[odIndex++] = value[i];
      }
    }
    return result ? odd : even;
      
      
  }

}
