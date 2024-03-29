import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>`,
  styleUrls: ['./events-app.component.css']
})
export class EventsAppComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }

}
