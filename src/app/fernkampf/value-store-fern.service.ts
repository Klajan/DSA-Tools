import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { WaffenTyp, Deckung } from './types'

@Injectable({
  providedIn: 'root'
})
export class ValueStoreFernService {

  waffentyp: WaffenTyp = WaffenTyp.Wurfwaffe;

  public notifyValuesChanged = new Subject<void>();
  get notifyValuesChanged_() { return this.notifyValuesChanged.asObservable(); }

  private static readonly _defaults = {
    distanz: 1,
    licht: 0,
    sicht: 0,
    bewegung: 2,
    ziel: 3,
    deckung: 0,
    wind: 0,
    steilschuss: 0,
    steilwurf: 0,
    reittier: false,
    ohneSattel: false,
    reitbewegung: 0,
  }

  // Tabellen Werte
  private _distanz: number = 1;
  public get distanz(): number {
    return this._distanz;
  }
  public set distanz(value: number) {
    if (this._distanz === value) return;
    this._distanz = value;
    this.notifyValuesChanged.next();
  }

  private _licht: number = 0;
  public get licht(): number {
    return this._licht;
  }
  public set licht(value: number) {
    if (this._licht === value) return;
    this._licht = value;
    this.notifyValuesChanged.next();
  }

  private _sicht: number = 0;
  public get sicht(): number {
    return this._sicht;
  }
  public set sicht(value: number) {
    if (this._sicht === value) return;
    this._sicht = value;
    this.notifyValuesChanged.next();
  }

  private _bewegung: number = 2;
  public get bewegung(): number {
    return this._bewegung;
  }
  public set bewegung(value: number) {
    if (this._bewegung === value) return;
    this._bewegung = value;
    this.notifyValuesChanged.next();
  }

  private _ziel: number = 3;
  zielChange = new Subject<number>();
  public get ziel(): number {
    return this._ziel;
  }
  public set ziel(value: number) {
    if (this._ziel === value) return;
    this._ziel = value;
    this.notifyValuesChanged.next();
  }
  // Deckung
  private _hasDeckung: boolean = false;
  public get hasDeckung(): boolean {
    return this._hasDeckung;
  }
  public set hasDeckung(value: boolean) {
    if (this._hasDeckung === value) return;
    this._hasDeckung = value;
    this.notifyValuesChanged.next();
  }

  private _deckung: number = 0;
  public get deckung(): number {
    return this._deckung;
  }
  public set deckung(value: number) {
    if (this._deckung === value) return;
    this._deckung = value;
    this.notifyValuesChanged.next();
  }
  // Wind
  private _isWind: boolean = false;
  public get isWind(): boolean {
    return this._isWind;
  }
  public set isWind(value: boolean) {
    if (this._isWind === value) return;
    this._isWind = value;
    this.notifyValuesChanged.next();
  }

  private _wind: number = 0;
  public get wind(): number {
    return this._wind;
  }
  public set wind(value: number) {
    if (this._wind === value) return;
    this._wind = value;
    this.notifyValuesChanged.next();
  }
  // Steilschuss/Wurf
  private _isSteilschuss: boolean = false;
  public get isSteilschuss(): boolean {
    return this._isSteilschuss;
  }
  public set isSteilschuss(value: boolean) {
    if (this._isSteilschuss === value) return;
    this._isSteilschuss = value;
    this.notifyValuesChanged.next();
  }

  private _steilschuss: number = 0;
  public get steilschuss(): number {
    return this._steilschuss;
  }
  public set steilschuss(value: number) {
    if (this._steilschuss === value) return;
    this._steilschuss = value;
    this.notifyValuesChanged.next();
  }

  private _steilwurf: number = 0;
  public get steilwurf(): number {
    return this._steilwurf;
  }
  public set steilwurf(value: number) {
    if (this._steilwurf === value) return;
    this._steilwurf = value;
    this.notifyValuesChanged.next();
  }

  // Reittier
  private _hasReittier: boolean = false;
  public get hasReittier(): boolean {
    return this._hasReittier;
  }
  public set hasReittier(value: boolean) {
    if (this._hasReittier === value) return;
    this._hasReittier = value;
    this.notifyValuesChanged.next();
  }
  private _reitbewegung: number = 0;
  public get reitbewegung(): number {
    return this._reitbewegung;
  }
  public set reitbewegung(value: number) {
    if (this._reitbewegung === value) return;
    this._reitbewegung = value;
    this.notifyValuesChanged.next();
  }
  private _reitOhneSattel: boolean = false;
  public get reitOhneSattel(): boolean {
    return this._reitOhneSattel;
  }
  public set reitOhneSattel(value: boolean) {
    if (this._reitOhneSattel === value) return;
    this._reitOhneSattel = value;
    this.notifyValuesChanged.next();
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
    this.notifyValuesChanged.next();
  }

  private readonly _MAX_ZIELEN = -4;
  private _zielen: number = 0; //max 4 punkte
  public get zielen(): number {
    return this._zielen;
  }
  public set zielen(value: number) {
    if (this._zielen === value) return;
    this._zielen = Math.min(Math.max(value, this._MAX_ZIELEN), 0);
    this.notifyValuesChanged.next();
  }
  private _misc: number = 0;
  public get misc(): number {
    return this._misc;
  }
  public set misc(value: number) {
    if (this._misc === value) return;
    this._misc = value;
    this.notifyValuesChanged.next();
  }
  private _schnellschuss: boolean = false;
  public get schnellschuss(): boolean {
    return this._schnellschuss;
  }
  public set schnellschuss(value: boolean) {
    if (this._schnellschuss === value) return;
    this._schnellschuss = value;
    this.notifyValuesChanged.next();
  }

  //<-----This should be saved and persistant----->
  // Vor- / Nachteile
  private _nachtsicht: boolean = false;
  get nachtsicht() {
    return this._nachtsicht;
  }
  set nachtsicht(value: boolean) {
    if (this._nachtsicht === value) return;
    this._nachtsicht = value;
    this.notifyValuesChanged.next();
    if (value === true) this.daemmersicht = true;
  }

  private _daemmersicht: boolean = false;
  get daemmersicht() {
    return this._daemmersicht;
  }
  set daemmersicht(value: boolean) {
    if (this._daemmersicht === value) return;
    this._daemmersicht = value;
    this.notifyValuesChanged.next();
    if (value === false) this.nachtsicht = false;
    else this.nachtblind = false;
  }

  private _nachtblind: boolean = false;
  public get nachtblind(): boolean {
    return this._nachtblind;
  }
  public set nachtblind(value: boolean) {
    if (this._nachtblind === value) return;
    this._nachtblind = value;
    this.notifyValuesChanged.next();
    if (value == true) this.daemmersicht = false;
  }

  private _entfernungsinn: boolean = false;
  public get entfernungsinn(): boolean {
    return this._entfernungsinn;
  }
  public set entfernungsinn(value: boolean) {
    if (this._entfernungsinn === value) return;
    this._entfernungsinn = value;
    this.notifyValuesChanged.next();
  }

  private _einaeugig: boolean = false;
  public get einaeugig(): boolean {
    return this._einaeugig;
  }
  public set einaeugig(value: boolean) {
    if (this._einaeugig === value) return;
    this._einaeugig = value;
    this.notifyValuesChanged.next();
  }

  private _farbenblind: boolean = false;
  public get farbenblind(): boolean {
    return this._farbenblind;
  }
  public set farbenblind(value: boolean) {
    if (this._farbenblind === value) return;
    this._farbenblind = value;
    this.notifyValuesChanged.next();
  }

  private _kurzsichtig: boolean = false;
  public get kurzsichtig(): boolean {
    return this._kurzsichtig;
  }
  public set kurzsichtig(value: boolean) {
    if (this._kurzsichtig === value) return;
    this._kurzsichtig = value;
    this.notifyValuesChanged.next();
  }

  // Sonderfertigkeiten
  private _scharfschuetze: boolean = false;
  public get scharfschuetze(): boolean {
    return this._scharfschuetze;
  }
  public set scharfschuetze(value: boolean) {
    if (this._scharfschuetze === value) return;
    this._scharfschuetze = value;
    this.notifyValuesChanged.next();
  }

  private _meisterschuetze: boolean = false;
  public get meisterschuetze(): boolean {
    return this._meisterschuetze;
  }
  public set meisterschuetze(value: boolean) {
    if (this._meisterschuetze === value) return;
    this._meisterschuetze = value;
    this.notifyValuesChanged.next();
  }

  private _schnellladen: boolean = false;
  public get schnellladen(): boolean {
    return this._schnellladen;
  }
  public set schnellladen(value: boolean) {
    if (this._schnellladen === value) return;
    this._schnellladen = value;
    this.notifyValuesChanged.next();
  }

  private _schnellziehen: boolean = false;
  public get schnellziehen(): boolean {
    return this._schnellziehen;
  }
  public set schnellziehen(value: boolean) {
    if (this._schnellziehen === value) return;
    this._schnellziehen = value;
    this.notifyValuesChanged.next();
  }

  private _eisenhagel: boolean = false;
  public get eisenhagel(): boolean {
    return this._eisenhagel;
  }
  public set eisenhagel(value: boolean) {
    if (this.eisenhagel === value) return;
    this._eisenhagel = value;
    this.notifyValuesChanged.next();
  }

  private _berittenerschuetze: boolean = false;
  public get berittenerschuetze(): boolean {
    return this._berittenerschuetze;
  }
  public set berittenerschuetze(value: boolean) {
    if (this._berittenerschuetze === value) return;
    this._berittenerschuetze = value;
    this.notifyValuesChanged.next();
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
    this.notifyValuesChanged.next();
  }

  constructor() { }

}
