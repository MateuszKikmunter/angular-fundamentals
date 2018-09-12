import { EventsDataService } from './../common/events-data.service';
import { EventService } from './../events/shared/event.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../events';

@Component({
  selector: 'app-create-event',
  templateUrl: "./create-event.component.html",
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent: IEvent;

  constructor(private router: Router, private eventService: EventService, private eventDataService: EventsDataService) { }

  ngOnInit() {
  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues).subscribe((event: IEvent) => {
        this.isDirty = false;
        this.router.navigate(["/events"]);
     });

     this.eventService.getEvents().subscribe(events => this.eventDataService.setCurrentEvents(events));
  }
}
