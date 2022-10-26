import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.scss']
})
export class NumericInputComponent implements OnInit {

  private _value: number = 0;
  @Output() valueChange = new EventEmitter<number>();
  @Input()
  public set value(value: number) {
    this._value = value;
    this.valueChange.emit(this._value);
    console.log(this._value)
  };
  public get value(): number {
    return this._value;
  };
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
