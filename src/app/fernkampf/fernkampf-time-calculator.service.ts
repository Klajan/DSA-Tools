import { Injectable } from '@angular/core';
import { WaffenTabellenFernService } from './waffen-tabellen-fern.service';
import { ValueStoreFernService } from './value-store-fern.service';
import { WaffentypFern, Scharfschütze } from '../types/char-enums';

@Injectable({
  providedIn: 'root'
})
export class FernkampfTimeCalculatorService {

  private _time: number = 0;
  public get time(): number {
    return this._time;
  }
  public set time(value: number) {
    this._time = value;
  }

  constructor(
    private waffenFern: WaffenTabellenFernService,
    private valueStore: ValueStoreFernService,
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
    this._time =
      this.calcReload() +
      this.calcAim() + 
      this.calcAnsage() +
      this.getSchnellschuss();
  }

  private onNotifyValuesChanged() {
    this.calculateTime();
  }
}
