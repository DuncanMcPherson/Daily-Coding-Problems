import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySortHomeComponent } from './array-sort-home.component';

describe('ArraySortHomeComponent', () => {
  let component: ArraySortHomeComponent;
  let fixture: ComponentFixture<ArraySortHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArraySortHomeComponent]
    });
    fixture = TestBed.createComponent(ArraySortHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
