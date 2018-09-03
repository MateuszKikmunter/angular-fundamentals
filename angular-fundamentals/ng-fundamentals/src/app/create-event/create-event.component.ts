import { EventService } from './../events/shared/event.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IEvent } from '../events';

@Component({
  selector: 'app-create-event',
  templateUrl: "./create-event.component.html",
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty: boolean = true;
  newEvent: IEvent;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  saveEvent(formValues){
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigateByUrl("events");
  }
}
