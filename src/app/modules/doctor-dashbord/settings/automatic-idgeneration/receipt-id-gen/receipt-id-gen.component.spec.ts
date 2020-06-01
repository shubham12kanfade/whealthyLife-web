import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptIdGenComponent } from './receipt-id-gen.component';

describe('ReceiptIdGenComponent', () => {
  let component: ReceiptIdGenComponent;
  let fixture: ComponentFixture<ReceiptIdGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptIdGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptIdGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
