import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CngPasswordComponent } from './cng-password.component';

describe('CngPasswordComponent', () => {
  let component: CngPasswordComponent;
  let fixture: ComponentFixture<CngPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CngPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CngPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
