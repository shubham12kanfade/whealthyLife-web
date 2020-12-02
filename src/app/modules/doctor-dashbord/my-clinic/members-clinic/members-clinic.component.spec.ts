import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersClinicComponent } from './members-clinic.component';

describe('MembersClinicComponent', () => {
  let component: MembersClinicComponent;
  let fixture: ComponentFixture<MembersClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
