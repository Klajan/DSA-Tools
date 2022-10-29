import { Pipe, PipeTransform } from '@angular/core';
import { WaffenTyp, LichtVorteil } from '../types-fernkampf';

@Pipe({
  name: 'SteilschussDifficulty'
})
export class SteilschussDifficultyPipe implements PipeTransform {

  transform(value: number, waffentyp: WaffenTyp = WaffenTyp.Bogen): number {
    switch (waffentyp) {
      case WaffenTyp.Wurfwaffe:
        //return +2/+8 insted of +2/+4)
        return value !== 2 ? value * 2 : value;
        break;
      default:
        return value;
        break;
    }
  }
}

@Pipe({
  name: 'ReitDifficult'
})
export class ReitDifficultyPipe implements PipeTransform {

  transform(value: number, waffentyp: WaffenTyp = WaffenTyp.Bogen): number {
    switch (waffentyp) {
      case WaffenTyp.Wurfwaffe:
        //return +2/+8 insted of +2/+4)
        return Math.ceil(value / 2);
        break;
      case WaffenTyp.Armbrust:
        return value === 2 ? 0 : value;
        break;
      default:
        return value;
        break;
    }
  }
}

@Pipe({
  name: 'LichtDifficulty'
})
export class LichtDifficultyPipe implements PipeTransform {

  transform(value: number, vorteil: LichtVorteil = LichtVorteil.None): number {
    console.log(vorteil)
    let max = 16;
    switch (vorteil) {
      // @ts-expect-error
      case LichtVorteil.Nachtsicht:
        max = 5;
      case LichtVorteil.Dämmerungssicht:
        return Math.min(Math.ceil(value / 2), max);
      case LichtVorteil.Nachtblind:
        return Math.min(value * 2, max)
      default:
        return value;
        break;
    }
  }
}
