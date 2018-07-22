import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private restangular: Restangular) { }

  getUsers() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.restangular.all('users').doGET();
  }

  getUser(userId) {
    // return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId)
    return this.restangular.one('users/' + userId).doGET();
  }

  getPosts() {
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    return this.restangular.all('posts').doGET();
  }
}
