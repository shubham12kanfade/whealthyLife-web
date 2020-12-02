import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcneCareComponent } from './acne-care.component';

describe('AcneCareComponent', () => {
  let component: AcneCareComponent;
  let fixture: ComponentFixture<AcneCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcneCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcneCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
