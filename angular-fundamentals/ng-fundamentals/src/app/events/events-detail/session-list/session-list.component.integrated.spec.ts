import { EventService } from './../../shared/event.service';
import { CollapsibleWellComponent } from './../../../common/collapsible-well/collapsible-well.component';
import { UpvoteComponent } from './../upvote/upvote.component';
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from '@angular/platform-browser';

import { ISession } from './../../shared/event.session';
import { AuthService } from './../../../user/auth.service';
import { SessionListComponent } from "./session-list.component";
import { VoterService } from '../voter.service';
import { DurationPipe } from '../../shared/duration.pipe.';

describe("SessionListComponent", () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { username: "" }
        };

        let mockVoterService = {
            userHasVoted: () => true
        };

        let mockEventService = {};

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent, 
                UpvoteComponent, 
                DurationPipe, 
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService },
                { provide: EventService, useValue: mockEventService }
            ],
            schemas: [
                //NO_ERRORS_SCHEMA
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe("initial display", () => {
        it("should have the correct session title", () => {
            component.sessions = [{
                id: 3,
                name: "Session 1",
                presenter: "Joe",
                duration: 1,
                level: "beginner",
                abstract: "abstract",
                voters: ["John", "Bob"]
            }];
            component.filterBy = "all";
            component.sortBy = "name";
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector("[well-title]").textContent).toContain("Session 1");

            // this is doing the same what code above, but uses debug element instead of native element
            expect(debugEl.query(By.css("[well-title]")).nativeElement.textContent).toContain("Session 1");
        });
    });
});