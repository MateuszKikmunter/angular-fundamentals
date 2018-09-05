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

  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm: string): void {
    if (searchTerm) {
      this.eventService.searchSessions(searchTerm).subscribe(sessions => {
        this.foundSessions = sessions;
      })
    }
  }
}
