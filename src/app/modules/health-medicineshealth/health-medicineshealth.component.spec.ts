import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthMedicineshealthComponent } from './health-medicineshealth.component';

describe('HealthMedicineshealthComponent', () => {
  let component: HealthMedicineshealthComponent;
  let fixture: ComponentFixture<HealthMedicineshealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthMedicineshealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthMedicineshealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
