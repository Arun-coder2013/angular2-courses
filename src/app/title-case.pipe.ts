import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(str: string): any {

    let str2=str.split(' ');
    for(let i=0;i<str.length;i++)
    {
      str2[i]=str2[i].substr(0,1).toUpperCase()+str2[i].substr(1).toLowerCase();

   }
    return str2.join(' ');
  }

}
