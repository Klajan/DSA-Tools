import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-mapped-slider',
  templateUrl: './mapped-slider.component.html',
  styleUrls: ['./mapped-slider.component.scss']
})
export class MappedSliderComponent implements OnInit {
  
  private _sliderValue: number = 0;
  private _items: Array<{name: string, value: number, comment?: string}> = [{name: "", value: 0}];
  @Input()
  public set items(value: Array<{name: string, value: number, comment?: string}>) {
    this._items = value;
    this.updateValues(this._sliderValue);
  }
  public get items(): Array<{name: string, value: number, comment?: string}> {
    return this._items;
  }
  @Input()
  public set sliderValue(value: number) {
    this._sliderValue = value;
    this.updateValues(value);
  }
  public get sliderValue(): number {
    return this._sliderValue;
  }
  @Output() sliderValueChangedEvent = new EventEmitter<number>();
  @Output() ValueChangedEvent = new EventEmitter<number>();

  protected name: string = "empty";
  protected value: number = 0;
  protected previewName: string = "empty";
  protected previewValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  private updateValues(value: number) {
    let index = Math.min(Math.max(value, 0), this.items.length - 1)
    this.name = this._items[index].name;
    this.value = this._items[index].value;
    this.previewName = this.name;
    this.previewValue = this.value;
    this.ValueChangedEvent.emit(this.value);
  }
  onValueChange(value: number | null) {
    if (value === null) return;
    this.sliderValueChangedEvent.emit(value);
    this.updateValues(value);
  }
  onInputChange(event: MatSliderChange) {
    if (event.value === null) return;
    let index = Math.min(Math.max(event.value, 0), this.items.length - 1)
    this.previewName = this._items[index].name;
    this.previewValue = this._items[index].value;
  }

}
