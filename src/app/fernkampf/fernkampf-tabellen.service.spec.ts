import { TestBed } from '@angular/core/testing';

import { FernkampfTabellenService } from './fernkampf-tabellen.service';

describe('FernkampfTabellenService', () => {
  let service: FernkampfTabellenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FernkampfTabellenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
