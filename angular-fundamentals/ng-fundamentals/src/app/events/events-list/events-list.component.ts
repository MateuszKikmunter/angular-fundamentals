import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `<div class="container">
                  <h1>Upcoming Angular Events</h1>
                  <hr>
                  <event-thumbnail *ngFor="let event of events" [event]="event" (click)="handleThumbnailClick(event.id)"></event-thumbnail>
              </div>
`,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.eventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data["events"]; // --> data comes from a resolver defined in a service and used in routes
  }

  handleThumbnailClick(eventId){
    this.toastr.success(eventId);
  }

}
