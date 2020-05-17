import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectClinicComponent } from './connect-clinic.component';

describe('ConnectClinicComponent', () => {
  let component: ConnectClinicComponent;
  let fixture: ComponentFixture<ConnectClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
