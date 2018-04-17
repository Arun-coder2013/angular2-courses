import { DataService } from './data-service.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostServiceService extends DataService {

 constructor(http:Http) { 
   super('https://jsonplaceholder.typicode.com/posts',http);
  }
}
