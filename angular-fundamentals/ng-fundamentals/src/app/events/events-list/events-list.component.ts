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
  events: any[];

  constructor(private eventService: EventService, private toastr: ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventId){
    this.toastr.success(eventId);
  }

}
