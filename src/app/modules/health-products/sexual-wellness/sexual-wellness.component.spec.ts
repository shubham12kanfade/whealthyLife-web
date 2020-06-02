import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexualWellnessComponent } from './sexual-wellness.component';

describe('SexualWellnessComponent', () => {
  let component: SexualWellnessComponent;
  let fixture: ComponentFixture<SexualWellnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexualWellnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexualWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
