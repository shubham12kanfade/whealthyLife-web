import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopHealthComponent } from './pop-health.component';

describe('PopHealthComponent', () => {
  let component: PopHealthComponent;
  let fixture: ComponentFixture<PopHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
