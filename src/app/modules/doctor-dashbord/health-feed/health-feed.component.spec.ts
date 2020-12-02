import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthFeedComponent } from './health-feed.component';

describe('HealthFeedComponent', () => {
  let component: HealthFeedComponent;
  let fixture: ComponentFixture<HealthFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
