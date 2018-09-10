import { ISession } from './../../shared/event.session';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../../shared';

@Component({
  selector: 'upvote',
  template: `
  <div class="voting-widgetcontainer pointable" (click)="onClick()">
    <div class="well voting-widget">
      <div class="voting-button">
        <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
      </div>
      <div class="badge badge-inverse voting-count">
        <div>{{count}}</div>
      </div>
    </div>
</div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? "red" : "white";
  }

  @Output() vote = new EventEmitter();
  iconColor: string;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  onClick(): void {
    this.vote.emit({});
  }

}
