import { Component, OnInit, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-toggle-collapsable',
  templateUrl: './toggle-collapsable.component.html',
  styleUrls: ['./toggle-collapsable.component.scss'],
  animations: [
    trigger('slideDown', [
      state('hidden', style({
        height: 0,
        opacity: 0
      })),
      state('shown', style({
        maxHeight: '500px',
        opacity: 1
      })),
      transition('hidden => shown', animate('100ms ease-in')),
      transition('shown => hidden', animate('100ms ease-out'))
    ])
  ]
})
export class ToggleCollapsableComponent implements OnInit {

  state: string = "hidden";
  @Input() enabled: boolean = false;
  @Output() enabledChange = new EventEmitter<boolean>();
  @Input() label: string = "empty";

  protected hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleChange(event: MatSlideToggleChange) {
    this.hidden = !event.checked;
    this.state = (this.state === 'hidden' ? 'shown' : 'hidden');
  }

}
