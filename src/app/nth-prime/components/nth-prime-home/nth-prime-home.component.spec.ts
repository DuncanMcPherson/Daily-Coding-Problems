import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NthPrimeHomeComponent } from './nth-prime-home.component';

describe('NthPrimeHomeComponent', () => {
  let component: NthPrimeHomeComponent;
  let fixture: ComponentFixture<NthPrimeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NthPrimeHomeComponent]
    });
    fixture = TestBed.createComponent(NthPrimeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
