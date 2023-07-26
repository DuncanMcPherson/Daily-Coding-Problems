import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NthFibonacciHomeComponent } from './nth-fibonacci-home.component';

describe('NthFibonacciHomeComponent', () => {
  let component: NthFibonacciHomeComponent;
  let fixture: ComponentFixture<NthFibonacciHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NthFibonacciHomeComponent]
    });
    fixture = TestBed.createComponent(NthFibonacciHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
