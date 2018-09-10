import { ISession } from './../shared/event.session';
import { EventService } from './../shared/event.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private session: ISession;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) { }

  addVoter(session: ISession, userName: string): void {
    session.voters.push(userName);
  }

  deleteVoter(session: ISession, userName: string): void {
    session.voters = session.voters.filter(v => v.toLocaleLowerCase() !== userName.toLocaleLowerCase());
  }

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some(v => v.toLocaleLowerCase() === userName.toLocaleLowerCase());
  }
}
