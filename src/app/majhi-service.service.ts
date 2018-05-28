import { Injectable } from '@angular/core';

@Injectable()
export class MajhiServiceService {

  pustake=[{p1:'Geeta',p2:'Yugandhar',p3:'Shyamchi Aai'}];
  constructor() { }

  dhakhava(){
    return this.pustake;
  }
}
