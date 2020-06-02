import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LipBalmComponent } from './lip-balm.component';

describe('LipBalmComponent', () => {
  let component: LipBalmComponent;
  let fixture: ComponentFixture<LipBalmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LipBalmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LipBalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
