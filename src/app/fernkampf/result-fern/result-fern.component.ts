import { Component, OnInit } from '@angular/core';

import { FernkampfCalculatorService } from '../services/fernkampf-calculator.service';
import { FernkampfValueStoreService } from '../services/fernkampf-value-store.service';
import { FernkampfTimeCalculatorService } from '../services/fernkampf-time-calculator.service';

@Component({
  selector: 'app-result-fern',
  templateUrl: './result-fern.component.html',
  styleUrls: ['./result-fern.component.scss']
})
export class ResultFernComponent implements OnInit {

  constructor(
    protected valueStore: FernkampfValueStoreService,
    protected calcService: FernkampfCalculatorService,
    protected timeCalcService: FernkampfTimeCalculatorService,
  ) { }

  ngOnInit(): void {
    this.calcService.calculateDifficulty();
    this.timeCalcService.calculateTime();
  }

  reset() { this.valueStore.resetToDefaults(); }

}
