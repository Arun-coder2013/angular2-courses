import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {
  posts :any[];

  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http:Http) { 
    _http.get(this.url)
    .subscribe(response => {
      this.posts = response.json();
      console.log(response.json());
    })
  }

createPost(input: HTMLInputElement){
  let requestBody = {title:input.value}
   this._http.post(this.url,JSON.stringify(requestBody))
   .subscribe(response => {
     requestBody['id'] = response.json().id;
     this.posts.push(requestBody);
     console.log(response.json());
   });
}
updatePost(post){
  this._http.patch(this.url+'/'+post.id,
  JSON.stringify({title:'Arun'}))
  .subscribe(response =>{
    console.log(response.json());
  });

}
deletePost(post){
  this._http.delete(this.url+'/'+post.id)
  .subscribe(response =>{
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    console.log(response.json());
  });
}
  ngOnInit() {
  }

}
