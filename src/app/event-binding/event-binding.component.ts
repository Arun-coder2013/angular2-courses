import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  onClick($event){
    console.log('Event triggered'+" "+$event.target.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
