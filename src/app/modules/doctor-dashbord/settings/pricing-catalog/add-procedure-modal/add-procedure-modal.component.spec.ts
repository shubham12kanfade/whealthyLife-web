import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcedureModalComponent } from './add-procedure-modal.component';

describe('AddProcedureModalComponent', () => {
  let component: AddProcedureModalComponent;
  let fixture: ComponentFixture<AddProcedureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcedureModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcedureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
