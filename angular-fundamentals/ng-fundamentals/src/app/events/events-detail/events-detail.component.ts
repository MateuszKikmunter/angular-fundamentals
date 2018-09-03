import { ISession } from './../shared/event.session';
import { IEvent } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {
  event: IEvent;
  addMode: boolean;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    let eventId = this.route.snapshot.params['id'];
    this.event = this.eventService.getEventById(+eventId);
  }

  toggleAddMode() {
    this.addMode = !this.addMode;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);

    this.eventService.updateEvent(this.event);
    this.toggleAddMode();
  }

  cancelSessionCreation(){
    this.toggleAddMode();
  }
}