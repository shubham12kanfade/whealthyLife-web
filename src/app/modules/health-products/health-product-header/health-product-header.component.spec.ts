import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProductHeaderComponent } from './health-product-header.component';

describe('HealthProductHeaderComponent', () => {
  let component: HealthProductHeaderComponent;
  let fixture: ComponentFixture<HealthProductHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProductHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProductHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
