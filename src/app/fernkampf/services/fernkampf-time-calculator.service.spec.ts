import { TestBed } from '@angular/core/testing';

import { FernkampfTimeCalculatorService } from './fernkampf-time-calculator.service';

describe('FernkampfTimeCalculatorService', () => {
  let service: FernkampfTimeCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FernkampfTimeCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
