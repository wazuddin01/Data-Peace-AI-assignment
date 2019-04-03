import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/user';

@Injectable()
export class UserService {
  users
  url: string = "http://demo9197058.mockable.io/users";
  constructor(private http: HttpClient) { }

  //Fetching all the user
  fetchUser() {
    this.users = this.http.get(this.url);
    return this.users
  }
  //Setting Data coming From users component into users variable
  setUser(data) {
    this.users = data
  }
  SingleUser() {
    return this.users
  }

}
