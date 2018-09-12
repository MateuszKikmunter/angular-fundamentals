import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ISession } from './../shared/event.session';
import { EventService } from './../shared/event.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private session: ISession;

  constructor(private http: HttpClient) { }

  addVoter(eventId: number, session: ISession, userName: string): void {
    session.voters.push(userName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http.post(url, {}).pipe(catchError(this.handleError<ISession>("addVoter"))).subscribe();
  }

  deleteVoter(eventId: number, session: ISession, userName: string): void {
    session.voters = session.voters.filter(v => v.toLocaleLowerCase() !== userName.toLocaleLowerCase());
    this.http.delete<any>(`/api/events/${eventId}/sessions/${session.id}/voters/${userName}`)
      .pipe(catchError(this.handleError<any>("deleteVoter")))
      .subscribe();
  }

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some(v => v.toLocaleLowerCase() === userName.toLocaleLowerCase());
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}