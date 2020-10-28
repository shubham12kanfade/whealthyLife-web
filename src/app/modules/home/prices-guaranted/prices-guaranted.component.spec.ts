import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesGuarantedComponent } from './prices-guaranted.component';

describe('PricesGuarantedComponent', () => {
  let component: PricesGuarantedComponent;
  let fixture: ComponentFixture<PricesGuarantedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricesGuarantedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesGuarantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
