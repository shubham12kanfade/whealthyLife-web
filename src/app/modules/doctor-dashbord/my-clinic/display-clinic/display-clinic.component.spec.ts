import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayClinicComponent } from './display-clinic.component';

describe('DisplayClinicComponent', () => {
  let component: DisplayClinicComponent;
  let fixture: ComponentFixture<DisplayClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
