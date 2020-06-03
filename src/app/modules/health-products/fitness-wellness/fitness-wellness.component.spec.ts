import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessWellnessComponent } from './fitness-wellness.component';

describe('FitnessWellnessComponent', () => {
  let component: FitnessWellnessComponent;
  let fixture: ComponentFixture<FitnessWellnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessWellnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
