import { ISession } from './event.session';
import { IEvent } from './event.model';
import { Injectable, EventEmitter } from "@angular/core";
import { Subject, Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>("/api/events")
      .pipe(catchError(this.handleError<IEvent[]>("getEvents", [])));
  }

  getEventById(eventId: number): Observable<IEvent> {
    return this.http.get<IEvent>(`/api/events/${eventId}`)
      .pipe(catchError(this.handleError<IEvent>("getEventById")));
  }

  saveEvent(event: IEvent) {
    return this.http.post<IEvent>(`/api/events/`, event)
      .pipe(catchError(this.handleError<IEvent>("saveEvent")));
  }

  searchSessions(searchTerm: string):Observable<ISession[]> {
    return this.http.get<ISession[]>("/api/sessions/search?search=" + searchTerm)
      .pipe(catchError(this.handleError<ISession[]>("searchSessions")));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}