import { Injectable } from '@angular/core';

@Injectable()
export class MajhiServiceService {

  pustake=[
    {
      p1:'Geeta',
      p2:'Yugandhar',
      p3:'Shyamchi Aai',
      hubby:{
        music:'Clasical',
        dance:'HipHop',
        books:['Java','Angular','C#']
      }
    },
    {
      p1:'Avay',
      p2:'Yugandhar',
      p3:'Shyamchi Aai'
    }
    ];
  constructor() { }

  dhakhava(){
    return this.pustake;
  }
}
