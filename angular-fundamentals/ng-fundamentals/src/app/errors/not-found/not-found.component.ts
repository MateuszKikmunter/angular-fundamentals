import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h1 class='error-message'>404</h1>`,
  styles: [
    `.error-message {
      margin-top: 150px;
      font-size: 170px;
      text-align: center;
    }`
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
