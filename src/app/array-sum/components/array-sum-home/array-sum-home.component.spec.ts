import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySumHomeComponent } from './array-sum-home.component';

describe('ArraySumHomeComponent', () => {
  let component: ArraySumHomeComponent;
  let fixture: ComponentFixture<ArraySumHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArraySumHomeComponent]
    });
    fixture = TestBed.createComponent(ArraySumHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
