import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemNavigationComponent } from './problem-navigation.component';

describe('ProblemNavigationComponent', () => {
  let component: ProblemNavigationComponent;
  let fixture: ComponentFixture<ProblemNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemNavigationComponent]
    });
    fixture = TestBed.createComponent(ProblemNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
