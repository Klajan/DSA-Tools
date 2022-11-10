import { TestBed } from '@angular/core/testing';

import { FernkampfWaffenTabellenService } from './fernkampf-waffen-tabellen.service';

describe('WaffenTabellenService', () => {
  let service: FernkampfWaffenTabellenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FernkampfWaffenTabellenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
