import { EventService } from './../events/shared/event.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class EventResolverService implements Resolve<any> {

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEventById(route.params["id"]);
    }

    constructor(private eventService: EventService) { }
}
