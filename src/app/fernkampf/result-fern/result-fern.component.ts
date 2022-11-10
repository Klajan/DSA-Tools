import { Component, OnInit } from '@angular/core';

import { FernkampfCalculatorService } from '../fernkampf-calculator.service';
import { ValueStoreFernService } from '../value-store-fern.service';
import { FernkampfTimeCalculatorService } from '../fernkampf-time-calculator.service';

@Component({
  selector: 'app-result-fern',
  templateUrl: './result-fern.component.html',
  styleUrls: ['./result-fern.component.scss']
})
export class ResultFernComponent implements OnInit {

  constructor(
    protected valueStore: ValueStoreFernService,
    protected calcService: FernkampfCalculatorService,
    protected timeCalcService: FernkampfTimeCalculatorService,
  ) { }

  ngOnInit(): void {
    this.calcService.calculateDifficulty();
    this.timeCalcService.calculateTime();
  }

  reset() { this.valueStore.resetToDefaults(); }

}
