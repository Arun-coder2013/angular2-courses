import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  count=10;
  isLiked=true;
  isSelected()
  {
    if(this.isLiked)
    {
      this.count=this.count-1;
      this.isLiked=!this.isLiked;
    }
    else
    {
      this.count=this.count+1;
      this.isLiked=!this.isLiked;
    }
  console.log(this.count,this.isLiked);
  }
  
  constructor() { }
  ngOnInit() {
  }

}
