import { TestBed } from '@angular/core/testing';

import { FernkampfValueStoreService } from './fernkampf-value-store.service';

describe('ValueStoreFernService', () => {
  let service: FernkampfValueStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FernkampfValueStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
