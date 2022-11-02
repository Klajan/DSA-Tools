import { Injectable } from '@angular/core';
import { WaffenTyp } from './types-fernkampf';

export type LookupTable = Array<{ name: string, value: number, comment?: string }>;

@Injectable({
  providedIn: 'root'
})
export class FernkampfTabellenService {

  constructor() { }

  private static readonly _distanz: LookupTable = [
    { name: 'sehr nah', value: -2 },
    { name: 'nah', value: 0 },
    { name: 'mittel', value: +4 },
    { name: 'weit', value: +8 },
    { name: 'extrem weit', value: +12 },
  ];
  private static readonly _defaultDistanzIndex = 1;

  private static readonly _licht: LookupTable = [
    { name: 'Tageslicht', value: 0 },
    { name: 'Dämmerung', value: +2 },
    { name: 'Mondlicht', value: +4 },
    { name: 'Sternenlicht', value: +6 },
    { name: 'Finsternis', value: +8 },
  ];
  private static readonly _defaultLichtIndex = 0;

  //Laut Wege des Entdecker, 16 Stufen
  private static readonly _lichtAdvanced: LookupTable = [
    { name: 'Tageslicht', value: 0 },
    { name: 'Tageslicht, leicht bewölkt', value: +1 },
    { name: 'Tageslicht, stark bewölkt', value: +2 },
    { name: 'Dämmerung', value: +3 },
    { name: 'Dämmerung, fortgeschritten', value: +4 },
    { name: 'Dämmerung, spät', value: +5 },
    { name: 'Vollmondnacht', value: +6 },
    { name: 'Vollmondnacht, bewölkt', value: +7 },
    { name: 'Halbmondnacht', value: +8 },
    { name: 'Halbmondnacht, bewölkt', value: +9 },
    { name: 'Mondlose Nacht, sternenklar', value: +10 },
    { name: 'Mondlose Nacht, leicht bewölkt', value: +11 },
    { name: 'Mondlose Nacht, stark bewölkt', value: +12 },
    { name: 'Finstere Nacht', value: +13 },
    { name: 'Finsternis', value: +14 },
    { name: 'Finsternis, fast absolut', value: +15 },
    { name: 'absolute Finsternis', value: +16 },
  ]

  private static readonly _sicht: LookupTable = [
    { name: 'Klar', value: 0 },
    { name: 'Dunst', value: +2 },
    { name: 'Nebel', value: +4 },
    { name: 'Unsichtbares Ziel', value: +8 },
  ];
  private static readonly _defaultSichtIndex = 0;

  private static readonly _bewegung: LookupTable = [
    { name: 'unbeweglich', value: -4 },
    { name: 'stillstehend', value: -2 },
    { name: 'leichte Bewegung', value: 0 },
    { name: 'schnelle Bewegung', value: +2 },
    { name: 'sehr schnelle Bewegung', value: +4 },
  ];
  private static readonly _defaultBewegungIndex = 2;

  private static readonly _ziel: LookupTable = [
    { name: 'winzig', value: +8 },
    { name: 'sehr klein', value: +6 },
    { name: 'klein', value: +4 },
    { name: 'mittel', value: +2 },
    { name: 'groß', value: 0 },
    { name: 'sehr groß', value: -2 },
  ];
  private static readonly _defaultZielIndex = 3;

  private static readonly _deckung: LookupTable = [
    { name: 'halbe Deckung', value: +2 },
    { name: 'dreiviertel Deckung', value: +4 },
  ];
  private static readonly _defaultDeckungIndex = 0;

  private static readonly _reitbewegungSchuss: LookupTable = [
    { name: 'Reittier stehend', value: +2 },
    { name: 'Reittier im Schritt', value: +4 },
    { name: 'Reittier galoppierend', value: +8 },
  ];
  private static readonly _defaultReitbewegungIndex = 0;

  //deprecated
  private static readonly _reitbewegungWurf: LookupTable = [
    { name: 'Reittier stehend', value: +1 },
    { name: 'Reittier im Schritt', value: +2 },
    { name: 'Reittier galoppierend', value: +4 },
  ];

  private static readonly _wind: LookupTable = [
    { name: 'böiger Seitenwind', value: +4 },
    { name: 'starker, böiger Seitenwind', value: +8 },
  ];
  private static readonly _defaultWindIndex = 0;

  private static readonly _steilschuss: LookupTable = [
    { name: 'Steilschuss nach unten', value: +2 },
    { name: 'Steilschuss nach oben', value: +4 },
  ];
  private static readonly _defaultSteilschussIndex = 0;

  private static readonly _steilwurf: LookupTable = [
    { name: 'Steilschuss nach unten', value: +2 },
    { name: 'Steilschuss nach oben', value: +8 },
  ];
  private static readonly _defaultSteilwurfIndex = 0;

  private static readonly _waffentypen: LookupTable = [
    { name: 'Wurfwaffen', value: WaffenTyp.Wurfwaffe },
    { name: 'Bogen', value: WaffenTyp.Bogen },
    { name: 'Armburst', value: WaffenTyp.Armbrust },
    { name: 'Schleuder', value: WaffenTyp.Schleuder },
    { name: 'Blasrohr', value: WaffenTyp.Blasrohr },
  ]

  get distanz() { return FernkampfTabellenService._distanz; }
  get licht() { return FernkampfTabellenService._lichtAdvanced; }
  get sicht() { return FernkampfTabellenService._sicht; }
  get bewegung() { return FernkampfTabellenService._bewegung; }
  get ziel() { return FernkampfTabellenService._ziel; }
  get deckung() { return FernkampfTabellenService._deckung; }
  get wind() { return FernkampfTabellenService._wind; }
  get steilschuss() { return FernkampfTabellenService._steilschuss; }
  get steilwurf() { return FernkampfTabellenService._steilwurf; } //deprecated
  get reitenSchuss() { return FernkampfTabellenService._reitbewegungSchuss; }
  get reitenWurf() { return FernkampfTabellenService._reitbewegungWurf; } //deprecated
  get waffenTypen() { return FernkampfTabellenService._waffentypen; }
  
  getAll() {
    return {
      entfernung: this.distanz,
      licht: this.licht,
      sicht: this.sicht,
      bewegung: this.bewegung,
      ziel: this.ziel,
      deckung: this.deckung,
      wind: this.wind,
      steilschuss: this.steilschuss,
      steilwurf: this.steilwurf,
      reitenSchuss: this.reitenSchuss,
      reitenWurf: this.reitenWurf,
    }
  }

  getSensibleDefaultIndexes() {
    return {
      distanz: FernkampfTabellenService._defaultDistanzIndex,
      licht: FernkampfTabellenService._defaultLichtIndex,
      sicht: FernkampfTabellenService._defaultSichtIndex,
      bewegung: FernkampfTabellenService._defaultBewegungIndex,
      ziel: FernkampfTabellenService._defaultZielIndex,
      deckung: FernkampfTabellenService._defaultDeckungIndex,
      wind: FernkampfTabellenService._defaultWindIndex,
      steilschuss: FernkampfTabellenService._defaultSteilschussIndex,
      reitenBewegung: FernkampfTabellenService._defaultReitbewegungIndex,
    }
  }

  private getValueChecked(index: number, table: LookupTable): number|null {
    return index >= 0 && index < table.length ? table[index].value : null;
  }

  private getValueLimited(index: number, table: LookupTable): number {
    return table[Math.min(Math.max(0, index), table.length - 1)].value;
  }

  getDistanzValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._distanz); }
  getZielValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._ziel); }
  getBewegungValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._bewegung); }
  getLichtValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._lichtAdvanced); }
  getSichtValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._sicht); }
  getDeckungValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._deckung); }
  getWindValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._wind); }
  getSteilschussValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._steilschuss); }
  getSteilwurfValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._steilwurf); } //deprecated
  getReitenSchussValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._reitbewegungSchuss); }
  getReitenWurfValue(index: number) { return this.getValueLimited(index, FernkampfTabellenService._reitbewegungWurf); } //deprecated

}
