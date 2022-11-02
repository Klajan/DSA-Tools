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
  
  private _enabled: boolean = false;
  public get enabled(): boolean {
    return this._enabled;
  }
  @Input()
  public set enabled(value: boolean) {
    this._enabled = value;
    this.changeState(value);
    this.enabledChange.emit(value)
  }
  @Output() enabledChange = new EventEmitter<boolean>();
  @Input() label: string = "empty";

  protected hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  private changeState(value: boolean) {
    this.hidden = !value;
    this.state = (value ? 'shown' : 'hidden');
  }

  onToggleChange(event: MatSlideToggleChange) {
    this.enabled = event.checked;
  }

}
