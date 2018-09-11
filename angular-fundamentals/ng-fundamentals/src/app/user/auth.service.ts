import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from './user';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {
    let loginInfo = {
      username: userName,
      password: password
    };

    return this.http.post("/api/login", loginInfo)
      .pipe(tap((data => {
        this.currentUser = <IUser>data["user"];
      })))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
