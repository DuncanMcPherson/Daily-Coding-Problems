import { TestBed } from '@angular/core/testing';

import { ArraySumService } from './array-sum.service';

describe('ArraySumService', () => {
  let service: ArraySumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArraySumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
