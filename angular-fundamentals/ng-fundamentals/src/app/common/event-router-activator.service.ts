import { EventService } from './../events/shared/event.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventRouterActivator implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    let id = route.params["id"];
    let eventExists = !!this.eventService.getEventById(+id);

    if (!eventExists) {
      this.router.navigateByUrl("404");
    }

    return eventExists;
  }
}
