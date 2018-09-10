import { ISession } from './../../events/shared/event.session';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-modal',
  styleUrls: ['./simple-modal.component.css'],
  template: `
  <div id="{{ elementId }}" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <h4 class="modal-title">{{ title }}</h4>
        </div>
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>`
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;

  constructor() { }

  ngOnInit() {
  }

}
