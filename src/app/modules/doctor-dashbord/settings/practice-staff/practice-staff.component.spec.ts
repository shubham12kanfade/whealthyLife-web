import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeStaffComponent } from './practice-staff.component';

describe('PracticeStaffComponent', () => {
  let component: PracticeStaffComponent;
  let fixture: ComponentFixture<PracticeStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
