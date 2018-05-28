import { MajhiServiceService } from './../majhi-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-majha-component',
  templateUrl: './majha-component.component.html',
  styleUrls: ['./majha-component.component.css']
})
export class MajhaComponentComponent implements OnInit {
  pustake:any[];
  constructor(private p:MajhiServiceService) { }

  ngOnInit() {
    this.pustake=this.p.dhakhava();
  }

}
