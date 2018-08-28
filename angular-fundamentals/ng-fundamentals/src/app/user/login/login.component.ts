import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseOverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigateByUrl("events");
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.cancel();
  }
}
