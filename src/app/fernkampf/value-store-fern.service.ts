import { Injectable } from '@angular/core';

import { BaseValueStore } from '../base-value-store';
import { LichtVorteil, Scharfschütze, WaffentypFern as Waffentyp } from '../types/char-enums';
import { CharacterStoreService } from '../character-store.service';
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

  private _zweiteAT: boolean = false;
  public get zweiteAT(): boolean {
    return this._zweiteAT;
  }
  public set zweiteAT(value: boolean) {
    if (this._zweiteAT === value) return;
    this._zweiteAT = value;
    this.valuesChanged();
  }

  //<-----Supplied by CharacterStoreService----->
  // Vor- / Nachteile
  public get waffentyp(): Waffentyp {
    return this.characterStore.waffentypFern;
  }
  public set waffentyp(value: Waffentyp) {
    this.characterStore.waffentypFern = value;
  }

  public get lichtVorteil(): LichtVorteil {
    return this.characterStore.lichtVorteil;
  }
  public set lichtVorteil(value: LichtVorteil) {
    this.characterStore.lichtVorteil = value;
  }

  get nachtsicht() {
    return this.characterStore.nachtsicht;
  }
  set nachtsicht(value: boolean) {
    this.characterStore.nachtsicht = value;
  }

  get daemmersicht() {
    return this.characterStore.daemmersicht;
  }
  set daemmersicht(value: boolean) {
    this.characterStore.daemmersicht = value;
  }

  public get nachtblind(): boolean {
    return this.characterStore.nachtblind;
  }
  public set nachtblind(value: boolean) {
    this.characterStore.nachtblind = value;
  }

  public get entfernungsinn(): boolean {
    return this.characterStore.entfernungsinn;
  }
  public set entfernungsinn(value: boolean) {
    this.characterStore.entfernungsinn = value;
  }

  public get einaeugig(): boolean {
    return this.characterStore.einaeugig;
  }
  public set einaeugig(value: boolean) {
    this.characterStore.einaeugig = value;
  }

  public get farbenblind(): boolean {
    return this.characterStore.farbenblind;
  }
  public set farbenblind(value: boolean) {
    this.characterStore.farbenblind = value;
  }

  public get kurzsichtig(): boolean {
    return this.characterStore.kurzsichtig;
  }
  public set kurzsichtig(value: boolean) {
    this.characterStore.kurzsichtig = value;
  }

  // Sonderfertigkeiten
  public get scharfschuetzeEnum(): Scharfschütze {
    return this.characterStore.scharfschuetzeEnum;
  }
  public set scharfschuetzeEnum(value: Scharfschütze) {
    this.characterStore.scharfschuetzeEnum = value;
  }

  public get scharfschuetze(): boolean {
    return this.characterStore.scharfschuetze;
  }
  public set scharfschuetze(value: boolean) {
    this.characterStore.scharfschuetze = value;
  }

  public get meisterschuetze(): boolean {
    return this.characterStore.meisterschuetze;
  }
  public set meisterschuetze(value: boolean) {
    this.characterStore.meisterschuetze = value;
  }

  public get schnellladen(): boolean {
    return this.characterStore.schnellladen;
  }
  public set schnellladen(value: boolean) {
    this.characterStore.schnellladen = value;
  }

  public get schnellziehen(): boolean {
    return this.characterStore.schnellziehen;
  }
  public set schnellziehen(value: boolean) {
    this.characterStore.schnellziehen = value;
  }

  public get eisenhagel(): boolean {
    return this.characterStore.eisenhagel;
  }
  public set eisenhagel(value: boolean) {
    this.characterStore.eisenhagel = value;
  }

  public get berittenerschuetze(): boolean {
    return this.characterStore.berittenerschuetze;
  }
  public set berittenerschuetze(value: boolean) {
    this.characterStore.berittenerschuetze = value;
  }

  public get waffeFern(): number {
    return this.characterStore.waffeFern;
  }
  public set waffeFern(value: number) {
    this.characterStore.waffeFern = value;
  }
  //<-----Supplied by CharacterStoreService-----/>

  constructor(
    private localStorage: LocalStorageService,
    private characterStore: CharacterStoreService
    ) {
    super();
    characterStore.notifyValuesChanged.subscribe(() => this._notifyValuesChanged.next());
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
