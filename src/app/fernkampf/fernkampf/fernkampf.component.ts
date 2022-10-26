import { Component, OnInit } from '@angular/core';

import { FernkampfTabellenService } from '../fernkampf-tabellen.service';
import { ValueStoreFernService } from '../value-store-fern.service';

@Component({
  selector: 'app-fernkampf',
  templateUrl: './fernkampf.component.html',
  styleUrls: ['./fernkampf.component.scss']
})
export class FernkampfComponent implements OnInit {

  constructor(
    protected lookupTable: FernkampfTabellenService,
    protected valueStore: ValueStoreFernService,
  ) { }

  ngOnInit(): void {
  }
}
