import { BadInputError } from './../common/bad-input.error';
import { NotFoundError } from './../common/not-found.error';
import { AppError } from './../common/app-error.error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
 
 constructor(private url:string,private _http:Http) {  }

 getAll(){
  return this._http.get(this.url).map(res=>res.json()).
  catch(this.handleError);
 }
 create(post){
    return  this._http.post(this.url,JSON.stringify(post)).map(res=>res.json())
    .catch(this.handleError);
 }
 update(post){
   return  this._http.patch(this.url+'/'+post.id,
  JSON.stringify({title:'Arun'})).map(res=>res.json())
  .catch(this.handleError);
 }
 delete(id){
   return this._http.delete(this.url+'/'+id).map(res=>res.json()).
   catch(this.handleError);
 }
 
 private handleError(error) {
    if (error.status === 404) {
       return Observable.throw(new NotFoundError(error.json()));
     } else if (error.status === 400) {
       return Observable.throw(new BadInputError(error.json()));
     }
     return Observable.throw(new AppError(error.json()));
 }
}