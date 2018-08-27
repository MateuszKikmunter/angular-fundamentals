import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventsDetailComponent } from "./events/events-detail/events-detail.component";
import { Routes } from "@angular/router";


export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventsDetailComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];