import { Injectable } from '@angular/core';

import { BaseValueStore } from '../base-value-store';
import { LichtVorteil, Scharfschütze, WaffentypFern as WaffenTyp } from '../types/char-enums';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ValueStoreFernService extends BaseValueStore {

  private static readonly RESET = {
    distanz: 1,
    licht: 0,
    sicht: 0,
    bewegung: 2,
    ziel: 3,
    deckung: 0,
    wind: 0,
    steilschuss: 0,
    reitbewegung: 0,
    ansage: 0,
    zielen: 0,
    misc: 0,
    toggles: false,
  }

  private _waffentyp: WaffenTyp = WaffenTyp.Wurfwaffe;
  public get waffentyp(): WaffenTyp {
    return this._waffentyp;
  }
  public set waffentyp(value: WaffenTyp) {
    if (this._waffentyp === value) return;
    this._waffentyp = value;
    this.valuesChanged();
  }

  // Tabellen Werte
  private _distanz: number = 1;
  public get distanz(): number {
    return this._distanz;
  }
  public set distanz(value: number) {
    if (this._distanz === value) return;
    this._distanz = value;
    this.valuesChanged();
  }

  private _licht: number = 0;
  public get licht(): number {
    return this._licht;
  }
  public set licht(value: number) {
    if (this._licht === value) return;
    this._licht = value;
    this.valuesChanged();
  }

  private _sicht: number = 0;
  public get sicht(): number {
    return this._sicht;
  }
  public set sicht(value: number) {
    if (this._sicht === value) return;
    this._sicht = value;
    this.valuesChanged();
  }

  private _bewegung: number = 2;
  public get bewegung(): number {
    return this._bewegung;
  }
  public set bewegung(value: number) {
    if (this._bewegung === value) return;
    this._bewegung = value;
    this.valuesChanged();
  }

  private _ziel: number = 3;
  public get ziel(): number {
    return this._ziel;
  }
  public set ziel(value: number) {
    if (this._ziel === value) return;
    this._ziel = value;
    this.valuesChanged();
  }
  // Deckung
  private _hasDeckung: boolean = false;
  public get hasDeckung(): boolean {
    return this._hasDeckung;
  }
  public set hasDeckung(value: boolean) {
    if (this._hasDeckung === value) return;
    this._hasDeckung = value;
    this.valuesChanged();
  }

  private _deckung: number = 0;
  public get deckung(): number {
    return this._deckung;
  }
  public set deckung(value: number) {
    if (this._deckung === value) return;
    this._deckung = value;
    this.valuesChanged();
  }
  // Wind
  private _isWind: boolean = false;
  public get isWind(): boolean {
    return this._isWind;
  }
  public set isWind(value: boolean) {
    if (this._isWind === value) return;
    this._isWind = value;
    this.valuesChanged();
  }

  private _wind: number = 0;
  public get wind(): number {
    return this._wind;
  }
  public set wind(value: number) {
    if (this._wind === value) return;
    this._wind = value;
    this.valuesChanged();
  }
  // Steilschuss/Wurf
  private _isSteilschuss: boolean = false;
  public get isSteilschuss(): boolean {
    return this._isSteilschuss;
  }
  public set isSteilschuss(value: boolean) {
    if (this._isSteilschuss === value) return;
    this._isSteilschuss = value;
    this.valuesChanged();
  }

  private _steilschuss: number = 0;
  public get steilschuss(): number {
    return this._steilschuss;
  }
  public set steilschuss(value: number) {
    if (this._steilschuss === value) return;
    this._steilschuss = value;
    this.valuesChanged();
  }

  private _steilwurf: number = 0;
  public get steilwurf(): number {
    return this._steilwurf;
  }
  public set steilwurf(value: number) {
    if (this._steilwurf === value) return;
    this._steilwurf = value;
    this.valuesChanged();
  }

  // Reittier
  private _hasReittier: boolean = false;
  public get hasReittier(): boolean {
    return this._hasReittier;
  }
  public set hasReittier(value: boolean) {
    if (this._hasReittier === value) return;
    this._hasReittier = value;
    this.valuesChanged();
  }
  private _reitbewegung: number = 0;
  public get reitbewegung(): number {
    return this._reitbewegung;
  }
  public set reitbewegung(value: number) {
    if (this._reitbewegung === value) return;
    this._reitbewegung = value;
    this.valuesChanged();
  }
  private _reitOhneSattel: boolean = false;
  public get reitOhneSattel(): boolean {
    return this._reitOhneSattel;
  }
  public set reitOhneSattel(value: boolean) {
    if (this._reitOhneSattel === value) return;
    this._reitOhneSattel = value;
    this.valuesChanged();
  }

  // Ansagen
  private readonly _MAX_ANSAGE = 32;
  private _ansage: number = 0; //max TaW (limit 32?)
  public get ansage(): number {
    return this._ansage;
  }
  public set ansage(value: number) {
    if (this._ansage === value) return;
    this._ansage = Math.max(Math.min(value, this._MAX_ANSAGE), 0);
    this.valuesChanged();
  }

  private readonly _MAX_ZIELEN = -4;
  private _zielen: number = 0; //max 4 punkte
  public get zielen(): number {
    return this._zielen;
  }
  public set zielen(value: number) {
    if (this._zielen === value) return;
    this._zielen = Math.min(Math.max(value, this._MAX_ZIELEN), 0);
    this.valuesChanged();
  }
  private _misc: number = 0;
  public get misc(): number {
    return this._misc;
  }
  public set misc(value: number) {
    if (this._misc === value) return;
    this._misc = value;
    this.valuesChanged();
  }
  private _schnellschuss: boolean = false;
  public get schnellschuss(): boolean {
    return this._schnellschuss;
  }
  public set schnellschuss(value: boolean) {
    if (this._schnellschuss === value) return;
    this._schnellschuss = value;
    this.valuesChanged();
  }

  //<-----This should be saved and persistant----->
  // Vor- / Nachteile
  private _lichtVorteil: LichtVorteil = LichtVorteil.None;
  public get lichtVorteil(): LichtVorteil {
    return this._lichtVorteil;
  }
  public set lichtVorteil(value: LichtVorteil) {
    if (this._lichtVorteil === value) return;
    this._lichtVorteil = value;
    this.valuesChanged();
  }

  get nachtsicht() {
    return this._lichtVorteil === LichtVorteil.Nachtsicht;
  }
  set nachtsicht(value: boolean) {
    if (this.nachtsicht === value) return;
    this._lichtVorteil = value ? LichtVorteil.Nachtsicht : LichtVorteil.None;
    this.valuesChanged();
  }

  get daemmersicht() {
    return this._lichtVorteil === LichtVorteil.Dämmerungssicht;
  }
  set daemmersicht(value: boolean) {
    if (this.daemmersicht === value) return;
    this._lichtVorteil = value ? LichtVorteil.Dämmerungssicht : LichtVorteil.None;
    this.valuesChanged();
  }

  public get nachtblind(): boolean {
    return this._lichtVorteil === LichtVorteil.Nachtblind;
  }
  public set nachtblind(value: boolean) {
    if (this.nachtblind === value) return;
    this._lichtVorteil = value ? LichtVorteil.Nachtblind : LichtVorteil.None;
    this.valuesChanged();
  }

  private _entfernungsinn: boolean = false;
  public get entfernungsinn(): boolean {
    return this._entfernungsinn;
  }
  public set entfernungsinn(value: boolean) {
    if (this._entfernungsinn === value) return;
    this._entfernungsinn = value;
    this.valuesChanged();
  }

  private _einaeugig: boolean = false;
  public get einaeugig(): boolean {
    return this._einaeugig;
  }
  public set einaeugig(value: boolean) {
    if (this._einaeugig === value) return;
    this._einaeugig = value;
    this.valuesChanged();
  }

  private _farbenblind: boolean = false;
  public get farbenblind(): boolean {
    return this._farbenblind;
  }
  public set farbenblind(value: boolean) {
    if (this._farbenblind === value) return;
    this._farbenblind = value;
    this.valuesChanged();
  }

  private _kurzsichtig: boolean = false;
  public get kurzsichtig(): boolean {
    return this._kurzsichtig;
  }
  public set kurzsichtig(value: boolean) {
    if (this._kurzsichtig === value) return;
    this._kurzsichtig = value;
    this.valuesChanged();
  }

  // Sonderfertigkeiten
  private _scharfschütze: Scharfschütze = Scharfschütze.None;
  public get scharfschuetzeEnum(): Scharfschütze {
    return this._scharfschütze;
  }
  public set scharfschuetzeEnum(value: Scharfschütze) {
    this._scharfschütze = value;
  }

  public get scharfschuetze(): boolean {
    return this._scharfschütze === Scharfschütze.Scharfschütze;
  }
  public set scharfschuetze(value: boolean) {
    if (this.scharfschuetze === value) return;
    this._scharfschütze = value ? Scharfschütze.Scharfschütze : Scharfschütze.None;
    this.valuesChanged();
  }

  public get meisterschuetze(): boolean {
    return this._scharfschütze === Scharfschütze.Meisterschütze;
  }
  public set meisterschuetze(value: boolean) {
    if (this.meisterschuetze === value) return;
    this._scharfschütze = value ? Scharfschütze.Meisterschütze : Scharfschütze.None;
    this.valuesChanged();
  }

  private _schnellladen: boolean = false;
  public get schnellladen(): boolean {
    return this._schnellladen;
  }
  public set schnellladen(value: boolean) {
    if (this._schnellladen === value) return;
    this._schnellladen = value;
    this.valuesChanged();
  }

  private _schnellziehen: boolean = false;
  public get schnellziehen(): boolean {
    return this._schnellziehen;
  }
  public set schnellziehen(value: boolean) {
    if (this._schnellziehen === value) return;
    this._schnellziehen = value;
    this.valuesChanged();
  }

  private _eisenhagel: boolean = false;
  public get eisenhagel(): boolean {
    return this._eisenhagel;
  }
  public set eisenhagel(value: boolean) {
    if (this.eisenhagel === value) return;
    this._eisenhagel = value;
    this.valuesChanged();
  }

  private _berittenerschuetze: boolean = false;
  public get berittenerschuetze(): boolean {
    return this._berittenerschuetze;
  }
  public set berittenerschuetze(value: boolean) {
    if (this._berittenerschuetze === value) return;
    this._berittenerschuetze = value;
    this.valuesChanged();
  }
  //<-----This should be saved and persistant-----/>

  // Sontiges
  private _zweiteAT: boolean = false;
  public get zweiteAT(): boolean {
    return this._zweiteAT;
  }
  public set zweiteAT(value: boolean) {
    if (this._zweiteAT === value) return;
    this._zweiteAT = value;
    this.valuesChanged();
  }

  constructor(
    private localStorage: LocalStorageService,
    ) {
    super();
    
    localStorage.register("value-store-v0", this.getForStore.bind(this))
      .then((value) => {
        this.setFromLocal(value as ReturnType<ValueStoreFernService['getForStore']>);
      });
  }

  private getForStore() {
    return {
      waffentyp: this.waffentyp,
      lichtVorteil: this.lichtVorteil,
      entfernungsinn: this.entfernungsinn,
      einaeugig: this.einaeugig,
      farbenblind: this.farbenblind,
      kurzsichtig: this.kurzsichtig,
      scharfschuetzeEnum: this.scharfschuetzeEnum,
      schnellladen: this.schnellladen,
      schnellziehen: this.schnellziehen,
      eisenhagel: this.eisenhagel,
      berittenerschuetze: this.berittenerschuetze,
    }
  }

  private setFromLocal(object: ReturnType<ValueStoreFernService['getForStore']> | null) {
    if (object === null) return;
    this.waffentyp = object.waffentyp;
    this.lichtVorteil = object.lichtVorteil;
    this.entfernungsinn = object.entfernungsinn;
    this.einaeugig = object.entfernungsinn;
    this.farbenblind = object.farbenblind;
    this.kurzsichtig = object.kurzsichtig;
    this.scharfschuetzeEnum = object.scharfschuetzeEnum;
    this.schnellladen = object.schnellladen;
    this.schnellziehen = object.schnellziehen;
    this.eisenhagel = object.eisenhagel;
    this.berittenerschuetze = object.berittenerschuetze;
  }

  public resetToDefaults() {
    console.debug("RESETTING");
    this._distanz = ValueStoreFernService.RESET.distanz;
    this._licht = ValueStoreFernService.RESET.licht;
    this._sicht = ValueStoreFernService.RESET.sicht;
    this._bewegung = ValueStoreFernService.RESET.bewegung;
    this._ziel = ValueStoreFernService.RESET.ziel;
    this._hasDeckung = ValueStoreFernService.RESET.toggles;
    this._deckung = ValueStoreFernService.RESET.deckung;
    this._isWind = ValueStoreFernService.RESET.toggles;
    this._wind = ValueStoreFernService.RESET.wind;
    this._isSteilschuss = ValueStoreFernService.RESET.toggles;
    this._steilschuss = ValueStoreFernService.RESET.steilschuss;
    this._hasReittier = ValueStoreFernService.RESET.toggles;
    this._reitOhneSattel = ValueStoreFernService.RESET.toggles;
    this._reitbewegung = ValueStoreFernService.RESET.reitbewegung;
    this._schnellschuss = ValueStoreFernService.RESET.toggles;
    this._ansage = ValueStoreFernService.RESET.ansage;
    this._zielen = ValueStoreFernService.RESET.zielen;
    this._misc = ValueStoreFernService.RESET.misc;
    this._zweiteAT = ValueStoreFernService.RESET.toggles;
    this.valuesChanged();
  }

}
