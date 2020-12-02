import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassGainersComponent } from './mass-gainers.component';

describe('MassGainersComponent', () => {
  let component: MassGainersComponent;
  let fixture: ComponentFixture<MassGainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassGainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassGainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
