import { VoterService } from './../voter.service';
import { AuthService } from './../../../user/auth.service';
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
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];
  constructor(private auth: AuthService, private voterService: VoterService) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.filterSessions();
    this.sortSessions();
  }

  filterSessions(): ISession[] {
    if (this.sessions) {
      this.visibleSessions = this.filterBy === 'all'
        ? this.sessions
        : this.sessions.filter(s => s.level.toLocaleLowerCase() === this.filterBy);

      return this.visibleSessions;
    }
  }

  sortSessions(): ISession[] {
    if(this.sessions){
      this.visibleSessions = this.filterSessions();
      return this.sortBy === 'name' 
      ? this.visibleSessions.sort((first, second) => (first.name < second.name ? -1 : 1))
      : this.visibleSessions.sort((first, second) => (first.voters.length > second.voters.length ? -1 : 1));
    }
  }

  toggleVote(session: ISession): void {
    this.userHasVoted(session)
      ? this.voterService.deleteVoter(session, this.auth.currentUser.userName)
      : this.voterService.addVoter(session, this.auth.currentUser.userName);

      this.sortSessions();
  }

  userHasVoted(session: ISession): boolean {
     return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

}
