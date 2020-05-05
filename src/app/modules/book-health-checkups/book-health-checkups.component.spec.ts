import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHealthCheckupsComponent } from './book-health-checkups.component';

describe('BookHealthCheckupsComponent', () => {
  let component: BookHealthCheckupsComponent;
  let fixture: ComponentFixture<BookHealthCheckupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHealthCheckupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHealthCheckupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
