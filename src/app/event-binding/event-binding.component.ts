import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  x="sidharth";
  onClick($event){
    this.x= $event.target.value;
    console.log('Event triggered'+" "+this.x);
    // console.log('Event triggered'+" "+$event.target);
    // console.log('Event triggered'+" "+x.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
