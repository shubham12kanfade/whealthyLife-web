import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherCareComponent } from './mother-care.component';

describe('MotherCareComponent', () => {
  let component: MotherCareComponent;
  let fixture: ComponentFixture<MotherCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
