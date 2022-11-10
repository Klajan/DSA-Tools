import { Injectable } from '@angular/core';
import { WaffentypFern } from '../../types/char-enums';

export type Fernkampfwaffe = {
  name: string;
  laden: number;
  tp: string;
  range: [number, number, number, number, number];
  tpExtra: [number, number, number, number, number];
  type?: WaffentypFern;
}

@Injectable({
  providedIn: 'root'
})
export class FernkampfWaffenTabellenService {

  constructor() { }

  public get bogen() { return FernkampfWaffenTabellenService._bogen; }
  public get armbrust() { return FernkampfWaffenTabellenService._armbrust; }
  public get wurfmesser() { return FernkampfWaffenTabellenService._wurfmesser; }
  public get wurfspeer() { return FernkampfWaffenTabellenService._wurfspeer; }
  public get wurfbeil() { return FernkampfWaffenTabellenService._wurfbeil; }
  public get schleuder() { return FernkampfWaffenTabellenService._schleuder; }
  public get diskus() { return FernkampfWaffenTabellenService._diskus; }
  public get blasrohr() { return FernkampfWaffenTabellenService._blasrohr; }

  public getWaffenOfType(type: WaffentypFern) {
    switch (type) {
      case WaffentypFern.Bogen:
        return this.bogen;
      case WaffentypFern.Armbrust:
        return this.armbrust;
      case WaffentypFern.Schleuder:
        return this.schleuder;
      case WaffentypFern.Blasrohr:
        return this.blasrohr;
      case WaffentypFern.Wurfmesser:
        return this.wurfmesser;
      case WaffentypFern.Wurfspeer:
        return this.wurfspeer;
      case WaffentypFern.Wurfbeil:
        return this.wurfbeil;
      case WaffentypFern.Diskus:
        return this.diskus;
      default:
        return this.wurfmesser;
    }
  }

  private static readonly _bogen: Array<Fernkampfwaffe> = [
    {
      name: "Kurzbogen",
      tp: "1W6+4",
      laden: 2,
      range: [10, 20, 40, 80, 150],
      tpExtra: [+3, +2, +1, 0, 0]
    },
    {
      name: "Langbogen",
      tp: "1W6+6",
      laden: 4,
      range: [10, 25, 50, 100, 200],
      tpExtra: [+3, +2, +1, 0, -1]
    },
    {
      name: "Elfenbogen",
      tp: "1W6+5",
      laden: 3,
      range: [10, 25, 50, 100, 200],
      tpExtra: [2, 1, 1, 0, 0]
    },
    {
      name: "Kompositbogen",
      tp: "1W6+5",
      laden: 3,
      range: [10, 20, 35, 50, 80],
      tpExtra: [+2, +1, +1, 0, 0]
    },
    {
      name: "Kriegsbogen",
      tp: "1W6+7",
      laden: 4,
      range: [10, 20, 40, 80, 150],
      tpExtra: [+3, +2, +1, 0, 0]
    },
    {
      name: "Ork. Reiterbogen",
      tp: "1W6+5",
      laden: 3,
      range: [5, 15, 30, 60, 100],
      tpExtra: [+3, +1, 0, -1, -2]
    },
  ]

  private static readonly _armbrust: Array<Fernkampfwaffe> = [
    {
      name: "Leichte Armbrust",
      tp: "1W6+6",
      laden: 15,
      range: [10, 15, 25, 40, 60],
      tpExtra: [+1, +1, 0, 0, -1]
    },
    {
      name: "Windenarmbrust",
      tp: "2W6+6",
      laden: 30,
      range: [10, 30, 60, 100, 180],
      tpExtra: [+4, +2, 0, -1, -3]
    },
    {
      name: "Arbalette",
      tp: "2W6+5",
      laden: 30,
      range: [10, 20, 30, 60, 100],
      tpExtra: [+2, +1, 0, -1, -2]
    },
    {
      name: "Arbalone",
      tp: "3W6+6",
      laden: 40,
      range: [15, 30, 60, 120, 250],
      tpExtra: [+4, +2, 0, -1, -3]
    },
    {
      name: "Balestra",
      tp: "2W6+2",
      laden: 12,
      range: [10, 20, 30, 50, 60],
      tpExtra: [+2, +1, 0, 0, -1]
    },
    {
      name: "Balestrina",
      tp: "1W6+4",
      laden: 4,
      range: [2, 4, 8, 15, 25],
      tpExtra: [+2, +1, 0, 0, -1]
    },
    {
      name: "Balläster",
      tp: "1W6+4",
      laden: 8,
      range: [10, 20, 30, 60, 100],
      tpExtra: [+3, +1, 0, -1, -1]
    },
    {
      name: "Eisenwalder",
      tp: "1W6+3",
      laden: 3,
      range: [5, 10, 15, 20, 40],
      tpExtra: [+1, 0, 0, 0, -1]
    },
  ]

  private static readonly _wurfmesser: Array<Fernkampfwaffe> = [
    {
      name: "Wurfdolch",
      tp: "1W6+1",
      laden: 1,
      range: [2, 4, 6, 8, 15],
      tpExtra: [+1, 0, 0, 0, -1]
    },
    {
      name: "Wurfmesser",
      tp: "1W6",
      laden: 1,
      range: [2, 4, 6, 8, 15],
      tpExtra: [+1, 0, 0, 0, -1]
    },
    {
      name: "Borndorn",
      tp: "1W6+2",
      laden: 1,
      range: [2, 4, 6, 8, 15],
      tpExtra: [+1, 0, 0, 0, -1]
    },
    {
      name: "Wurfstern",
      tp: "1W6+1",
      laden: 1,
      range: [2, 4, 8, 12, 20],
      tpExtra: [+1, 0, 0, 0, 0]
    },
    {
      name: "Dolch",
      tp: "1W6",
      laden: 1,
      range: [1, 3, 5, 7, 10],
      tpExtra: [0, 0, 0, -1, -1]
    },
  ]

  private static readonly _wurfspeer: Array<Fernkampfwaffe> = [
    {
      name: "Wurfspeer",
      tp: "1W6+4",
      laden: 1,
      range: [5, 10, 15, 25, 40],
      tpExtra: [+3, +1, 0, -1, -1]
    },
    {
      name: "Dschadra",
      tp: "1W6+4",
      laden: 1,
      range: [5, 10, 15, 25, 40],
      tpExtra: [+3, +2, +1, 0, 0]
    },
    {
      name: "Efferdbart",
      tp: "1W6+3",
      laden: 1,
      range: [3, 6, 10, 15, 25],
      tpExtra: [+2, +1, 0, -1, -2]
    },
    {
      name: "Holzspeer",
      tp: "1W6+2",
      laden: 1,
      range: [5, 10, 15, 25, 40],
      tpExtra: [+1, 0, 0, -1, -2]
    },
    {
      name: "Speer",
      tp: "1W6+3",
      laden: 1,
      range: [5, 10, 15, 25, 40],
      tpExtra: [+1, 0, 0, -1, -2]
    },
    {
      name: "Speerschleuder",
      tp: "1W6+3",
      laden: 2,
      range: [0, 15, 30, 60, 100],
      tpExtra: [0, +1, 0, 0, -1]
    },
    {
      name: "Stabschleuder",
      tp: "1W6+3",
      laden: 2,
      range: [0, 5, 20, 40, 60],
      tpExtra: [0, 0, 0, 0, 0]
    },
    {
      name: "Granatapfel",
      tp: "4W6",
      laden: 1,
      range: [0, 5, 10, 15, 20],
      tpExtra: [0, 0, 0, 0, 0]
    },
  ]

  private static readonly _wurfbeil: Array<Fernkampfwaffe> = [
    {
      name: "Wurfbeil",
      tp: "1W6+3",
      laden: 1,
      range: [0, 5, 10, 15, 25],
      tpExtra: [0, +1, +1, 0, -1]
    },
    {
      name: "Schneidzahn",
      tp: "1W6+4",
      laden: 1,
      range: [0, 5, 10, 15, 30],
      tpExtra: [0, +1, +1, 0, -1]
    },
    {
      name: "Wurfkeule",
      tp: "2W6+4 (A)",
      laden: 1,
      range: [0, 5, 15, 25, 40],
      tpExtra: [0, +1, +1, +1, 0]
    },
  ]

  private static readonly _schleuder: Array<Fernkampfwaffe> = [
    {
      name: "Schleuder",
      tp: "1W6+2",
      laden: 2,
      range: [0, 5, 15, 25, 40],
      tpExtra: [0, 0, 0, 0, 0]
    },
    {
      name: "Lasso",
      tp: "1W6+4",
      laden: 1,
      range: [0, 2, 5, 10, 15],
      tpExtra: [0, 0, 0, -1, -2]
    },
    {
      name: "Fledermaus",
      tp: "1W6+2",
      laden: 1,
      range: [0, 5, 10, 15, 25],
      tpExtra: [0, 0, 0, 0, -1]
    },
    {
      name: "Wurfnetz",
      tp: "1W6+2",
      laden: 1,
      range: [0, 0, 0, 5, 5],
      tpExtra: [0, 0, 0, 0, 0]
    },
    {
      name: "Schweres Wurfnetz",
      tp: "1W6+6",
      laden: 1,
      range: [0, 0, 0, 5, 5],
      tpExtra: [0, 0, 0, 0, 0]
    },
    {
      name: "Kettenkugel",
      tp: "2W6+2",
      laden: 2,
      range: [0, 2, 5, 8, 15],
      tpExtra: [0, +1, 0, 0, 0]
    },
    {
      name: "Granatapfel",
      tp: "4W6",
      laden: 1,
      range: [0, 5, 10, 15, 20],
      tpExtra: [0, 0, 0, 0, 0]
    },
  ]

  private static readonly _diskus: Array<Fernkampfwaffe> = [
    {
      name: "Diskus",
      tp: "1W6+3",
      laden: 1,
      range: [5, 10, 20, 30, 60],
      tpExtra: [+1, 0, 0, 0, -1]
    },
    {
      name: "Jagddiskus",
      tp: "2W6+4 (A)",
      laden: 1,
      range: [5, 10, 20, 30, 60],
      tpExtra: [+1, 0, 0, 0, -1]
    },
    {
      name: "Kampfdiskus",
      tp: "1W6+5",
      laden: 1,
      range: [10, 20, 30, 45, 60],
      tpExtra: [+1, 0, 0, 0, 0]
    },
  ]

  private static readonly _blasrohr: Array<Fernkampfwaffe> = [
    {
      name: "Blasrohr",
      tp: "1W6-1",
      laden: 2,
      range: [2, 5, 10, 20, 40],
      tpExtra: [0, 0, 0, 0, -2]
    },
  ]
}
