import { Router } from '@angular/router';
import { IUser } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: "John",
      lastName: "Papa",
      userName: "john.papa"
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }
}
