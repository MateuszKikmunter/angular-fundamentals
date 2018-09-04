import { ISession } from './../../shared/event.session';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})

@Input()
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.filterSessions();
  }

  filterSessions(): ISession[] {
    if (this.sessions) {
      this.visibleSessions = this.filterBy === 'all'
        ? this.sessions
        : this.sessions.filter(s => s.level.toLocaleLowerCase() === this.filterBy);

        return this.visibleSessions;
    }
  }

}
