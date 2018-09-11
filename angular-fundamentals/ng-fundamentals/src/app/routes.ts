import { EventResolverService } from './common/event-resolver.service';
import { CreateSessionComponent } from './events/events-detail/create-session/create-session.component';
import { EventsListResolver } from './common/events-list-resolver.service';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventsDetailComponent } from "./events/events-detail/events-detail.component";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ["canCancelEventCreation"] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: 'events/:id', component: EventsDetailComponent, resolve: { event: EventResolverService } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: "user", loadChildren: "./user/user.module#UserModule" }
];