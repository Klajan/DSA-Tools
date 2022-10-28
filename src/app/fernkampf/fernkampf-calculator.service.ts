import { Injectable } from '@angular/core';
import { FernkampfTabellenService } from './fernkampf-tabellen.service';
import { WaffenTyp } from './types';
import { ValueStoreFernService } from './value-store-fern.service';

@Injectable({
  providedIn: 'root'
})
export class FernkampfCalculatorService {

  private _difficulty: number = 0;
  get difficulty() { return this._difficulty; }

  constructor(
    private lookupTables: FernkampfTabellenService,
    private valueStore: ValueStoreFernService
  ) {
    valueStore.notifyValuesChanged.subscribe(this.onNotifyValuesChanged);
  }

  private calcLicht(): number {
    let difficulty = this.lookupTables.getLichtValue(this.valueStore.licht);
    let cap = 99;
    if (this.valueStore.daemmersicht) {
      difficulty = Math.ceil(difficulty / 2.0);     // divide by 2 for Dämerungsicht
      if (this.valueStore.nachtsicht) { cap = 5; } // cap at 5 if char has Nachtsicht
    } else if (this.valueStore.nachtblind) {
      difficulty = difficulty * 2;
      cap = 8;
    }
    return Math.min(difficulty, cap);
  }

  private calcDeckung(): number {
    return this.valueStore.hasDeckung ?
      this.lookupTables.getDeckungValue(this.valueStore.deckung) :
      0;
  }

  private calcWind(): number {
    return this.valueStore.isWind ?
      this.lookupTables.getWindValue(this.valueStore.wind) :
      0;
  }

  private calcSteilschuss(): number {
    if (!this.valueStore.isSteilschuss) return 0;
    if (this.valueStore.waffentyp === WaffenTyp.Wurfwaffe) {
      return this.lookupTables.getSteilwurfValue(this.valueStore.steilwurf);
    } else {
      return this.lookupTables.getSteilschussValue(this.valueStore.steilschuss);
    }
  }

  private calcReitenDifficulty(): number {
    if (!this.valueStore.hasReittier) return 0;
    let multi: number = this.valueStore.berittenerschuetze ? 2.0 : 1.0;
    let difficulty: number = this.lookupTables.getReitenSchussValue(this.valueStore.reitbewegung);
    if (this.valueStore.reitOhneSattel) { difficulty += 4 }
    if (this.valueStore.waffentyp === WaffenTyp.Wurfwaffe) { difficulty = Math.ceil(difficulty / 2); }
    // Armbrust & Torsionswaffen haben keinen Aufschlag für Schüsse von stationären Reittieren
    else if (this.valueStore.waffentyp === WaffenTyp.Armbrust &&
      difficulty === this.lookupTables.getReitenSchussValue(0)) { difficulty -= this.lookupTables.getReitenSchussValue(0); }
    return Math.ceil(difficulty / multi);
  }

  private getEntfernungsinn(): number {
    return this.valueStore.entfernungsinn ? -2 : 0;
  }

  private getZweiteAT(): number {
    if (!this.valueStore.zweiteAT) return 0;
    if (this.valueStore.waffentyp === WaffenTyp.Wurfwaffe) return 2;
    return 4;
  }

  private getSchnellschuss(): number {
    if (!this.valueStore.schnellschuss) return 0;
    if (this.valueStore.meisterschuetze) return 0;
    if (this.valueStore.scharfschuetze) return 1;
    return 2;
  }

  calculateDifficulty() {
    this._difficulty =
      this.lookupTables.getZielValue(this.valueStore.ziel) +
      this.lookupTables.getDistanzValue(this.valueStore.distanz) +
      this.lookupTables.getBewegungValue(this.valueStore.bewegung) +
      this.lookupTables.getSichtValue(this.valueStore.sicht) +
      this.calcLicht() +
      this.calcDeckung() +
      this.calcWind() +
      this.calcSteilschuss() +
      this.calcReitenDifficulty() +
      this.getEntfernungsinn() +
      this.getSchnellschuss() +
      Math.max(0, this.valueStore.ansage) +
      Math.min(0, Math.max(-4, this.valueStore.zielen)) +
      this.getZweiteAT();
  }

  protected onNotifyValuesChanged = (() => {
    this.calculateDifficulty();
    console.log(this._difficulty);
  }).bind(this);

}
