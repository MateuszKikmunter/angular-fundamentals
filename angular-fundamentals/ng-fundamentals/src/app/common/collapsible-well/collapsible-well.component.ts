import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
  <div (click)="toggleContent()" class="well pointable">
    <h4>
      <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
  </div>
  `,
  styleUrls: ['./collapsible-well.component.css']
})

export class CollapsibleWellComponent implements OnInit {
  visible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleContent(): void {
    this.visible = !this.visible;
  }
}
