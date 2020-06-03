import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeminineHygieneComponent } from './feminine-hygiene.component';

describe('FeminineHygieneComponent', () => {
  let component: FeminineHygieneComponent;
  let fixture: ComponentFixture<FeminineHygieneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeminineHygieneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeminineHygieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
