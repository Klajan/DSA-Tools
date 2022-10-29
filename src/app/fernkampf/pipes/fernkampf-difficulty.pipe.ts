import { Pipe, PipeTransform } from '@angular/core';
import { WaffenTyp, LichtVorteil, Scharfschütze } from '../types-fernkampf';

@Pipe({
  name: 'steilschussDifficulty'
})
export class SteilschussDifficultyPipe implements PipeTransform {

  transform(value: number, weapon: WaffenTyp = WaffenTyp.Bogen): number {
    switch (weapon) {
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
  name: 'reitDifficult'
})
export class ReitDifficultyPipe implements PipeTransform {

  transform(value: number, weapon: WaffenTyp = WaffenTyp.Bogen, berittenerschütze: boolean = false): number {
    let difficulty;
    switch (weapon) {
      case WaffenTyp.Wurfwaffe:
        difficulty = Math.ceil(value / 2);
        break;
      case WaffenTyp.Armbrust:
        difficulty = value === 2 ? 0 : value;
        break;
      default:
        difficulty = value;
        break;
    }
    return berittenerschütze ? Math.ceil(difficulty / 2) : difficulty;
  }
}

@Pipe({
  name: 'lichtDifficulty'
})
export class LichtDifficultyPipe implements PipeTransform {

  transform(value: number, vorteil: LichtVorteil = LichtVorteil.None): number {
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

@Pipe({
  name: 'schnellschussDifficulty'
})
export class SchnellschussDifficultyPipe implements PipeTransform {

  transform(value: boolean, vorteil: Scharfschütze = Scharfschütze.None): number {
    if (!value) return 0;
    switch (vorteil) {
      case Scharfschütze.Meisterschütze:
        return 0;
      case Scharfschütze.Scharfschütze:
        return 1;
      default:
        return 2;
    }
  }
}

@Pipe({
  name: 'zweiteATDifficulty'
})
export class ZweiteATDifficultyPipe implements PipeTransform {

  transform(value: boolean, weapon: WaffenTyp = WaffenTyp.Bogen): number {
    if (!value) return 0;
    switch (weapon) {
      case WaffenTyp.Wurfwaffe:
        return 2;
      default:
        return 4;
    }
  }
}
