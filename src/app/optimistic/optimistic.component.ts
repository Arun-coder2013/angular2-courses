import { NotFoundError } from './../common/not-found.error';
import { BadInputError } from './../common/bad-input.error';
import { AppError } from './../common/app-error.error';
import { PostServiceService } from './../service/post-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optimistic',
  templateUrl: './optimistic.component.html',
  styleUrls: ['./optimistic.component.css']
})
export class OptimisticComponent implements OnInit {

  private posts :any[];
  constructor(private service:PostServiceService ) { }

  ngOnInit() {
     this.service.getAll()
     .subscribe(
       response => {
          this.posts = response.json();
          console.log(response.json());
       });
    }
createPost(input: HTMLInputElement){
    let requestBody = {title:input.value}
    this.posts.splice(0,0,requestBody);
    this.service.create(requestBody)
    .subscribe(
     res => {
        requestBody['id'] = res.json().id;
        console.log(res.json());
     },
     (error:AppError)=> {
         this.posts.splice(0,1);
         if (error instanceof BadInputError ) {
            alert('Bad input Eorror...');
         } else throw error;
     });
}
updatePost(post){
 this.service.update(post)
  .subscribe(
    res =>{
     console.log(res.json());
    },
    (error:AppError) => {
         if (error instanceof BadInputError){
            alert('Bad Input Error');
         } else throw error;
     });

}
deletePost(post){
  let index = this.posts.indexOf(post);
  this.posts.splice(index,1);
 this.service.delete(post.id)
  .subscribe(
    res =>{
        console.log(res.json());
     },
     (error:AppError) => {
         this.posts.splice(index,0,post);
         if (error instanceof NotFoundError){
           alert('Not found went wrong');
         } else throw error;
     });
}

}
