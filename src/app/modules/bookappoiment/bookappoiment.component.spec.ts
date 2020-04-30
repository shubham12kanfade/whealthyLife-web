import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappoimentComponent } from './bookappoiment.component';

describe('BookappoimentComponent', () => {
  let component: BookappoimentComponent;
  let fixture: ComponentFixture<BookappoimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookappoimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookappoimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
