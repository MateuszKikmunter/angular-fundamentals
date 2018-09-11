import { IEvent } from './../events/shared/event.model';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsDataService {
  private currentExistingEvents: IEvent[] = [];

  constructor() { }

  getCurrentEvents() {
    return this.currentExistingEvents;
  }

  setCurrentEvents(events: IEvent[]) {
    this.currentExistingEvents = events;
  }
}
