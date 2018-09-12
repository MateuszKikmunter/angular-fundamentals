import { ISession } from './../shared/event.session';
import { VoterService } from './voter.service';
import { Observable, of } from 'rxjs';

describe("VoterService", () => {
    let service: VoterService;
    let mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj("mockHttp", ["delete", "post"]);
        service = new VoterService(mockHttp);
    });

    describe("deleteVoter", () => {
        it("should remove voter from the list of voters", () => {
            var session = {
                voters: ["Joe", "John"],
                id: 6
            };

            mockHttp.delete.and.returnValue(of(false));
            service.deleteVoter(3, session as ISession, "Joe");

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("John");
        });

        it("should call http.delete with the right URL", () => {
            var session = {
                voters: ["Joe", "John"],
                id: 6
            };

            mockHttp.delete.and.returnValue(of(false));
            service.deleteVoter(3, session as ISession, "Joe");

            expect(mockHttp.delete).toHaveBeenCalledWith("/api/events/3/sessions/6/voters/Joe");
        });
    });

    describe("addVoter", () => {
        it("should call http.post with the right URL", () => {
            var session = {
                voters: ["Joe"],
                id: 6
            };

            mockHttp.post.and.returnValue(of(false));
            service.addVoter(3, session as ISession, "John");

            expect(mockHttp.post).toHaveBeenCalledWith("/api/events/3/sessions/6/voters/John", jasmine.any(Object));
        });
    });
});