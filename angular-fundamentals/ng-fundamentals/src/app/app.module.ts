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
  EventRouterActivator } from './events/index';

import { EventsAppComponent } from './events-app/events-app.component';
import { NavComponent } from './nav/nav.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/events-detail/create-session/create-session.component';

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
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouterActivator,
    EventsListResolver,
    {
      provide: "canCancelEventCreation",
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty){
    return confirm("Are you sure? Unsaved changes will be lost.");
  }
}
