import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorConsulationComponent } from './doctor-consulation.component';

describe('DoctorConsulationComponent', () => {
  let component: DoctorConsulationComponent;
  let fixture: ComponentFixture<DoctorConsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorConsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorConsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
