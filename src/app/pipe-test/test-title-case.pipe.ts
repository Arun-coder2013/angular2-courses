import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even'
})
export class TestTitleCasePipe implements PipeTransform {

  // transform(value: string) {
  //   if(!value)
  //     return null;
  //   let name = value.split(' ');// ['ARUN','ROUT']
  //   let preposition=['the','of'];
  //   for(let i = 0; i < name.length; i++){
  //       if(i > 0 && preposition.includes(name[i].toLowerCase())){
  //         name[i] = name[i].toLowerCase();
  //       }else{
  //         name[i] =name[i].substr(0,1).toUpperCase()+name[i].substr(1).toLowerCase();
  //       }
      
      
  //   }
  //   return name.join(' ');
  // }

  // transform(value: string) {
  //   if(!value)
  //     return null;
  //     let cardType = this.cardType(value);  
      
  //   return this.maskNumber(value,cardType);
  // }

  // private cardType(value: string):string {
  //   return value.substr(0,1) === '4' ? 'visa' :
  //                   value.substr(0,2) === '50' || value.substr(0,2) === '51' || 
  //                   value.substr(0,2) === '53' || value.substr(0,2) === '54' || 
  //                   value.substr(0,2) === '55'  ? 'master': 'card not found';
  // }

  // private maskNumber(value:string,cardType:string) : string {
  //   let x = 'xxxxxxxxxxxx';   
  //   return cardType === 'visa' ? x.concat(value.substr(12)):
  //                     cardType === 'master' ? x.concat(value.substr(12)):'not found';
  // }
transform(value:any, result?: boolean) {
  let even = [];
  let odd = [];
  let eindex = 0;
  let oindex = 0;
  console.log(result);
  for(let i=0; i<value.length;i++)
  {
    if(value[i] % 2 === 0)
      even[eindex++]=value[i]; 
    else
       odd[oindex++]=value[i];   
  }
  return this.isOdd(result) ? odd : even;
}

private isOdd(result: boolean){
  if ( result === false)
      return true;
  }
}
