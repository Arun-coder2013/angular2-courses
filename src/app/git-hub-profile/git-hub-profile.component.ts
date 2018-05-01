
import { RouterModule,Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-git-hub-profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css']
})
export class GitHubProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private programingRoute:Router) { }

  ngOnInit() {
    //retriving the required parameters
    // this.route.paramMap.subscribe(params =>{
    //   let id = params.get('id');
    //   let username = params.get('username');
    //   console.log(id,username);
    // });

    //combining both the parameters i.e. query and required parameters
   

  }
  submit(){
    this.programingRoute.navigate(['/followers'],
    {queryParams:{page:1,order:'latest'}})
  }

}
