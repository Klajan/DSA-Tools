import { Pipe, PipeTransform } from '@angular/core';

import { LookupTable } from '../services/fernkampf-tabellen.service';

@Pipe({
  name: 'appendRange'
})
export class AppendRangePipe implements PipeTransform {

  transform(input: LookupTable, transform?: Array<number | string>): LookupTable {
    if(!transform) return input;
    const nextObj = structuredClone(input);
    for (let index = 0; index < nextObj.length; index++) {
      if(transform[index])
        nextObj[index].name += " / " + transform[index].toString() +"m";
    }
    return nextObj;
  }
}
