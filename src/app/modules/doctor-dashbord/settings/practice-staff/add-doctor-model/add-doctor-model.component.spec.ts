import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorModelComponent } from './add-doctor-model.component';

describe('AddDoctorModelComponent', () => {
  let component: AddDoctorModelComponent;
  let fixture: ComponentFixture<AddDoctorModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoctorModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
