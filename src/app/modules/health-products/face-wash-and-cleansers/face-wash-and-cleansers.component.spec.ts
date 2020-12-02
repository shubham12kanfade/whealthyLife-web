import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceWashAndCleansersComponent } from './face-wash-and-cleansers.component';

describe('FaceWashAndCleansersComponent', () => {
  let component: FaceWashAndCleansersComponent;
  let fixture: ComponentFixture<FaceWashAndCleansersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceWashAndCleansersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceWashAndCleansersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
