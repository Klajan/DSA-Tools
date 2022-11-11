import { Injectable } from '@angular/core';
import { FernkampfWaffenTabellenService } from './fernkampf-waffen-tabellen.service';
import { FernkampfValueStoreService } from './fernkampf-value-store.service';
import { WaffentypFern, Scharfschütze } from '../../types/char-enums';

@Injectable({
  providedIn: 'root'
})
export class FernkampfTimeCalculatorService {

  private _totalTime: number = 0;
  public get totalTime(): number {
    return this._totalTime;
  }
  private set totalTime(value: number) {
    this._totalTime = value;
  }

  private _reloadTime: number = 0;
  public get reloadTime(): number {
    return this._reloadTime;
  }
  private set reloadTime(value: number) {
    this._reloadTime = value;
  }

  private _aimTime: number = 0;
  public get aimTime(): number {
    return this._aimTime;
  }
  private set aimTime(value: number) {
    this._aimTime = value;
  }

  constructor(
    private waffenFern: FernkampfWaffenTabellenService,
    private valueStore: FernkampfValueStoreService,
  ) {
    valueStore.notifyValuesChanged.subscribe(this.onNotifyValuesChanged.bind(this));
  }

  private calcReload(): number {
    let reload = this.waffenFern.getWaffenOfType(this.valueStore.waffentyp)[this.valueStore.waffeFern].laden;
    if (this.valueStore.schnellladen) {
      if (this.valueStore.waffentyp === WaffentypFern.Bogen) {
        reload = Math.max(reload - 1, 1);
      } else if (this.valueStore.waffentyp === WaffentypFern.Armbrust) {
        reload = Math.ceil(reload * 0.75);
      }
    }
    if (this.valueStore.hasReittier) {
      if (
        !this.valueStore.berittenerschuetze &&
        (this.valueStore.waffentyp === WaffentypFern.Bogen ||
        this.valueStore.waffentyp === WaffentypFern.Armbrust ||
        this.valueStore.waffentyp === WaffentypFern.Blasrohr ||
        this.valueStore.waffentyp === WaffentypFern.Schleuder)
        ) {
        reload = Math.ceil(reload * 1.5);
      }
    }
    return reload;
  }

  private calcAim(): number {
    let aim = Math.abs(this.valueStore.zielen);
    if (this.valueStore.scharfschuetzeEnum === Scharfschütze.None) aim *= 2;
    return aim;
  }

  private calcAnsage(): number {
    let ansage = Math.ceil(Math.abs(this.valueStore.ansage) / 2);
    if (ansage === 0) {
    }
    else if (this.valueStore.scharfschuetze) {
      ansage = Math.max(ansage - 2, 1);
    }
    else if (this.valueStore.meisterschuetze) {
      ansage = 1;
    }
    return ansage;
  }

  private getSchnellschuss(): number {
    return this.valueStore.schnellschuss ? 0 : 1;
  }

  public calculateTime() {
    this._reloadTime = this.calcReload();
    this._aimTime = 
      this.calcAim() + 
      this.calcAnsage() +
      this.getSchnellschuss();
    this._totalTime = this._reloadTime + this._aimTime;
  }

  private onNotifyValuesChanged() {
    this.calculateTime();
  }
}
