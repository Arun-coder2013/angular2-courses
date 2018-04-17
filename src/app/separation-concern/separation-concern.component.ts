import { NotFoundError } from './../common/not-found.error';
import { BadInputError } from './../common/bad-input.error';
import { AppError } from './../common/app-error.error';
import { ValidationErrors } from '@angular/forms';
import { PostServiceService } from './../service/post-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-separation-concern',
  templateUrl: './separation-concern.component.html',
  styleUrls: ['./separation-concern.component.css']
})
export class SeparationConcernComponent implements OnInit {

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
    this.service.create(requestBody)
   .subscribe(
     res => {
        requestBody['id'] = res.json().id;
        this.posts.push(requestBody);
        console.log(res.json());
     },
     (error:AppError)=> {
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
 this.service.delete(303)
  .subscribe(
    res =>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
        console.log(res.json());
     },
     (error:AppError) => {
         if (error instanceof NotFoundError){
           alert('Not found went wrong');
         } else throw error;
     });
}
  
}
