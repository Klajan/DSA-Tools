import { Injectable } from '@angular/core';

import { WaffenTyp, Deckung } from './types'

@Injectable({
  providedIn: 'root'
})
export class ValueStoreFernService {

  private _waffentyp: WaffenTyp = WaffenTyp.Wurfwaffe;

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
  distanz: number = 1;
  licht: number = 0;
  sicht: number = 0;
  bewegung: number = 2;
  ziel: number = 3;
  deckung: number = 0;
  wind: number = 0;
  steilschuss: number = 0;
  steilwurf: number = 0;

  // Reittier
  reittier: boolean = false;
  reitbewegung: number = 0;
  ohneSattel: boolean = false;
  
// Ansagen
  ansage: number = 0; //max TaW (limit 32?)
  zielen: number = 0; //max 4 punkte
  misc: number = 0;
  schnellschuss: boolean = false;

//<-----This should be saved and persistant----->
// Vor- / Nachteile
  nachtsicht: boolean = false;
  daemmersicht: boolean = false;
  entfernungsinn: boolean = false;
  einaeugig: boolean = false;
  farbenblind: boolean = false;
  kurzsichtig: boolean = false;
  nachtblind: boolean = false;

// Sonderfertigkeiten
  scharfschuetze: boolean = false;
  meisterschuetze: boolean = false;
  schnellladen: boolean = false;
  schnellziehen: boolean = false;
  eisenhagel: boolean = false;
  berittenerschuetze: boolean = false;
//<-----This should be saved and persistant-----/>

// Sontiges
  zweiteAT: boolean = false;
  
  constructor() { }
}
