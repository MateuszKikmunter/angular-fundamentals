import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from '@angular/platform-browser';

import { ISession } from './../../shared/event.session';
import { AuthService } from './../../../user/auth.service';
import { SessionListComponent } from "./session-list.component";
import { VoterService } from '../voter.service';

describe("SessionListComponent", () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;

        beforeEach(async(() => {
            let mockAuthService = {};
            let mockVoterService = {};

            TestBed.configureTestingModule({
                imports: [],
                declarations: [SessionListComponent],
                providers: [
                    { provide: AuthService, useValue: mockAuthService },
                    { provide: VoterService, useValue: mockVoterService }
                ],
                schemas: []
            });
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SessionListComponent);
            component = fixture.componentInstance;
            debugEl = fixture.debugElement;
            element = fixture.nativeElement;
        });
});