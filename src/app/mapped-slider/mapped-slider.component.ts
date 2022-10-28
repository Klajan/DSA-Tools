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
  @Input()
  public set sliderValue(value: number) {
    this._sliderValue = value;
    this.updateValues(value);
  }
  @Input() title: string|null = null
  @Output() sliderValueChange = new EventEmitter<number>();
  @Output() selectedValueChange = new EventEmitter<number>();
  @Output() selectedNameChange = new EventEmitter<string>();

  public get sliderValue(): number {
    return this._sliderValue;
  }
  public get items(): Array<{name: string, value: number, comment?: string}> {
    return this._items;
  }

  protected previewName: string = "empty";
  protected previewValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  private capIndex(index: number) {
    return Math.min(Math.max(index, 0), this.items.length - 1);
  }

  private updateValues(value: number) {
    let index = this.capIndex(value);
    this.previewName = this._items[index].name;
    this.previewValue = this._items[index].value;
    this.selectedValueChange.emit(this._items[index].value);
    this.selectedNameChange.emit(this._items[index].name);
  }
  onValueChange(value: number | null) {
    if (value === null) return;
    this.sliderValueChange.emit(value);
    this.updateValues(value);
  }
  onInputChange(event: MatSliderChange) {
    if (event.value === null) return;
    let index = this.capIndex(event.value);
    this.previewName = this._items[index].name;
    this.previewValue = this._items[index].value;
  }

  formatThumb = ((value: number) => {
    return this._items[this.capIndex(value)].value;
  }).bind(this);

}
