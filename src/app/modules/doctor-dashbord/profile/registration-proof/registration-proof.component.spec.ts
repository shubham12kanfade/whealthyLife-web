import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationProofComponent } from './registration-proof.component';

describe('RegistrationProofComponent', () => {
  let component: RegistrationProofComponent;
  let fixture: ComponentFixture<RegistrationProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
