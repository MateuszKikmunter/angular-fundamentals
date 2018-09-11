import { EventsDataService } from './../../common/events-data.service';
import { IEvent } from './../shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-list',
  template: `<div class="container">
                  <h1>Upcoming Angular Events</h1>
                  <hr>
                  <event-thumbnail *ngFor="let event of events" [event]="event"></event-thumbnail>
              </div>
`,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService, private route: ActivatedRoute, private eventDataService: EventsDataService) { }

  ngOnInit() {
    let currentExistingEvents = this.route.snapshot.data["events"]; // --> data comes from a resolver defined in a service and used in routes
    this.events = currentExistingEvents;
    this.eventDataService.setCurrentEvents(currentExistingEvents);
  }

}
