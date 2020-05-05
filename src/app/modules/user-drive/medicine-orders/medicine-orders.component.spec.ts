import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineOrdersComponent } from './medicine-orders.component';

describe('MedicineOrdersComponent', () => {
  let component: MedicineOrdersComponent;
  let fixture: ComponentFixture<MedicineOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
