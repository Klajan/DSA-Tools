import { Component, OnInit, Input, Output, EventEmitter, PipeTransform } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-value-slider',
  templateUrl: './value-slider.component.html',
  styleUrls: ['./value-slider.component.scss']
})
export class ValueSliderComponent implements OnInit {

  private _sliderValue: number = 0;
  @Input()
  public set sliderValue(value: number) {
    this._sliderValue = value;
    this.sliderValueChange.emit(value);
    this.updateValues(this._sliderValue);
  }
  public get sliderValue(): number {
    return this._sliderValue;
  }

  @Input() valuePipe: PipeTransform|null = null;
  private _valuePipeParam: Array<unknown>|null = null;
  @Input()
  public set valuePipeParam(value: Array<unknown>) {
    this._valuePipeParam = value;
    this.updateValues(this._sliderValue);
  }
  @Output() sliderValueChange = new EventEmitter<number>();
 
  private _min: number | null = null;
  public get min(): number | null {
    return this._min;
  }
  @Input() public set min(value: number | null) {
    this._min = value;
    this.sliderValue = this.clamp(this._sliderValue);
  }
  private _max: number | null = null;
  public get max(): number | null {
    return this._max;
  }
  @Input() public set max(value: number | null) {
    this._max = value;
    this.sliderValue = this.clamp(this._sliderValue);
  }

  @Input() sliderLabel: string | null = null;
  @Input() showNumberInLabel: boolean = true;

  protected get labelNum(): string | null {
    return this.showNumberInLabel ? this.sliderValuePreview.toString() : null;
  }

  @Output() valueChange = new EventEmitter<number>();

  protected valuePreview: number = 0;
  protected sliderValuePreview: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.updateValues(this._sliderValue);
  }

  private clamp(value: number): number {
    const min = this._min || Number.MIN_SAFE_INTEGER;
    const max = this._max || Number.MAX_SAFE_INTEGER;
    return Math.min(Math.max(value, min), max);
  }

  private applyPipe(value: number) {
    return this.valuePipe !== null ?
      this._valuePipeParam === null ? 
        this.valuePipe.transform(value) :
        this.valuePipe.transform(value, ...this._valuePipeParam) :
      value;
  }

  private updatePreview(value: number) {
    this.valuePreview = this.applyPipe(value);
    this.sliderValuePreview = value;
  }
  private updateValues(sliderValue: number) {
    let clamped = this.clamp(sliderValue);
    this.valueChange.emit(this.applyPipe(clamped));
    this.updatePreview(clamped);
  }
  onValueChange(value: number | null) {
    if (value === null) return;
    const capped = this.clamp(value);
    this.sliderValue = capped;
  }
  onInputChange(event: MatSliderChange) {
    if (event.value === null) return;
    const capped = this.clamp(event.value);
    this.updatePreview(capped);
  }

}
