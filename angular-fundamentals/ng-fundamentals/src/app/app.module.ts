import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventsListResolver,
  CreateEventComponent,
  EventsDetailComponent,
  EventRouterActivator,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './events/index';

import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';
import { EventsAppComponent } from './events-app/events-app.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/events-detail/create-session/create-session.component';
import { SessionListComponent } from './events/events-detail/session-list/session-list.component';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventsDetailComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    EventRouterActivator,
    EventsListResolver,
    {
      provide: "canCancelEventCreation",
      useValue: checkDirtyState
    },
    AuthService,
    VoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return confirm("Are you sure? Unsaved changes will be lost.");
  }
}
