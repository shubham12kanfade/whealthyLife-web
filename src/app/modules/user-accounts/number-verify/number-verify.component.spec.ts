import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberVerifyComponent } from './number-verify.component';

describe('NumberVerifyComponent', () => {
  let component: NumberVerifyComponent;
  let fixture: ComponentFixture<NumberVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
