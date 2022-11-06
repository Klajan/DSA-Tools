import { Component, OnInit } from '@angular/core';

import { NumericInputComponent } from 'src/app/numeric-input/numeric-input.component';
import { FernkampfCalculatorService } from '../fernkampf-calculator.service';
import { ValueStoreFernService } from '../value-store-fern.service';

@Component({
  selector: 'app-result-fern',
  templateUrl: './result-fern.component.html',
  styleUrls: ['./result-fern.component.scss']
})
export class ResultFernComponent implements OnInit {

  constructor(
    protected valueStore: ValueStoreFernService,
    protected calcService: FernkampfCalculatorService
  ) { }

  ngOnInit(): void {
    this.calcService.calculateDifficulty();
  }

  reset() { this.valueStore.resetToDefaults(); }

}
