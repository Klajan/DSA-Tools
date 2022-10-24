import { Component, OnInit } from '@angular/core';

import { MappedSliderComponent } from 'src/app/mapped-slider/mapped-slider.component';

@Component({
  selector: 'app-fernkampf',
  templateUrl: './fernkampf.component.html',
  styleUrls: ['./fernkampf.component.scss']
})
export class FernkampfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  entfernung = [
    { name: 'sehr nah', value: -2 },
    { name: 'nah', value: 0 },
    { name: 'mittel', value: +4 },
    { name: 'weit', value: +8 },
    { name: 'extrem weit', value: +12 },
  ];

}
