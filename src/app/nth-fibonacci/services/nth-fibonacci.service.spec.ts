import { TestBed } from '@angular/core/testing';

import { NthFibonacciService } from './nth-fibonacci.service';

describe('NthFibonacciService', () => {
  let service: NthFibonacciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NthFibonacciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
