import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveHeaderComponent } from './drive-header.component';

describe('DriveHeaderComponent', () => {
  let component: DriveHeaderComponent;
  let fixture: ComponentFixture<DriveHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
