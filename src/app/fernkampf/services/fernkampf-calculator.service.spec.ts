import { TestBed } from '@angular/core/testing';

import { FernkampfCalculatorService } from './fernkampf-calculator.service';

describe('FernkampfCalculatorService', () => {
  let service: FernkampfCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FernkampfCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
