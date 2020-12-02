import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NABLComponent } from './nabl.component';

describe('NABLComponent', () => {
  let component: NABLComponent;
  let fixture: ComponentFixture<NABLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NABLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NABLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
