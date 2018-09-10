import { Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './../jQuery.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-modal',
  styleUrls: ['./simple-modal.component.css'],
  template: `
  <div id="{{ elementId }}" #modalContainer class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <h4 class="modal-title">{{ title }}</h4>
        </div>
        <div class="modal-body" (click)="closeModal()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>`
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnbodyClick: string;
  @ViewChild("modalContainer") containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal(): void {
    if (this.closeOnbodyClick.toLocaleLowerCase() === "true") {
      this.$(this.containerEl.nativeElement).modal("hide");
    }
  }
}
