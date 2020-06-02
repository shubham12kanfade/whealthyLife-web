import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntihairlossComponent } from './antihairloss.component';

describe('AntihairlossComponent', () => {
  let component: AntihairlossComponent;
  let fixture: ComponentFixture<AntihairlossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntihairlossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntihairlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
