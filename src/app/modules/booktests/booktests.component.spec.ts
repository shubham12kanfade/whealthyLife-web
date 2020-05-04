import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktestsComponent } from './booktests.component';

describe('BooktestsComponent', () => {
  let component: BooktestsComponent;
  let fixture: ComponentFixture<BooktestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
