import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  template: `<h1>New Event</h1>
  <hr>
  <div class='col-md-6'>
  <h3>Create form will go here</h3>
  </div>
  <br/>
  <br/>
  <button type='submit' class='btn btn-primary'>Save</button>
  <button type='button' class='btn btn-default' (click)="goBack()">Cancel</button>`,
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(): void {
    //this.router.navigate("[/events]");
    this.router.navigateByUrl("events");
  };

}
