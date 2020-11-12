import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorhistoryComponent } from './doctorhistory.component';

describe('DoctorhistoryComponent', () => {
  let component: DoctorhistoryComponent;
  let fixture: ComponentFixture<DoctorhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
