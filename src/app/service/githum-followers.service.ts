import { Http } from '@angular/http';
import { DataService } from './data-service.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GithumFollowersService extends DataService {

  constructor(http:Http) {
    super('https://api.github.com/users/mosh-hamedani/followers',http);
   }

}