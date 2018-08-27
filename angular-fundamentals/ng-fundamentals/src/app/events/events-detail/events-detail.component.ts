import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {
  event: any;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    let eventId = this.route.snapshot.params['id'];
    this.event = this.eventService.getEventById(+eventId);
    }
  }