import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientIdGenComponent } from './patient-id-gen.component';

describe('PatientIdGenComponent', () => {
  let component: PatientIdGenComponent;
  let fixture: ComponentFixture<PatientIdGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientIdGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientIdGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
