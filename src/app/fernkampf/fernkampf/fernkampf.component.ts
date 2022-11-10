import { Component, OnInit } from '@angular/core';

import { FernkampfTabellenService } from '../services/fernkampf-tabellen.service';
import { FernkampfValueStoreService } from '../services/fernkampf-value-store.service';
import * as DifficultyPipes from '../pipes/fernkampf-difficulty.pipe';
import { FernkampfWaffenTabellenService } from '../services/fernkampf-waffen-tabellen.service';
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
    protected valueStore: FernkampfValueStoreService,
    protected waffenTable: FernkampfWaffenTabellenService,
  ) { }

  ngOnInit(): void {
  }
}
