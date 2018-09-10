import { ISession } from './../shared/event.session';
import { IEvent } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = "all";
  sortBy: string = "name";

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEventById(+params["id"]);
      this.addMode = false;
    });
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

  cancelSessionCreation() {
    this.toggleAddMode();
  }

  setFilterValue(value: string): void {
    this.filterBy = value;
  }

  checkFilterValue(value: string): boolean {
    return this.filterBy === value;
  }

  setSortByValue(value: string): void {
    this.sortBy = value;
  }

  checkSortByValue(value: string): boolean {
    return this.sortBy === value;
  }
}