import { EventsDataService } from './../common/events-data.service';
import { IEvent } from './../events/shared/event.model';
import { EventService } from './../events/shared/event.service';
import { ISession } from './../events/shared/event.session';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  foundSessions: ISession[];
  events: IEvent[];

  constructor(public authService: AuthService, private eventService: EventService, private eventDataService: EventsDataService) { }

  ngOnInit() { }

  searchSessions(searchTerm: string): void {
    if (searchTerm.length > 0) {
      this.eventService.searchSessions(searchTerm).subscribe(sessions => {
        this.foundSessions = sessions;
      })
    } else {
      this.foundSessions = [];
    }
  }
}
