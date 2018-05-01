import { RouterModule,ActivatedRoute } from '@angular/router';
import { GithumFollowersService } from './../service/githum-followers.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
followers:any[];
  constructor(
    private route:ActivatedRoute,
    private sevice:GithumFollowersService) { }

  ngOnInit() {
    //Retrieving the query param from the url
    // this.route.queryParamMap.subscribe(param =>{
    //  let id=  param.get('page');
    //  let username = param.get('order');
    //  console.log('id is :',id ,'user name is :',username);
    // });

    //combined both the paramters. but here one problem that we have subscribe inside another subscribe
    //  Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ]).subscribe(combines =>{
    //   //here in this page id and usernames are not passed so it will so null. 
    //   //but this is the way to combine parameters.
    //  let id = combines[0].get('id');
    //  let username = combines[0].get('username');

    //  let page = combines[1].get('page');
    //  let order = combines[1].get('order');
     
    //  console.log('Required parameters:',id,username);
    //  console.log('Optional parameters:',page,order);
    
    //  this.sevice.getAll().subscribe(followers=>{
    //   this.followers = followers;
    //   // console.log(this.followers);
    //   })
    // });

  //final solutions
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).switchMap(combines =>{
      //here in this page id and usernames are not passed so it will so null. 
      //but this is the way to combine parameters.
     let id = combines[0].get('id');
     let username = combines[0].get('username');

     let page = combines[1].get('page');
     let order = combines[1].get('order');
     
     console.log('Required parameters:',id,username);
     console.log('Optional parameters:',page,order);
    
    return this.sevice.getAll();
      // console.log(this.followers);
    }).subscribe(followers =>{
      this.followers = followers;
    });
    
  }

}
