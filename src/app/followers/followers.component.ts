import { GithumFollowersService } from './../service/githum-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
followers:any[];
  constructor(private sevice:GithumFollowersService) { }

  ngOnInit() {
    this.sevice.getAll().subscribe(followers=>{
      this.followers = followers;
      console.log(this.followers);
    })
  }

}
