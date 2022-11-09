import { Component, OnInit } from '@angular/core';

import { FernkampfTabellenService } from '../fernkampf-tabellen.service';
import { ValueStoreFernService } from '../value-store-fern.service';
import { FernkampfCalculatorService } from '../fernkampf-calculator.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import * as DifficultyPipes from '../pipes/fernkampf-difficulty.pipe';
import { WaffenTabellenFernService } from '../waffen-tabellen-fern.service';
import { AppendRangePipe } from '../pipes/append-range.pipe';

@Component({
  selector: 'app-fernkampf',
  templateUrl: './fernkampf.component.html',
  styleUrls: ['./fernkampf.component.scss']
})
export class FernkampfComponent implements OnInit {

  protected readonly LichtPipe = new DifficultyPipes.LichtDifficultyPipe();
  protected readonly SteilschussPipe = new DifficultyPipes.SteilschussDifficultyPipe();
  protected readonly ReitenPipe = new DifficultyPipes.ReitDifficultyPipe();
  protected readonly AppendRangePipe = new AppendRangePipe();

  constructor(
    protected lookupTable: FernkampfTabellenService,
    protected valueStore: ValueStoreFernService,
    protected waffenTable: WaffenTabellenFernService,
  ) { }

  ngOnInit(): void {
  }
}
