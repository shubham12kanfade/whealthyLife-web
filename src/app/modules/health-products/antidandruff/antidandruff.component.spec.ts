import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntidandruffComponent } from './antidandruff.component';

describe('AntidandruffComponent', () => {
  let component: AntidandruffComponent;
  let fixture: ComponentFixture<AntidandruffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntidandruffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntidandruffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
