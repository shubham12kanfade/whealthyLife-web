import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackPopComponent } from './feed-back-pop.component';

describe('FeedBackPopComponent', () => {
  let component: FeedBackPopComponent;
  let fixture: ComponentFixture<FeedBackPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedBackPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBackPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
