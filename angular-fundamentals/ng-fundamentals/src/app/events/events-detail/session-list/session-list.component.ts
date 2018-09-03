import { ISession } from './../../shared/event.session';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})

@Input()
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[];

  constructor() { }

  ngOnInit() {
  }

}
