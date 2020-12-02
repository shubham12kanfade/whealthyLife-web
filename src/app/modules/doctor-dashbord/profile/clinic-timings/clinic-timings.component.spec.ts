import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicTimingsComponent } from './clinic-timings.component';

describe('ClinicTimingsComponent', () => {
  let component: ClinicTimingsComponent;
  let fixture: ComponentFixture<ClinicTimingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicTimingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
