import { TestBed } from '@angular/core/testing';

import { NthPrimeService } from './nth-prime.service';

describe('NthPrimeService', () => {
  let service: NthPrimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NthPrimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
