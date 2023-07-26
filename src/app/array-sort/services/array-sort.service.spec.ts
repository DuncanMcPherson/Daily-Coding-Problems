import { TestBed } from '@angular/core/testing';

import { ArraySortService } from './array-sort.service';

describe('ArraySortService', () => {
  let service: ArraySortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArraySortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
