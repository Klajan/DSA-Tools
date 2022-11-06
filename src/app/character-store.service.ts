import { Injectable } from '@angular/core';
import { BaseValueStore } from './base-value-store';

import { LichtVorteil, WaffentypFern, Scharfschütze } from './types/char-enums';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterStoreService extends BaseValueStore {

  private _waffentypFern: WaffentypFern = WaffentypFern.Wurfwaffe;
  public get waffentypFern(): WaffentypFern {
    return this._waffentypFern;
  }
  public set waffentypFern(value: WaffentypFern) {
    if (this._waffentypFern === value) return;
    this._waffentypFern = value;
    this.valuesChanged();
  }

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
    this.lichtVorteil = value ? LichtVorteil.Nachtsicht : LichtVorteil.None;
  }

  get daemmersicht() {
    return this._lichtVorteil === LichtVorteil.Dämmerungssicht;
  }
  set daemmersicht(value: boolean) {
    this.lichtVorteil = value ? LichtVorteil.Dämmerungssicht : LichtVorteil.None;
  }

  public get nachtblind(): boolean {
    return this._lichtVorteil === LichtVorteil.Nachtblind;
  }
  public set nachtblind(value: boolean) {
    this.lichtVorteil = value ? LichtVorteil.Nachtblind : LichtVorteil.None;
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
    if (this._scharfschütze === value) return;
    this._scharfschütze = value;
    this.valuesChanged();
  }

  public get scharfschuetze(): boolean {
    return this._scharfschütze === Scharfschütze.Scharfschütze;
  }
  public set scharfschuetze(value: boolean) {
    this.scharfschuetzeEnum = value ? Scharfschütze.Scharfschütze : Scharfschütze.None;
  }

  public get meisterschuetze(): boolean {
    return this._scharfschütze === Scharfschütze.Meisterschütze;
  }
  public set meisterschuetze(value: boolean) {
    this.scharfschuetzeEnum = value ? Scharfschütze.Meisterschütze : Scharfschütze.None;
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

  constructor(persistentStore: LocalStorageService) {
    super();
    const KEY = "CHARACTER_V0"
    persistentStore.register(KEY, this.getPersistenceObject.bind(this))
      .then((value) => {
        this.setFromPersistence(value as ReturnType<CharacterStoreService['getPersistenceObject']>);
      });
    // console.debug(this.getPersistenceObject());
  }

  private getPersistenceObject() {
    if (!this.hasChanged) return null;
    this.hasChanged = false;
    return {
      waffentypFern: this.waffentypFern,
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

  private setFromPersistence(object: ReturnType<CharacterStoreService['getPersistenceObject']> | null) {
    if (object === null) return;
    this._waffentypFern = object.waffentypFern;
    this._lichtVorteil = object.lichtVorteil;
    this._entfernungsinn = object.entfernungsinn;
    this._einaeugig = object.entfernungsinn;
    this._farbenblind = object.farbenblind;
    this._kurzsichtig = object.kurzsichtig;
    this._scharfschütze = object.scharfschuetzeEnum;
    this._schnellladen = object.schnellladen;
    this._schnellziehen = object.schnellziehen;
    this._eisenhagel = object.eisenhagel;
    this._berittenerschuetze = object.berittenerschuetze;
    this.valuesChanged();
    this.hasChanged = false;
  }

  public resetToDefaults() {
    this._waffentypFern = WaffentypFern.Wurfwaffe;
    this._lichtVorteil = LichtVorteil.None;
    this._entfernungsinn = false;
    this._einaeugig = false;
    this._farbenblind = false;
    this._kurzsichtig = false;
    this._scharfschütze = Scharfschütze.None;
    this._schnellladen = false;
    this._schnellziehen = false;
    this._eisenhagel = false;
    this._berittenerschuetze = false;
    this.valuesChanged();
  }
}
