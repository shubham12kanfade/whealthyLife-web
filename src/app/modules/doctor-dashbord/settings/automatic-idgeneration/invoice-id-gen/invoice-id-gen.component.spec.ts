import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceIdGenComponent } from './invoice-id-gen.component';

describe('InvoiceIdGenComponent', () => {
  let component: InvoiceIdGenComponent;
  let fixture: ComponentFixture<InvoiceIdGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceIdGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceIdGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
