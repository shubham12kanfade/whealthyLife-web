import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivcyPolicyComponent } from './privcy-policy.component';

describe('PrivcyPolicyComponent', () => {
  let component: PrivcyPolicyComponent;
  let fixture: ComponentFixture<PrivcyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivcyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivcyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
