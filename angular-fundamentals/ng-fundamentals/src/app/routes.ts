import { EventsListResolver } from './common/events-list-resolver.service';
import { EventRouterActivator } from './common/event-router-activator.service';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventsDetailComponent } from "./events/events-detail/events-detail.component";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ["canCancelEventCreation"] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: 'events/:id', component: EventsDetailComponent, canActivate: [EventRouterActivator] },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: "user", loadChildren: "./user/user.module#UserModule" }
];