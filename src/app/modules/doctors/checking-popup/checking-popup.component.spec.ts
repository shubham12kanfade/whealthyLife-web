import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingPopupComponent } from './checking-popup.component';

describe('CheckingPopupComponent', () => {
  let component: CheckingPopupComponent;
  let fixture: ComponentFixture<CheckingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckingPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
