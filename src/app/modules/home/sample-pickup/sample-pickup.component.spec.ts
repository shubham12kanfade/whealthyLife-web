import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePickupComponent } from './sample-pickup.component';

describe('SamplePickupComponent', () => {
  let component: SamplePickupComponent;
  let fixture: ComponentFixture<SamplePickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
