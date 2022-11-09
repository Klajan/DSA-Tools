import { TestBed } from '@angular/core/testing';

import { WaffenTabellenFernService } from './waffen-tabellen-fern.service';

describe('WaffenTabellenService', () => {
  let service: WaffenTabellenFernService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaffenTabellenFernService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
