import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FernkampfTabellenService {

  constructor() { }

  private entfernung = [
    { name: 'sehr nah', value: -2 },
    { name: 'nah', value: 0 },
    { name: 'mittel', value: +4 },
    { name: 'weit', value: +8 },
    { name: 'extrem weit', value: +12 },
  ];
  private licht = [
    { name: 'Normal', value: 0 },
    { name: 'Dämmerung', value: +2 },
    { name: 'Mondlicht', value: +4 },
    { name: 'Sternenlicht', value: +6 },
    { name: 'Finsternis', value: +8 },
  ];
  private sicht = [
    { name: 'Klar', value: 0 },
    { name: 'Dunst', value: +2 },
    { name: 'Nebel', value: +4 },
    { name: 'Unsichtbares Ziel', value: +8 },
  ];
  private bewegung = [
    { name: 'unbeweglich', value: -4 },
    { name: 'stillstehend', value: -2 },
    { name: 'leichte Bewegung', value: 0 },
    { name: 'schnelle Bewegung', value: +2 },
    { name: 'sehr schnelle Bewegung', value: +4 },
  ];
  private größe = [
    { name: 'winzig', value: +8 },
    { name: 'sehr klein', value: +6 },
    { name: 'klein', value: +4 },
    { name: 'mittel', value: +2 },
    { name: 'groß', value: 0 },
    { name: 'sehr groß', value: -2 },
  ];

  getEntfernung() { return this.entfernung; }
  getLicht() { return this.licht; }
  getSicht() { return this.sicht; }
  getBewegung() { return this.bewegung; }
  getGröße() { return this.größe; }

}
