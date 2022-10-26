import { TestBed } from '@angular/core/testing';

import { ValueStoreFernService } from './value-store-fern.service';

describe('ValueStoreFernService', () => {
  let service: ValueStoreFernService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueStoreFernService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
