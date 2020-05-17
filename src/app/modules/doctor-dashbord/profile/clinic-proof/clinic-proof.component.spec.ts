import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicProofComponent } from './clinic-proof.component';

describe('ClinicProofComponent', () => {
  let component: ClinicProofComponent;
  let fixture: ComponentFixture<ClinicProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
